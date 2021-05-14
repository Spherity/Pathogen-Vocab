const faker = require('faker');

const getDGCInfectionInformation = () => {
  const getCountryOfTest = () => {
    const isocodes = ['it', 'de', 'cz', 'in'];
    return isocodes[faker.random.number({ min: 0, max: 3 })];
  };

 const getDiseaseRecoveredFrom = () => 'sct#840539006 COVID-19';

 const getDateFirstPositive = () => faker.date.between('2019-09-01', '2021-05-14');

 const example = {
    '@context': ['https://w3id.org/pathogen/v1'],
    type: 'DGCInfectionInformation',
     diseaseRecoveredFrom: getDiseaseRecoveredFrom(),
     dateFirstPositive: getDateFirstPositive(),
     countryOfTest: getCountryOfTest(),
  };
  return example;
};

module.exports = { getDGCInfectionInformation };
