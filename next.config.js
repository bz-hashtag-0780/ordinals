/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	async redirects() {
		return [
			{
				source: '/brc20',
				destination: 'https://forms.gle/SNZbE5fzPd2mskkU7', // Replace with your actual Google Form URL
				permanent: false, // Set to true if this redirect will be permanent
			},
		];
	},
};

module.exports = nextConfig;
