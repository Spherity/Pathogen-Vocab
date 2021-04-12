const faker = require('faker');

faker.seed(42);
const { getOrganization } = require('./Organization');

const getPerson = () => {
  // Get organization
  const worksFor = getOrganization();
  delete worksFor['@context'];

  // create phone number beginning with 555 to ensure no real number is used
  const phone = `555-${faker.random.number({ min: 100, max: 999 })}-${faker.random.number({ min: 1000, max: 9999 })}`;

  // type of identifying document
  const getIdnumberType = () => {
    const types = ['Passport', 'National Identity Card'];
    return faker.random.arrayElement(types);
  };

  const example = {
    '@context': ['https://w3id.org/pathogen/v1'],
    type: 'Person',
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.exampleEmail(),
    phoneNumber: phone,
    worksFor,
    jobTitle: faker.name.jobTitle(),
    idnumber: faker.random.alpha({ count: 12 }).toUpperCase(),
    idnumberType: getIdnumberType(),
    birthDate: '1985-11-23'
  };
  return example;
};

module.exports = { getPerson };
