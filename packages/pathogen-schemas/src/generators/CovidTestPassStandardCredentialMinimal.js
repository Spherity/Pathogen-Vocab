const faker = require('faker');
const { getPerson } = require('./Person');

const getCovidTestPassStandardCredentialMinimal = () => {
  const getStatus = () => {
    const types = ['Positive', 'Negative'];
    return faker.random.arrayElement(types);
  };

  const getTestType = () => {
    const types = ['Rapid PCR Test', 'PCR Test', 'Antigen Test'];
    return faker.random.arrayElement(types);
  };

  const patient = getPerson();
  delete patient['@context'];
  delete patient.email;
  delete patient.phoneNumber;
  delete patient.worksFor;
  delete patient.jobTitle;
  delete patient.birthDate;
  delete patient.firstName;
  delete patient.lastName;

  const example = {
    '@context': ['https://w3id.org/pathogen/v1'],
    type: 'StandardCovidTestPassMinimal',
    testType: getTestType(),
    testedPerson: patient,
    testResult: getStatus()
  };
  return example;
};

module.exports = { getCovidTestPassStandardCredentialMinimal };
