const faker = require('faker');
const { getMedicalTest } = require('./MedicalTest');
const { getOrganization } = require('./Organization');
const { getPerson } = require('./Person');

const getCovidTestPassEvidenceDocument = () => {
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

  const test = getMedicalTest();
  delete test['@context'];

  const example = {
    '@context': ['https://w3id.org/pathogen/v1'],
    type: 'CovidTestPassEvidenceDocument',
    testType: getTestType(),
    testCenter: valauth,
    healthProfessionalAdministered: getHealthAdmin(),
    testedPerson: patient,
    testResult: getStatus(),
    testDetails: test
  };
  return example;
};

module.exports = { getCovidTestPassEvidenceDocument };
