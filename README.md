# AI Twitter Feed Tracker

An AI-powered news digest tool, pre-configured with top AI leaders.

## Features

- ✅ **AI Leaders Source Pack** — Pre-configured with Elon Musk, Sam Altman, Demis Hassabis, and many more!
- ✅ **Multiple Sources** — Twitter/X, RSS, HackerNews, Reddit, GitHub Trending
- ✅ **AI Summaries** — Auto-generate 4-hour, daily, weekly, and monthly digests
- ✅ **Bookmark/Mark** — Save interesting content
- ✅ **Source Packs** — Share your custom source bundles
- ✅ **Multi-language** — English and Chinese support
- ✅ **Dark/Light Themes**

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy .env.example to .env and configure:
   ```bash
   cp .env.example .env
   # Edit .env with your Twitter API keys
   ```

3. **Initialize AI Leaders Pack (Recommended!)**:
   ```bash
   npm run init-ai-pack
   ```

4. Start the server:
   ```bash
   npm start
   # Or dev mode: npm run dev
   ```

5. Open http://localhost:3000

## AI Leaders Pack

This pack includes:
- @elonmusk (Elon Musk)
- @sama (Sam Altman)
- @demishassabis (Demis Hassabis)
- @karpathy (Andrej Karpathy)
- @ylecun (Yann LeCun)
- @darioamodei (Dario Amodei)
- @gdb (Greg Brockman)
- @miramurati (Mira Murati)
- @GaryMarcus (Gary Marcus)
- @danielaamodei (Daniela Amodei)
- @andrewyng (Andrew Ng)
- @ilyasutskever (Ilya Sutskever)

## Configuration

Required for Twitter:
- `TWITTER_BEARER_TOKEN`

Optional AI summary features:
- `OPENAI_API_KEY`

## Original Project

This project is based on ClawFeed, with pre-configured AI leaders.

For more details: [clawfeed on GitHub](https://github.com/kevinho/clawfeed)

## License

MIT
