/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Old CV filename (with spaces) may already be shared on LinkedIn, emails, etc.
      {
        source: "/Prajeet%20Kumar%20Thakur%20CV.pdf",
        destination: "/prajeet-thakur-cv.pdf",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
