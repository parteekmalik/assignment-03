// next.config.js
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            // Optional: Add custom SVGR options here
          },
        },
      ],
    });
    return config;
  },
};

export default config;
