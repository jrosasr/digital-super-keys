/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.licencedeals.com',
                port: '',
                pathname: '/**'
            }
        ]
    }
};

export default nextConfig;
