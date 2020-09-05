import * as core from '@actions/core';
import {execSync} from 'child_process';
import {GithubActionInputType} from './action.interface';

// inputs defined in action metadata file
const inputs = {
	pathToDistFolder: () => getInput('directory'),
	ecmaVersion: () => getInput('ecmaVersion'),
	filesGlob: () => getInput('files')
};

export function executeGitHubAction() {
	try {
		console.info(`Checking files in: ${inputs.pathToDistFolder()}!`);
		execSync(`npx es-check ${inputs.ecmaVersion()} ./${inputs.pathToDistFolder()}/${inputs.filesGlob()} --verbose`);
	} catch (error) {
		console.error(error.message);
		core.setFailed(error.message);
	}
}

function getInput(inputId: GithubActionInputType) {
	return core.getInput(inputId);
}
