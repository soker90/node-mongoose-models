# Node Mongoose Models

![GitHub](https://img.shields.io/github/license/soker90/node-mongoose-models)
[![npm version](https://badge.fury.io/js/node-mongoose-models.svg)](https://badge.fury.io/js/node-mongoose-models)
![](https://github.com/soker90/node-mongoose-models/workflows/Node.js%20CI/badge.svg)
[![dependencies Status](https://david-dm.org/soker90/node-mongoose-models/status.svg)](https://david-dm.org/soker90/node-mongoose-models)
[![devDependencies Status](https://david-dm.org/soker90/node-mongoose-models/dev-status.svg)](https://david-dm.org/soker90/node-mongoose-models?type=dev)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=soker90_node-mongoose-models&metric=alert_status)](https://sonarcloud.io/dashboard?id=soker90_node-mongoose-models)
[![codecov](https://codecov.io/gh/soker90/node-mongoose-models/branch/master/graph/badge.svg)](https://codecov.io/gh/soker90/node-mongoose-models)

This is a module of models for Arroyo ERP.

## Installation

```bash
  npm install arroyo-erp-models --save
```

## Cambios en la versión

Ver [CHANGELOG](https://github.com/soker90/node-mongoose-models/blob/master/CHANGELOG.md)

## Available models

```javascript
  import models from 'node-mongoose-models'; // const { AccountModel } = require('node-mongoose-models');

  models.mongoose // Expose a mongoose instance to connect
  models.connect() // Expose a method to connect to mongoose and response with the connection

  models.AccountModel // Expose a Account model with its statics & methods
  models.AutoIncrement // Expose a AutoIncrement model with its statics & methods
  models.ExamplegModel // Expose a Billing model with its statics & methods

```

