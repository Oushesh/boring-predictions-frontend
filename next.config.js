/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['tsx'],
  //need to add a permanent redirect here:
  redirects: async () => {
    return [
      {
        source: '/Read',
        destination: 'https://midjourney.com/showcase/top/',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
