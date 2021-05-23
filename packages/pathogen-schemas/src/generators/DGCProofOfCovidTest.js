const faker = require('faker');
const { getDGCSubject } = require('./DGCSubject');
const { getDGCTestInformation } = require('./DGCTestInformation');

const getDGCProofOfCovidTest = () => {
    const getTestInformation = () => {
        const testinfo = getDGCTestInformation();
        return testinfo;
    };

    const getPersonalInformation = () => {
        const personalinfo = getDGCSubject();
        return personalinfo;
    };

    const example = {
        '@context': ['https://w3id.org/pathogen/v1'],
        type: 'DGCProofOfCovidTest',
        testInformation: getTestInformation(),
        personalInformation: getPersonalInformation(),
    };
    return example;
};

module.exports = { getDGCProofOfCovidTest };
