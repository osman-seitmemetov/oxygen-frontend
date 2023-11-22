const path = require('path')

const nextConfig = {
    images: {
        domains: ['localhost']
    },
    reactStrictMode: false,
    swcMinify: true,
    poweredByHeader: false,
    optimizeFonts: false,
    env: {
        APP_URL: process.env.REACT_APP_URL,
        APP_ENV: process.env.REACT_APP_ENV
        // APP_SERVER_URL: process.env.REACT_APP_SERVER_URL
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:5000/api/:path*'
            },
            {
                source: '/static/:path*',
                destination: 'http://localhost:5000/static/:path*'
            }
        ]
    }
}

module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Important: return the modified config
        config.resolve.alias['@'] = path.join(__dirname, 'src')
        return config
    },
}


module.exports = nextConfig
