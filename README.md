# Use Schematics with Vue

This repository is a Schematic implementation that installs BootstrapVue into Vue projects. 

Please read [Schematics: A Plug-in System for JavaScript Projects](https://scotch.io/bar-talk/schematics-a-plug-in-system-for-javascript-projects) for a tutorial that explains how to build this example.

## Getting Started

**Prerequisites:** [Node 11](https://nodejs.org).

To install this example, run the following commands:

```sh
git clone git@github.com:oktadeveloper/vue-schematics-example.git bvi
cd bvi
```

Run `npm pack` to package it up so you can install it in a Vue.js App.

Create a Vue app to test this Schematic and install reactstrap.

```sh
vue create test
cd test
npm link ../bvi
```

Install `schematics-cli` and run it:

```
npm i -g @angular-devkit/schematics-cli@0.13.4
schematics bvi:bvi
```

## Use OktaDev Schematics

You can use [@oktadev/schematics](https://github.com/oktadeveloper/schematics) to add authentication with OIDC to a Vue app. Create a Vue app with TypeScript. Run `vue create vbi`, select **Manually select features** and choose **TypeScript**, **PWA**, and **Router**.

Then cd into it and install @oktadev/schematics:

```
npm i @oktadev/schematics
schematics @oktadev/schematics:add-auth
```

This will prompt you for your Okta OIDC settings. To get those, log in to your Okta Developer account (or [sign up](https://developer.okta.com/signup/) if you don't have an account) and navigate to **Applications** > **Add Application**. Click **Single-Page App** and click **Next**. Give the app a name you'll remember and click **Done**.

When prompted, enter your issuer (it can be found in Okta's dashboard under **API** > **Authorization Servers**) and client ID. When the installation completes, run `npm start` and marvel at your React app with OIDC authentication!

## Help

Please post any questions as comments on this repo's [blog post](https://developer.okta.com/blog/2019/03/05/react-schematics), or visit our [Okta Developer Forums](https://devforum.okta.com/). 

## License

Apache 2.0, see [LICENSE](LICENSE).
 
