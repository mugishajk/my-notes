/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI: "mongodb+srv://mugisha:mugisha1234@cluster0.7fhgh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
}
}

module.exports = nextConfig
