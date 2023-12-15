/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.google.com',
                port: '',
                pathname: '/s2/favicons',
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                port: '',
                pathname: '/a/ACg8ocId-jFb6npklo8GToo6QrVRxhWME_RiyTAjwpjxPFj7mpw=s96-c',
            }
        ],
    }
}

module.exports = nextConfig
