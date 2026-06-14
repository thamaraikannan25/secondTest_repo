# secondTest_repo

A monorepo containing a React login application and an automated Claude-powered PR review tool.

## Project Structure

```
secondTest_repo/
├── login-app/          # React login application
│   ├── src/
│   │   ├── App.jsx
│   │   └── components/
│   │       └── Login.jsx
│   └── package.json
├── review.js           # Claude PR review automation script
├── package.json        # Root package (review.js dependencies)
└── public/             # Static assets
```

## Login App

A simple React application with a login form that validates credentials against demo values.

### Features

- Username and password form with validation
- Error messaging for empty or invalid credentials
- Welcome screen after successful login with logout option

### Setup

```bash
cd login-app
npm install
npm start
```

The app runs at `http://localhost:3000` by default.

**Demo credentials:** `admin` / `password123`

### Run Tests

```bash
cd login-app
npm test
```

## PR Review Script (`review.js`)

An automated code review tool that uses the [Anthropic Claude API](https://docs.anthropic.com/en/api/overview) to review pull requests.

### Setup

```bash
npm install
```

Set your Anthropic API key:

```bash
export ANTHROPIC_API_KEY=your_api_key_here
```

### Usage

```bash
node review.js
```

If `ANTHROPIC_API_KEY` is not set, the script exits in dry-run mode without making API calls.

You can override the default model with the `CLAUDE_MODEL` environment variable:

```bash
CLAUDE_MODEL=claude-opus-4-8 node review.js
```

## Requirements

- Node.js 16+
- npm 7+
