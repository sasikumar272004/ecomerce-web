/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(mp4|webm|ogg|swf|ogv)$/,  // Test for video file extensions
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/videos',
            outputPath: 'static/videos',
            name: '[name].[hash].[ext]',
          },
        },
      });
  
      return config;
    },
  
    reactStrictMode: true,
    swcMinify: true,
  
    env: {
      MUX_TOKEN_ID: process.env.MUX_TOKEN_ID,
      MUX_TOKEN_SECRET: process.env.MUX_TOKEN_SECRET,
    },
  };
  
  export default nextConfig;
  