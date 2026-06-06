import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  sassOptions: {
    silenceDeprecations: ['legacy-js-api', 'import'],
  },
};

export default nextConfig;
