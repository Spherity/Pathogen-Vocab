const faker = require('faker');

const getLegalEntityIdentifierCredential = () => {
  const example = {
    '@context': ['https://w3id.org/pathogen/v1'],
    type: 'LegalEntityIdentifierCredential',
    leiCode: faker.random.alphaNumeric(20).toUpperCase(),
    certificateName: 'US Legal Entity Certificate',
  };

  return example;
};

module.exports = { getLegalEntityIdentifierCredential };
