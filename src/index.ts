import 'module-alias/register';

import * as p from '@clack/prompts';
import { cancel, intro, isCancel, select } from '@clack/prompts';
import boxen from 'boxen';
import color from 'picocolors';
import { ABOUT, OPTIONS, type Option } from './constants/app';

const SELECTED_OPTIONS: string[] = []; // used to store the selected values of OPTIONS
const s = p.spinner();

async function portfolio() {
	intro(color.bgCyan(color.black(' rahul-portfolio-cli ')));

	// name
	const name = await p.text({
		message: 'What is your name?',
		placeholder: 'Your cool name',
		validate(value) {
			if (value.length === 0) return 'Name is required!';
		},
	});
	if (isCancel(name)) {
		cancel('Thanks for visiting my portfolio-cli');
		return process.exit(0);
	}

	// Option-1
	const option1 = await select<Option[], string>({
		message: 'What would you like to know about myself?',
		options: OPTIONS,
	});
	if (isCancel(option1)) {
		cancel(`Thanks ${name} for visiting my portfolio-cli`);
		return process.exit(0);
	}

	// Option-2
	SELECTED_OPTIONS.push(option1);
	const option2 = await select<Option[], string>({
		message: 'What would you like to know more about myself?',
		options: OPTIONS.filter((option) => !SELECTED_OPTIONS.includes(option.value)),
	});
	if (isCancel(option2)) {
		cancel(`Thanks ${name} for visiting my portfolio-cli`);
		return process.exit(0);
	}

	console.log(
		boxen('foo bar', {
			title: ABOUT,
			borderStyle: { topLeft: '+', topRight: '+', bottomLeft: '+', bottomRight: '+', top: '-', bottom: '-', left: '|', right: '|' },
		}),
	);

	// Option-3
	SELECTED_OPTIONS.push(option2);
	const option3 = await select<Option[], string>({
		message: 'What would you like to know more about myself?',
		options: OPTIONS.filter((option) => !SELECTED_OPTIONS.includes(option.value)),
	});
	if (isCancel(option3)) {
		cancel(`Thanks ${name} for visiting my portfolio-cli`);
		return process.exit(0);
	}

	// Option-4
	SELECTED_OPTIONS.push(option3);
	const option4 = await select<Option[], string>({
		message: 'What would you like to know more about myself?',
		options: OPTIONS.filter((option) => !SELECTED_OPTIONS.includes(option.value)),
	});
	if (isCancel(option4)) {
		cancel(`Thanks ${name} for visiting my portfolio-cli`);
		return process.exit(0);
	}

	// Option-5
	SELECTED_OPTIONS.push(option4);
	const option5 = await select<Option[], string>({
		message: 'What would you like to know more about myself?',
		options: OPTIONS.filter((option) => !SELECTED_OPTIONS.includes(option.value)),
	});
	if (isCancel(option5)) {
		cancel(`Thanks ${name} for visiting my portfolio-cli`);
		return process.exit(0);
	}

	p.outro(color.bgCyan(color.black(` stop digging ${name}, You have reached the end `)));

	console.log('Name: ', name);
	console.log('Option - 1', option1);
	console.log('Option - 2', option2);
	console.log('Option - 3', option3);
	console.log('Option - 4', option4);
	console.log('Option - 5', option5);

	process.exit(0);
}

portfolio().catch(console.error);
