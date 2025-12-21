# Scry Sample Storybook App

This is a simple React app that demonstrates how to use Scry with Storybook.

## Features

- React components
- Storybook integration
- Scry deployment configuration
- GitHub Actions workflows
- Environment variables setup

## Getting Started

### Prerequisites

- Node.js (v20 or later)
- pnpm (v10 or later)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```

### Running Storybook

To start Storybook locally:
```bash
pnpm run storybook
```

### Deployment to Scry

This app is configured to deploy to Scry using the `@jules/storybook-deployer`.

#### Local Deployment

1. Build Storybook:
   ```bash
   pnpm run build-storybook
   ```
2. Deploy using the CLI:
   ```bash
   pnpm dlx @jules/storybook-deployer deploy --api-key YOUR_SCRY_API_KEY
   ```

#### CI/CD Deployment

The app includes a GitHub Actions workflow in [`.github/workflows/scry-deploy.yml`](.github/workflows/scry-deploy.yml) that automatically deploys to Scry on every push to the `main` branch.

To enable this:
1. Go to your GitHub repository settings.
2. Add a secret named `SCRY_API_KEY` with your Scry API key.

## Configuration

The Scry deployment is configured in [`.storybook-deployer.json`](.storybook-deployer.json).

| Field | Description |
|-------|-------------|
| `apiUrl` | The URL of the Scry deployment service |
| `project` | Your Scry project ID |
| `dir` | The directory containing the built Storybook static files |
| `version` | The version of the deployment |
