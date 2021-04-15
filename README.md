# Use Schematics with Vue

This repository is a Schematic implementation that installs BootstrapVue into Vue projects. 

Please read [Schematics: A Plug-in System for JavaScript Projects](https://scotch.io/bar-talk/schematics-a-plug-in-system-for-javascript-projects) for a tutorial that explains how to build this example.

## Getting Started

**Prerequisites:** [Node 11](https://nodejs.org).

To install this example, run the following commands:

```sh
git clone https://github.com/oktadeveloper/vue-schematics-example.git bvi
cd bvi
```

Run `npm pack` to package it up so you can install it in a Vue.js App.

Create a Vue app to test this Schematic and install BootstrapVue.

```sh
vue create test
cd test
npm link ../bvi
```

Install `schematics-cli` and run it:

```
npm i -g @angular-devkit/schematics-cli@0.1102.9
schematics bvi:bvi
```

## Use OktaDev Schematics

You can use [@oktadev/schematics](https://github.com/oktadeveloper/schematics) to add authentication with OIDC to a Vue app. Create a Vue app with TypeScript. Run `vue create vbi`, select **Manually select features** and choose **TypeScript**, **PWA**, and **Router**.

Then cd into it and install @oktadev/schematics:

```
npm i -D @oktadev/schematics
schematics @oktadev/schematics:add-auth
```

This will prompt you for your Okta OIDC settings. To get those, install the [Okta CLI](https://cli.okta.com/), open a new terminal window, and run `okta register` to sign up for a new account. If you already have an account, run `okta login`. Then, run `okta apps create`. Select the default app name, or change it as you see fit. Choose **Single-Page App** and press **Enter**.

Use `http://localhost:8080/callback` for the Redirect URI and accept the default Logout Redirect URI of `http://localhost:8080`.

Copy your issuer and client ID into the prompts. When the installation completes, run `npm run serve` and marvel at your Vue app with OIDC authentication!

## Help

Please post any questions as comments on this repo's [associated article](https://developer.okta.com/blog/2019/05/21/vue-schematics), or visit our [Okta Developer Forums](https://devforum.okta.com/). 

## License

Apache 2.0, see [LICENSE](LICENSE).
 
