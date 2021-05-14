const faker = require('faker');
const { getDGCSubject } = require('./DGCSubject');
const { getDGCInfectionInformation } = require('./DGCInfectionInformation');

const getDGCProofOfRecovery = () => {
    const getInfectionInformation = () => {
        const infection = getDGCInfectionInformation();
        return infection;
    };

    const getPersonalInformation = () => {
        const personalinfo = getDGCSubject();
        return personalinfo;
    };

    const example = {
        '@context': ['https://w3id.org/pathogen/v1'],
        type: 'DGCProofOfRecovery',
        infectionInformation: getInfectionInformation(),
        personalInformation: getPersonalInformation(),
    };
    return example;
};

module.exports = { getDGCProofOfRecovery };
