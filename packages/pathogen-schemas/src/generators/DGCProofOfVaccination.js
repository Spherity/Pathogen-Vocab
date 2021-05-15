const faker = require('faker');

const { getDGCSubject } = require('./DGCSubject');
const { getDGCVaccinationInformation } = require('./DGCVaccinationInformation');

const getDGCProofOfVaccination = () => {
const getVaxInfo = () => {
    const info = getDGCVaccinationInformation();
    return info;
};

const getPatientInfo = () => {
    const subject = getDGCSubject();
    return subject;
};

const example = {
        '@context': ['https://w3id.org/pathogen/v1'],
        type: 'DGCProofOfVaccination',
        vaccinationInformation: getVaxInfo(),
        personalInformation: getPatientInfo(),
    };
    return example;
};

module.exports = { getDGCProofOfVaccination };
