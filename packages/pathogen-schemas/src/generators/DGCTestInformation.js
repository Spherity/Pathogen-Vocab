const faker = require('faker');
const { getDGCSubject } = require('./DGCSubject');

const getDGCTestInformation = () => {
  const getTestName = () => {
    const testnames = ['jrc#1232: Abbott Rapid Diagnostics Panbio™ COVID-19 Ag Rapid Test',
                    'jrc#1065: Becton Dickinson BD Veritor System for Rapid Deteciton os SARS-CoV-2'
                  ];
    return testnames[faker.random.number({ min: 0, max: 1 })];
  };

  const getTestResult = () => {
    const results = ['1240581000000104-Severe acute respiratory syndrome coronavirus 2 detected',
                   '1240591000000102-Severe acute respiratory syndrome coronavirus 2 not detected'];
    return results[faker.random.number({ min: 0, max: 1 })];
  };

  /* const getTestRecipient = () => {
      const subject = getDGCSubject();
      // remove @context in subject
      return subject;
  };
 */
  const getTestType = () => {
    const types = [
                    'loinc#LP6464-4: Nucleic acid amplification with probe detection',
                    'loinc#LP217198-3: Rapid immunoassay'
                  ];
    return types[faker.random.number({ min: 0, max: 1 })];
  };

  const getCountryOfAdministration = () => {
    const isocodes = ['it', 'de', 'cz'];
    return isocodes[faker.random.number({ min: 0, max: 2 })];
  };

  const getSampleOriginType = () => {
    const types = [
        'sct#258500001:Nasopharyngeal swab',
        'sct#258411007:Nasopharyngeal aspirate',
        'sct#258467004:Nasopharyngeal washings',
        'sct#461911000124106:Oropharyngeal swab',
        'sct#472881004:Pharyngeal swab',
        'sct#871810001:Mid-turbinate nasal swab',
        'sct#445297001:Swab of internal nose',
        'sct#697989009:Anterior nares swab',
        'sct#258529004:Throat swab',
        'sct#445447003:Specimen from trachea obtained by aspiration',
        'sct#309171007:Lower respiratory fluid sample',
        'sct#258607008:Bronchoalveolar lavage fluid sample',
        'sct#119342007:Saliva specimen',
        'sct#119334006:Sputum specimen',
        'sct#119297000:Blood specimen',
        'sct#119361006:Plasma specimen',
        'sct#119364003:Serum specimen',
        'sct#122555007:Venous blood specimen',
        'sct#122592007:Acellular blood (serum or plasma) specimen',
        'sct#122554006:Capillary blood specimen',
        'sct#440500007:Dried blood spot specimen'
    ];
    return types[faker.random.number({ min: 0, max: 20 })];
  };

  const getSampleOriginDateTime = () => faker.date.between('2021-05-11', '2021-04-25');

  const getTestCenter = () => {
    const types = [
        'Hospital Na Františku Prague',
    'AZ. OSPEDALIERO - UNIVERSITARIA CAREGGI'
    ];
    return types[faker.random.number({ min: 0, max: 1 })];
  };

  const getValidatorId = () => {
    const ids = [
        'codiceFiscale:VRDRCR70H08H703B',
        'test-id'
    ];
    return ids[faker.random.number({ min: 0, max: 1 })];
  };

 const example = {
    '@context': ['https://w3id.org/pathogen/v1'],
    type: 'DGCTestInformation',
     testName: getTestName(),
     testType: getTestType(),
     sampleOriginType: getSampleOriginType(),
     sampleCollectionDateTime: getSampleOriginDateTime(),
     testResult: getTestResult(),
     testCenter: getTestCenter(),
     testValidatorId: getValidatorId(),
     // testRecipient: getTestRecipient(),
     countryOfTestAdminstration: getCountryOfAdministration(),
  };
  return example;
};

module.exports = { getDGCTestInformation };
