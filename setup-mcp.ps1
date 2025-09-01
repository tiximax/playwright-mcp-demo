# Setup script for Playwright MCP
param(
    [string]$ProjectPath = "."
)

# Create necessary directories
New-Item -ItemType Directory -Force -Path "$ProjectPath\.github\workflows" | Out-Null
New-Item -ItemType Directory -Force -Path "$ProjectPath\tests" | Out-Null

# Copy workflow files
Copy-Item ".github\workflows\reusable-playwright-mcp.yml" -Destination "$ProjectPath\.github\workflows\" -Force

# Copy and rename config
Copy-Item "playwright.config.template.js" -Destination "$ProjectPath\playwright.config.js" -Force

# Install necessary packages
Set-Location $ProjectPath
npm install --save-dev @playwright/test
npx playwright install

# Create example test file if it doesn't exist
$exampleTest = @"
const { test, expect } = require('@playwright/test');

test('basic test', async ({ page, mcp }) => {
  // Start recording
  await mcp.startRecording();

  // Your test code here
  await page.goto('https://github.com');
  await expect(page).toHaveTitle(/GitHub/);

  // Stop recording
  await mcp.stopRecording();
});
"@

New-Item -ItemType File -Force -Path "$ProjectPath\tests\example.spec.js" -Value $exampleTest | Out-Null

Write-Host "MCP setup completed! Your project is ready for Playwright testing with MCP."
Write-Host "To run tests:"
Write-Host "1. Start MCP Server: github-mcp-server"
Write-Host "2. Run tests: npx playwright test"
