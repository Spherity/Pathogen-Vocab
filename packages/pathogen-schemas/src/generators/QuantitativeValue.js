const faker = require('faker');

const getQuantitativeValue = () => {
  const unitCode = faker.random.alphaNumeric({ count: 20 }).toUpperCase();

  const example = {
    '@context': ['https://w3id.org/pathogen/v1'],
    type: 'QuantitativeValue',
    unitCode,
    value: faker.random.number({ min: 10, max: 10000 }).toString(),
  };
  return example;
};

module.exports = { getQuantitativeValue };
