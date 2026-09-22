/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  //https://cdn.pixabay.com/photo/2015/06/19/20/13/sunset-815270_640.jpg
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
