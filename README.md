# Simple Jenkins Pipeline Linter

A Visual Studio Code extension that allows you to validate Jenkinsfiles using Jenkins' HTTP API without SSH.

---

## Description

This extension makes it easy to validate the syntax and structure of your Jenkinsfile directly from VSCode by sending the file content to your Jenkins server via its standard HTTP API.

Quickly ensure your Jenkinsfile is valid without leaving the editor or setting up complex tools.

---

## Features

- Validate the currently open Jenkinsfile using a command from the command palette
- Optional automatic validation on file save
- Configurable Jenkins connection settings:
  - Jenkins server URL (supports http or https)
  - Username and API token for authentication
  - Option to ignore SSL errors (useful for self-signed certificates)

---

## Installation

1. Install the extension from the VSCode marketplace or locally from the `.vsix` file.
2. Open VSCode settings (`Ctrl+,` or `Cmd+,` on macOS).
3. Find the **Jenkins Linter** section and configure the required parameters.

---

## Settings

| Setting                         | Type      | Description                                                   | Example Value                 |
|--------------------------------|-----------|---------------------------------------------------------------|------------------------------|
| `jenkinsLinter.url`             | string    | Your Jenkins server URL                                       | `http://localhost:8080`       |
| `jenkinsLinter.user`            | string    | Jenkins username                                              | `admin`                      |
| `jenkinsLinter.token`           | string    | Jenkins API token                                             | `1234567890abcdef`            |
| `jenkinsLinter.ignoreSSL`       | boolean   | Ignore SSL errors (for self-signed certificates)             | `false`                      |
| `jenkinsLinter.autoValidateOnSave` | boolean | Enable automatic Jenkinsfile validation on file save         | `false`                      |

Settings example:

```json
"jenkinsLinter.url": "http://localhost:8080",
"jenkinsLinter.user": "jenkinsuser",
"jenkinsLinter.token": "1113da6bd919ad96dc1b84b0e705dea61a",
"jenkinsLinter.ignoreSSL": true,
"jenkinsLinter.autoValidateOnSave": true
```

---

## Usage

- Open your Jenkinsfile in VSCode.
- Run the command **Jenkins: Validate Jenkinsfile** from the command palette (`F1` and start typing).
- The validation result will appear as a notification.
- If `autoValidateOnSave` is enabled, validation will run automatically on each file save.

---

## FAQ

### What if I use a self-signed SSL certificate?

Enable `jenkinsLinter.ignoreSSL` in the settings to ignore SSL errors.

### Can I validate other Groovy scripts, not just Jenkinsfiles?

The extension sends the currently opened file content for validation. It works best with Jenkinsfiles and compatible pipeline scripts.

---

## License

MIT © [CyberWatcher]

---

If you have questions or suggestions, please open an issue or contact us via the repository.


# Simple Jenkins Pipeline Linter (Russian)

Расширение для Visual Studio Code, позволяющее валидировать Jenkinsfile с помощью HTTP API Jenkins без использования SSH.

---

## Описание

Это расширение облегчает проверку синтаксиса и структуры Jenkinsfile прямо из редактора VSCode, отправляя содержимое файла на валидацию в ваш Jenkins сервер через стандартный HTTP API.

Вы можете быстро убедиться, что ваш Jenkinsfile корректен, не покидая редактор и не настраивая дополнительные сложные инструменты.

---

## Возможности

- Валидация текущего открытого Jenkinsfile по команде из командной палитры
- Опциональная автоматическая проверка при сохранении файла
- Настраиваемые параметры подключения к Jenkins:
  - URL Jenkins сервера (с http или https)
  - Имя пользователя и API токен для авторизации
  - Опция игнорирования ошибок SSL (для самоподписанных сертификатов)

---

## Установка

1. Установите расширение через маркетплейс VSCode или локально из `.vsix` файла.
2. Перейдите в настройки VSCode (`Ctrl+,` или `Cmd+,` на macOS).
3. Найдите раздел `Jenkins Linter` и заполните необходимые параметры.

---

## Настройки

| Параметр                     | Тип       | Описание                                                          | Пример значения               |
|------------------------------|-----------|-------------------------------------------------------------------|------------------------------|
| `jenkinsLinter.url`           | string    | URL вашего Jenkins сервера                                        | `http://localhost:8080`       |
| `jenkinsLinter.user`          | string    | Имя пользователя Jenkins                                         | `admin`                      |
| `jenkinsLinter.token`         | string    | API токен пользователя Jenkins                                   | `1234567890abcdef`            |
| `jenkinsLinter.ignoreSSL`     | boolean   | Игнорировать ошибки SSL (для самоподписанных сертификатов)        | `false`                      |
| `jenkinsLinter.autoValidateOnSave` | boolean | Включить автоматическую проверку Jenkinsfile при сохранении файла | `false`                      |

Пример настроек:

Settings example:

```json
"jenkinsLinter.url": "http://localhost:8080",
"jenkinsLinter.user": "jenkinsuser",
"jenkinsLinter.token": "1113da6bd919ad96dc1b84b0e705dea61a",
"jenkinsLinter.ignoreSSL": true,
"jenkinsLinter.autoValidateOnSave": true
```

---

## Использование

- Откройте Jenkinsfile в редакторе VSCode.
- Запустите команду из командной палитры: **Jenkins: Validate Jenkinsfile** (нажмите `F1` и начните вводить).
- Результат проверки появится в виде уведомления.
- При включенной опции `autoValidateOnSave` проверка будет автоматически запускаться при каждом сохранении файла.

---

## FAQ

### Что делать, если у меня самоподписанный сертификат?

Включите параметр `jenkinsLinter.ignoreSSL` в настройках, чтобы игнорировать ошибки SSL.

### Можно ли валидировать не Jenkinsfile, а другие groovy скрипты?

Расширение отправляет на проверку содержимое открытого файла. Валидация корректна для Jenkinsfile и совместимых pipeline-скриптов.

---

## Лицензия

MIT © [CyberWatcher]

---

Если будут вопросы или предложения — открывайте issue или пишите прямо в репозиторий.



