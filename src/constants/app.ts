export const OPTIONS: Option[] = [
	{ value: 'about', label: 'About' },
	{ value: 'skills', label: 'Skills' },
	{ value: 'projects', label: 'Projects' },
	{ value: 'contact', label: 'Contact' },
	{ value: 'exit', label: 'Exit' },
];

export type Option = {
	value: string;
	label: string;
};

export const ABOUT: string = 'This is about';
