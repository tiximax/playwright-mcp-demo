const { test, expect } = require('@playwright/test');

test('MCP example test', async ({ page, mcp }) => {
  // Start recording with MCP
  await mcp.startRecording();

  // Navigate to a website
  await page.goto('https://github.com');

  // Perform some actions
  await page.getByRole('textbox', { name: 'Search or jump to...' }).click();
  await page.getByRole('textbox', { name: 'Search or jump to...' }).fill('playwright');
  await page.keyboard.press('Enter');

  // Stop recording
  await mcp.stopRecording();

  // Get test artifacts
  const recordingUrl = await mcp.getRecordingUrl();
  console.log('Recording URL:', recordingUrl);
});
