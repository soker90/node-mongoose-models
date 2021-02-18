const {
  exampleData,
  twoExample,
} = require('../mocks/example');
const models = require('../..');

const fakeDatabase = require('../test-db')(models.mongoose);

const { ExampleModel } = models;

/**
 * Test collection
 * @param {Object} document
 * @param {Object} mock
 * @private
 */
const _checkCreated = (document, mock) => {
  expect(document.myNumber)
    .toBe(mock.myNumber);
  expect(document.myString)
    .toBe(mock.myString);
};

describe('example', () => {
  beforeAll(() => fakeDatabase.connect());

  afterAll(() => fakeDatabase.disconnect());

  describe('Create a new example', () => {
    beforeAll(() => ExampleModel.create(exampleData));

    afterAll(() => fakeDatabase.clean());

    test('It should contain 1 document', async () => {
      const counter = await ExampleModel.countDocuments();
      expect(counter)
        .toBe(1);
    });

    test('It should contain all the properties specified in the model', async () => {
      const document = await ExampleModel.findOne();

      _checkCreated(document, exampleData);
    });
  });

  describe('Create multiple examples', () => {
    beforeAll(async () => {
      await ExampleModel.create(twoExample.examples[0]);
      await ExampleModel.create(twoExample.examples[1]);
    });

    afterAll(() => fakeDatabase.clean());

    test('It should contain 2 documents', async () => {
      const counter = await ExampleModel.countDocuments();
      expect(counter)
        .toBe(2);
    });

    test('Check accounts created', async () => {
      const documentList = await ExampleModel.find({});

      _checkCreated(documentList[0], twoExample.examples[0]);
      _checkCreated(documentList[1], twoExample.examples[1]);
    });
  });

});
