// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  expect: {
    timeout: 5000
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html'],
    ['line']
  ],
  use: {
    headless: !!process.env.CI,
    viewport: { width: 1280, height: 720 },
    video: 'on-first-retry',
    trace: 'on-first-retry',
    
    // MCP Configuration
    mcp: {
      host: process.env.MCP_HOST || 'localhost',
      port: process.env.MCP_PORT || 8080,
      // Có thể cấu hình thêm các options khác
      // token: process.env.GITHUB_TOKEN,
      // repository: process.env.GITHUB_REPOSITORY,
    }
  },
});
