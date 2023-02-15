/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    experimental: {
        appDir: true,
    },
    images: {
        domains: [
            "lh3.googleusercontent.com",
            "avatars.githubusercontent.com",
            "https://lh3.googleusercontent.com",
        ],
    },
};
