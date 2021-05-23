const faker = require('faker');

const getDGCVaccine = () => {
    const getCode = () => 'SCT#1119349007';

    const getTargetDisease = () => 'ICD-10#J12.82';

    const getMarketingAuthHolder = () => {
        const authholders = [
                'AstraZeneca AB',
                'Biontech Manufacturing GmbH',
                'Moderna Biotech Spain S.L.',
                'Novavax CZ AS'
            ];

        return authholders[faker.random.number({ min: 0, max: 3 })];
    };

    const getMedicinalProductName = () => 'COVID-19 Vaccine';

    const example = {
        '@context': ['https://w3id.org/pathogen/v1'],
        type: 'DGCVaccine',
        code: getCode(),
        targetDisease: getTargetDisease(),
        marketingAuthHolder: getMarketingAuthHolder(),
        medicinalProductName: getMedicinalProductName(),
        };
    return example;
};

module.exports = { getDGCVaccine };
