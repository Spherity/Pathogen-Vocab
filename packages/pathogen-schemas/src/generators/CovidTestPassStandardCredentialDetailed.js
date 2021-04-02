const faker = require('faker');
const { getMedicalTest } = require('./MedicalTest');
const { getOrganization } = require('./Organization');
const { getPerson } = require('./Person');

const getCovidTestPassStandardCredentialDetailed = () => {
  const getStatus = () => {
    const types = ['Positive', 'Negative'];
    return faker.random.arrayElement(types);
  };

  const getTestType = () => {
    const types = ['Rapid PCR Test', 'PCR Test', 'Antigen Test'];
    return faker.random.arrayElement(types);
  };

  const getHealthAdmin = () => {
    const types = ['Yes', 'No', 'Unkown'];
    return faker.random.arrayElement(types);
  };

  const valauth = getOrganization();
  delete valauth['@context'];

  const patient = getPerson();
  delete patient['@context'];
  delete patient.email;
  delete patient.phoneNumber;
  delete patient.worksFor;
  delete patient.jobTitle;

  const test = getMedicalTest();
  delete test['@context'];

  const example = {
    '@context': ['https://w3id.org/pathogen/v1'],
    type: 'StandardCovidTestPassDetailed',
    testType: getTestType(),
    testCenter: valauth,
    healthProfessionalAdministered: getHealthAdmin(),
    testedPerson: patient,
    testResult: getStatus(),
    testDetails: test
  };
  return example;
};

module.exports = { getCovidTestPassStandardCredentialDetailed };
