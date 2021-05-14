const faker = require('faker');

faker.seed(42);
const randomType = faker.random.arrayElement(['male', 'female', 'other', 'unknown']);

const getDGCSubject = () => {
  const example = {
    '@context': ['https://w3id.org/pathogen/v1'],
    type: 'DGCSubject',
    familyName: faker.name.lastName(),
    givenName: faker.name.firstName(),
    birthDate: faker.date.between('1950-01-01', '2004-01-01'),
    gender: randomType
  };
  return example;
};

module.exports = { getDGCSubject };
