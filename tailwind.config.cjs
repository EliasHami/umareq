/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      backgroundImage: theme => ({
        'hero-banner': "url('header_banner.jpg')",
      })
    },
	},
	plugins: [],
}
