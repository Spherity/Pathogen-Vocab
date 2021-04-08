const faker = require('faker');
const { getOrganization } = require('./Organization');

const getCovidTestRegistrationCredential = () => {
  const nationalHealthAgency = `${faker.company.companyName()}`;

  const testID = `${faker.random.alphaNumeric(10).toUpperCase()}`;

  const productName = `${faker.commerce.productDescription()}`;

    const getStatus = () => {
    const types = ['Yes', 'No'];
    return faker.random.arrayElement(types);
  };

  const marketingAuthorativeHolder = `${faker.company.companyName()}`;

  const getTestSensitivity = () => {
    const types = ['Very High', 'High', 'Medium', 'Low'];
    return faker.random.arrayElement(types);
  };

  const getSpecificity = () => {
    const types = ['Sars-Cov2-Original', 'Sars-Cov2-Variant'];
    return faker.random.arrayElement(types);
  };
  const specificity = [];
  specificity.push(getSpecificity());

  const distributor = getOrganization();
  delete distributor['@context'];

  const testDocumentationLink = `https://vc.example.com/?queryID=${faker.random.hexaDecimal(64,)}`;

  const example = {
    '@context': ['https://w3id.org/pathogen/v1'],
    type: 'CovidTestRegistrationCredential',
    nationalHealthAgency,
    testID,
    productName,
    evaluation: getStatus(),
    marketingAuthorativeHolder,
    distributor,
    sensitivity: getTestSensitivity(),
    specificity,
    testDocumentationLink
  };
  return example;
};

module.exports = { getCovidTestRegistrationCredential };
