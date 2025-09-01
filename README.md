# Playwright MCP Demo

This project demonstrates automated testing using Playwright with GitHub's MCP (Media Control Protocol) server integration.

## Features

- Automated browser testing with Playwright
- MCP Server integration for enhanced test recording and reporting
- GitHub Actions integration for CI/CD
- Test artifacts management

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run MCP Server:
```bash
github-mcp-server
```

3. Run tests:
```bash
npx playwright test
```

## Test Examples

- Basic example: `test-example.js`
- MCP example: `mcp-example.spec.js`

## Configuration

See `playwright.config.js` for Playwright and MCP configuration options.
