const path = require('path');
const fs = require('fs-extra');
const { Ed25519KeyPair } = require('@transmute/did-key-ed25519');
const { Ed25519Signature2018 } = require('@transmute/ed25519-signature-2018');
const { Bls12381G2KeyPair } = require('@transmute/did-key-bls12381');
const { BbsBlsSignature2020 } = require('@mattrglobal/jsonld-signatures-bbs');
const vcjs = require('@transmute/vc.js');
const { documentLoader } = require('../src/data/vc/documentLoader');

console.log('🧪 Initializing credential builder');
const schemas = require('../index.js');

const saveDir = __dirname.split('packages')[0];

const issueCredsedd = async (credTemplate, schemaName) => {
    try {
        const key = Ed25519KeyPair.from(require('../src/data/vc/keypair.json'));
// Issue Credential with Ed25519 sig
        let verifiableCredential = {};
        verifiableCredential = await vcjs.ld.issue({
            credential: credTemplate,
            suite: new Ed25519Signature2018({
                key,
                date: '2019-12-11T03:50:55Z'
            }),
            documentLoader,
        });
        const result = await vcjs.ld.verifyCredential({
            credential: verifiableCredential,
            suite: new Ed25519Signature2018(),
            documentLoader,
        });
        // console.log(result)
        if (result.verified) {
            const vcFile = path.resolve(__dirname, `../src/__fixtures__/${schemaName}/vc.json`);
            const vcFileDoc = path.resolve(saveDir, `./docs/credentials/${schemaName}.json`);
            if (process.env.VERBOSE_BUILD) {
                console.log('Writing credential example to:', vcFile);
            }
            fs.outputFileSync(
                vcFile,
                JSON.stringify(verifiableCredential, null, 2),
            );
            fs.outputFileSync(
                vcFileDoc,
                JSON.stringify(verifiableCredential, null, 2),
            );
        } else {
            console.log('Error verifying credential for:', schemaName);
        }
    } catch (credentialError) {
        console.warn('Could not issue Credential:', schemaName, '\n', credentialError);
        if (process.env.FULL_ERROR_HANDLING) {
            process.exit(1);
        }
    }
};

const issueCredsbbs = async (credTemplate1, schemaName) => {
    try {
// Issue credential with BBS+ signature
            const keybbs = await Bls12381G2KeyPair.from(require('../src/data/vc/keypairbbs.json'));
            let verifiableCredentialbbs = {};
            verifiableCredentialbbs = await vcjs.ld.issue({
                credential: credTemplate1,
                suite: new BbsBlsSignature2020({
                    key: keybbs,
                    date: '2019-12-11T03:50:55Z'
                }),
                documentLoader,
            });
            const result1 = await vcjs.ld.verifyCredential({
                credential: verifiableCredentialbbs,
                suite: new BbsBlsSignature2020(),
                documentLoader,
            });

            const newname = `${schemaName}-bbs`;
            if (result1.verified) {
                const vcFile1 = path.resolve(__dirname, `../src/__fixtures__/${schemaName}/vcbbs.json`);
                const vcFileDoc1 = path.resolve(saveDir, `./docs/credentials/${newname}.json`);
                if (process.env.VERBOSE_BUILD) {
                    console.log('Writing credential example to:', vcFile1);
                }
                fs.outputFileSync(
                    vcFile1,
                    JSON.stringify(verifiableCredentialbbs, null, 2),
                );
                fs.outputFileSync(
                    vcFileDoc1,
                    JSON.stringify(verifiableCredentialbbs, null, 2),
                );
        } else {
            console.log('Error verifying credential for:', newname);
        }
    } catch (credentialError) {
        console.warn('Could not issue Credential:', schemaName, '\n', credentialError);
        if (process.env.FULL_ERROR_HANDLING) {
            process.exit(1);
        }
    }
};

const credPromises = [];
Object.keys(schemas).forEach((schemaName) => {
    if (process.env.VERBOSE_BUILD) {
        console.log('Generating credentials for:', schemaName);
    }
    const schema = schemas[schemaName];
    const exampleFile = path.resolve(__dirname, `../src/__fixtures__/${schemaName}/credential.json`);
    if (!fs.existsSync(exampleFile)) {
        console.warn(`No good example for ${schemaName} to generate credential from`);
    } else {
        try {
            if (process.env.VERBOSE_BUILD) {
                console.log('Generating credential for:', schemaName);
            }
            const credTemplate = JSON.parse(
                fs.readFileSync(
                    exampleFile,
                ),
            );
            const credTemplate1 = JSON.parse(
                fs.readFileSync(
                    exampleFile,
                ),
            );
            credPromises.push(issueCredsedd(credTemplate, schemaName));
            credPromises.push(issueCredsbbs(credTemplate1, schemaName));
        } catch (fileErr) {
            console.log('Error reading credential template for schema:', schemaName);
        }
    }
});

Promise.allSettled(credPromises).then((results) => results.forEach((result) => {
    // noop
    if (process.env.VERBOSE_BUILD) {
        console.log(result.status);
    }
}));
