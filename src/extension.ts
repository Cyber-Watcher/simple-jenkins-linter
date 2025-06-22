import * as vscode from 'vscode';
import * as cp from 'child_process';

export function activate(context: vscode.ExtensionContext) {
	const outputChannel = vscode.window.createOutputChannel("Jenkins Linter");

	async function validateJenkinsfile(document: vscode.TextDocument) {
		const config = vscode.workspace.getConfiguration('jenkinsLinter');
		const url = config.get<string>('url')!;
		const user = config.get<string>('user')!;
		const token = config.get<string>('token')!;
		const ignoreSSL = config.get<boolean>('ignoreSSL');

		if (document.languageId !== 'groovy' && !document.fileName.toLowerCase().includes('jenkinsfile')) {
			return;
		}

		const text = document.getText();

		const curlArgs = [
			'-X', 'POST',
			'-u', `${user}:${token}`,
			'-F', 'jenkinsfile=<-'
		];

		if (ignoreSSL) {
			curlArgs.unshift('-k');
		}

		curlArgs.push(`${url}/pipeline-model-converter/validate`);

		try {
			const result = cp.spawnSync('curl', curlArgs, {
				input: text,
				encoding: 'utf8'
			});

			if (result.error) throw result.error;
			if (result.status !== 0) throw new Error(`curl exited with code ${result.status}: ${result.stderr}`);

			const output = result.stdout.trim();

			if (output.includes("successfully validated")) {
				vscode.window.showInformationMessage('✅ Jenkinsfile is valid');
			} else {
				outputChannel.clear();
				outputChannel.appendLine("❌ Jenkinsfile validation failed:");
				outputChannel.appendLine(output);
				outputChannel.show(true);
				vscode.window.showErrorMessage('❌ Jenkinsfile validation failed — check "Jenkins Linter" output for details');
			}

		} catch (err: any) {
			outputChannel.clear();
			outputChannel.appendLine(`❌ Error while validating Jenkinsfile:\n${err.message}`);
			outputChannel.show(true);
			vscode.window.showErrorMessage(`Validation error: ${err.message}`);
		}
	}

	// Ручной запуск через команду
	const disposable = vscode.commands.registerCommand('simple.jenkinsLinter.validateJenkinsfile', async () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			vscode.window.showErrorMessage('No active editor. Open a Jenkinsfile first.');
			return;
		}
		validateJenkinsfile(editor.document);
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(outputChannel);

	// Автопроверка при сохранении файла
	const config = vscode.workspace.getConfiguration('jenkinsLinter');
	if (config.get<boolean>('autoValidateOnSave')) {
		const saveListener = vscode.workspace.onDidSaveTextDocument((doc) => {
			validateJenkinsfile(doc);
		});
		context.subscriptions.push(saveListener);
	}
}

export function deactivate() {}
