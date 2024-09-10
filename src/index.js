const core = require('@actions/core');
const crypto = require('crypto');

async function run() {
    try{
        const secrets = core.getInput('secrets');
        const token = core.getInput('github-token');
        const initializationVector = core.getInput('initialization-vector');

        const key = Buffer.from(token.slice(0, 32), 'utf8');
        const iv = Buffer.from(initializationVector.slice(0, 16), 'utf8');
        const decipher = crypto.createDecipheriv('aes256', key, iv);

        const decryptedSecrets = decipher.update(secrets, 'utf8', 'hex');
        core.setOutput('decrypted-secret', decryptedSecrets);
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
