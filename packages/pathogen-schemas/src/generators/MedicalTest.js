const faker = require('faker');
const { getOrganization } = require('./Organization');

const getMedicalTest = () => {
  const getStatus = () => {
    const types = ['Approved', 'Revoked', 'Preliminary Approval', 'In Trial'];
    return faker.random.arrayElement(types);
  };

  const getTestStatus = () => {
    const types = ['Positive', 'Negative'];
    return faker.random.arrayElement(types);
  };

  const getSpecialty = () => {
    const types = ['Communicable Disease', 'Non-Communicable Disease', 'Other'];
    return faker.random.arrayElement(types);
  };

  const getDiagnoseTarget = () => {
    const types = ['Covid19 UK Variant', 'Covid19 SA Variant', 'Covid19 2020 Variants'];
    return faker.random.arrayElement(types);
  };

  const getAllowableTestSubjects = () => {
    const types = ['Any Person'];
    return faker.random.arrayElement(types);
  };

  const getMedicineSystem = () => {
    const types = ['evidence-based'];
    return faker.random.arrayElement(types);
  };

  const getDrugImpact = () => {
    const types = ['Antibiotics', 'High Blood Pressure Medicines', 'Birthcontrol'];
    return faker.random.arrayElement(types);
  };

  const valauth = getOrganization();
  delete valauth['@context'];

  const example = {
    '@context': ['https://w3id.org/pathogen/v1'],
    type: 'MedicalTest',
    affectedBy: [getDrugImpact()],
    normalRange: [getAllowableTestSubjects()],
    signDetected: getTestStatus(),
    usedToDiagnose: getDiagnoseTarget(),
    usesDevice: faker.random.alpha({ count: 12 }).toUpperCase(),
    code: faker.random.alpha({ count: 8 }).toUpperCase(),
    legalStatus: getStatus(),
    medicineSystem: getMedicineSystem(),
    recognizingAuthority: valauth,
    relevantSpecialty: getSpecialty()
  };
  return example;
};

module.exports = { getMedicalTest };
