const nextConfig = async () => {
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    webpack: function (config) {
      return config
    },
  }

  return nextConfig
}

module.exports = nextConfig
