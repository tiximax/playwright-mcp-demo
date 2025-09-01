// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './',
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    video: 'on-first-retry',
    trace: 'on-first-retry',
    // Cấu hình MCP Server
    mcp: {
      host: 'localhost',
      port: 8080,
      // Thêm các tùy chọn khác nếu cần
      // token: 'your-github-token',  // Nếu cần xác thực
      // repository: 'owner/repo'     // Nếu làm việc với specific repository
    }
  },
});
