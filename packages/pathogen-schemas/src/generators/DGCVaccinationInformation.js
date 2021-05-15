const faker = require('faker');

const getDGCVaccinationInformation = () => {
    const getAdministeringCenter = () => {
        const centers = [
            'AZ. OSPEDALIERO - UNIVERSITARIA CAREGGI',
            'München Klinik Bogenhausen',
            'Hospital Universario La Paz'
        ];
        return centers[faker.random.number({ min: 0, max: 2 })];
    };

    const getBatchNumber = () => {
        const batchnumbers = ['A1235742', 'B1235742', 'C1235742', 'D1235742'];
        return batchnumbers[faker.random.number({ min: 0, max: 3 })];
    };

    const getCountryOfVaccination = () => {
        const isocodes = ['it', 'de', 'es'];
        return isocodes[faker.random.number({ min: 0, max: 2 })];
    };

    const getHealthProfessional = () => {
        const healthprofs = ['VRDRCR70H08H703B', 'MSSCZN70H08H704F', 'RCSTGI90B1823661'];
        return healthprofs[faker.random.number({ min: 0, max: 2 })];
    };

    const getVaccineAdminOrder = () => {
        const order = ['1 of 2', '2 of 2', '1 of 1'];
        return order[faker.random.number({ min: 0, max: 2 })];
    };

    const getVaccineCode = () => 'ICD-11#164949870';

    const example = {
        '@context': ['https://w3id.org/pathogen/v1'],
        type: 'DGCVaccinationInformation',
        administeringCentre: getAdministeringCenter(),
        batchNumber: getBatchNumber(),
        countryOfVaccination: getCountryOfVaccination(),
        dateOfVaccination: faker.date.between('2021-05-15', '2021-02-01'),
        healthProfessional: getHealthProfessional(),
        nextVaccinationDate: faker.date.between('2021-05-11', '2021-06-11'),
        order: getVaccineAdminOrder(),
        vaccine: getVaccineCode(),
    };
    return example;
};

module.exports = { getDGCVaccinationInformation };
