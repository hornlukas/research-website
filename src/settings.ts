interface Profile {
	fullName: string
	title: string
	institute: string
	author_name: string
	research_areas: { title: string; description: string; field: string }[]
}

export const profile: Profile = {
	fullName: 'Lukas Horn',
	title: 'Doctoral Researcher',
	institute: 'University of Würzburg',
	author_name: 'Lukas Horn', // Author name to be highlighted in the papers section
	research_areas: [
  {
    title: 'Privacy-Preserving Machine Learning',
    description: 'Enabling privacy-preserving machine learning and artificial intelligence models through the application of homomorphic encryption, functional encryption, and secure multiparty computation.',
    field: 'computer-science',
  },
  {
    title: 'Performance Benchmarking',
    description: 'Conducting performance evaluation and computational profiling of cryptographic schemes and privacy-preserving applications.',
    field: 'computer-science',
  },
],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'lukas.horn@uni-wuerzburg.de',
	linkedin: 'https://www.linkedin.com/in/horn-lukas/',
	x: '',
	bluesky: '',
	github: 'https://github.com/hornlukas',
	gitlab: '',
	scholar: 'https://scholar.google.de/citations?user=BsDYCYsAAAAJ&hl',
	inspire: '',
	arxiv: '',
	orcid: 'https://orcid.org/0009-0004-4959-1371',
}

export const template = {
	website_url: 'https://research.lukas-horn.de', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Lukas Horn',
	default_description: 'Academic website of Lukas Horn.',
	default_image: '/src/assets/profile_pictures.jpg',
}
