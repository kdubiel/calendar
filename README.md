# Calendar

## Requirements

- Docker

- docker-compose

## Installation

- **Create .env file in root directory !!**

```
NODE_ENV=development

MONGO_ROOT_USERNAME=root
MONGO_ROOT_PASSWORD=password

MONGO_DATABASE=kdml
MONGO_USERNAME=kamil
MONGO_PASSWORD=dubiel

MONGO_DATABASE=kdml
MONGO_URL=database:27017
```

- type `docker-compose up` in root directory

- wait for message saying that client is listening on port 3000 (_it may take some time to install and launch and containers like to crash while installing packages_)

- visit `http://localhost:3000`

## Debugging

### API

- Open dedicated Chrome Node Devtools

- Add `localhost:4010`

### Client

Client is debuggable like regular React app

## ESLint

Sometimes ESLint doesn't livecheck our code, to fix this open `.vscode/settings.json` inside root directory and add:

```
"eslint.workingDirectories": ["./packages/api", "./packages/client"]
```

## TODO

- REFACTOR + CLEANUP

- Fix MaterialUI 'findDOMNode is deprecated in StrictMode' warning

- Better Thunk Actions types

- Better error messages

- Fix DatePicker _findDOMNode is deprecated in StrictMode._ error

- Redux normalization

- Loaders

- Split day / task stores
