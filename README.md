# Playwright MCP Demo Template

This is a template repository for setting up Playwright with GitHub's MCP (Media Control Protocol) server integration. Use this template to quickly set up automated testing in your projects.

## Features

- Automated browser testing with Playwright
- MCP Server integration for enhanced test recording and reporting
- Reusable GitHub Actions workflows
- Test artifacts management
- Easy setup script for new projects

## Quick Start for New Projects

1. Clone this template:
```powershell
git clone https://github.com/tiximax/playwright-mcp-demo.git
```

2. Run the setup script in your project directory:
```powershell
.\setup-mcp.ps1 -ProjectPath "path\to\your\project"
```

3. The script will:
   - Copy necessary configuration files
   - Set up GitHub Actions workflows
   - Install required dependencies
   - Create example test files

## Manual Setup

1. Copy the following files to your project:
   - `.github/workflows/reusable-playwright-mcp.yml`
   - `playwright.config.template.js` (rename to `playwright.config.js`)

2. Install dependencies:
```bash
npm install --save-dev @playwright/test
npx playwright install
```

3. Run MCP Server:
```bash
github-mcp-server
```

4. Run tests:
```bash
npx playwright test
```

## Configuration

### GitHub Actions
The workflow file `.github/workflows/reusable-playwright-mcp.yml` provides a reusable workflow that you can reference in your projects:

```yaml
name: Tests
on: [push, pull_request]

jobs:
  test:
    uses: tiximax/playwright-mcp-demo/.github/workflows/reusable-playwright-mcp.yml@main
    with:
      playwright-version: '1.55.0'  # optional
      node-version: '18'            # optional
      test-directory: 'tests'       # optional
```

### MCP Configuration
See `playwright.config.js` for MCP configuration options. You can customize:
- MCP Server host and port
- GitHub token and repository settings
- Test recording options

## Test Examples

- Basic example: `tests/example.spec.js`
- Full examples in the `tests` directory

## Support

For issues and questions, please create an issue in this repository.
