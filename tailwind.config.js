module.exports = {
  mode: 'jit',
	darkMode: 'class',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: { 
      display: ['dark'],
      textColors: ['dark'],
      backgroundColor: ['dark'],
      opacity: ['hover']
    },
	},
	plugins: [
  ],
};
