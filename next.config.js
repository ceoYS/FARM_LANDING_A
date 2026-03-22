/** @type {import('next').NextConfig} */
const nextConfig = {
  // CSS 관련 설정
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
  
  // 개발 모드 설정
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // CSS 최적화
  swcMinify: true,
  
  // 실험적 기능 비활성화 (안정성을 위해)
  // experimental: {
  //   optimizeCss: true,
  //   cssChunking: 'strict',
  // },
}

module.exports = nextConfig