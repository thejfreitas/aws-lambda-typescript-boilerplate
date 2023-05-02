# aws-lambda-typescript-boilerplate

[AWS Lambda](https://aws.amazon.com/lambda/) function template using [Serverless Framework](https://www.serverless.com) in TypeScript

## Requirements

### [NodeJs](https://nodejs.org/en/)

`Expected version: 16.14.0`

### [Serverless CLI](https://www.serverless.com/framework/docs/getting-started)

```
npm install -g serverless
```

### [Yarn](https://yarnpkg.com/)

After you clone this repository you must run the following command in order to install the dependency packages:

```
yarn
```

### Develop

We can develop and debug lambda functions locally using [`serverless-offline`](https://www.serverless.com/plugins/serverless-offline) plugin.

```
yarn develop
```

#### Debug

You can debug your function using `invoke` locally. [Check the documentation](https://www.serverless.com/framework/docs/getting-started)

```
yarn debug:hello
```
