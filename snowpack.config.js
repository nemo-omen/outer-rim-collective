// Consult https://www.snowpack.dev to learn about these options
module.exports = {
	extends: '@sveltejs/snowpack-config',
	mount: {
		'src/components': '/_components',
		'src/styles': '/_styles',
	},
	alias: {
		$components: './src/components',
		$helpers: './helpers',
		$styles: './src/styles'
	}
};
