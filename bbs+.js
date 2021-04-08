const { Bls12381G2KeyPair } = require("@transmute/did-key-bls12381");
const { BbsBlsSignature2020 } = require("@mattrglobal/jsonld-signatures-bbs");

const ISSUER_KEY_PAIR_SEED_BASE64 = "2owx9/ylDJazW2oubRDPZSZGKzhSRPud1dbJGkufavk=";

async function main () {

    const keypair = await Bls12381G2KeyPair.generate({
        secureRandom: () => {
            return Buffer.from(ISSUER_KEY_PAIR_SEED_BASE64,'base64');
        },
    });
    keypair.id = keypair.controller + keypair.id;
    const suite = new BbsBlsSignature2020({
        key: keypair,
    });

    console.log (keypair);
    console.log (suite);
}

main();