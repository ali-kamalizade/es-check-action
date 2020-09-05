import * as core from "@actions/core";
import {executeGitHubAction} from './execute-github-action';
import {GithubActionInputType} from "./action.interface";
import * as github from '@actions/github';

describe('GitHub Action', () => {

	let spyGetInput: jasmine.Spy;
	let spySetFailed: jasmine.Spy;

	beforeEach(() => {
		spyGetInput = spyOn(core, 'getInput');
		spySetFailed = spyOn(core, 'setFailed');
		github.context.payload = null as any;
	});

	describe('Success cases', () => {

		it('should work if directory exists, ES version is valid and specified files work for specified ES version', () => {
			spyAndReturnInputValue('example-dist', 'es5', '**/*es5*.js');
			executeGitHubAction();

			expect(spySetFailed).not.toHaveBeenCalled();
		});

		it('should work if all files work for specified ES version', () => {
			spyAndReturnInputValue('example-dist', 'es2015', '*.js');
			executeGitHubAction();

			expect(spySetFailed).not.toHaveBeenCalled();
		});

	});

	describe('Error cases', () => {

		it('should fail if directory does not exist', () => {
			spyAndReturnInputValue('does-not-exist', 'es5', '**/*es5*.js');
			executeGitHubAction();

			expect(spySetFailed).toHaveBeenCalled();
		});

		it('should fail if ES version is invalid', () => {
			spyAndReturnInputValue('example-dist', 'error', '**/*es5*.js');
			executeGitHubAction();

			expect(spySetFailed).toHaveBeenCalled();
		});

		it('should fail if files do not work for specified ES version', () => {
			spyAndReturnInputValue('example-dist', 'es5', '**/*.js');
			executeGitHubAction();

			expect(spySetFailed).toHaveBeenCalled();
		});

		it('should fail if there is an error after es-check was run successfully', () => {
			spyOn(JSON, 'stringify').and.throwError('Simulating GitHub Action payload fail');
			spyAndReturnInputValue('example-dist', 'es5', '**/*es5*.js');
			executeGitHubAction();

			expect(spySetFailed).toHaveBeenCalled();
		});
	})

	function spyAndReturnInputValue(dist: string = '', ecmaVersion: string = '', filesGlob = '') {
		// input corresponds with GitHub Action input names
		spyGetInput.and.callFake((input: GithubActionInputType) => {
			switch (input) {
				case 'directory':
					return dist;
				case 'ecmaVersion':
					return ecmaVersion;
				case 'files':
					return filesGlob;
			}
		});
	}
});
