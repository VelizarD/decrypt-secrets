const core = require('@actions/core');
const exec = require('@actions/exec');

async function run() {
    try{
        const secrets = core.getInput('secrets');
        const token = core.getInput('github-token');

        await exec.exec(`${__dirname}/decrypt.sh ${secrets} ${token}`);
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
