# Hank — SHULL Chemistry Agent

Hank is a SHULL-specific Chemistry curriculum and production assistant built with Next.js and the Vercel AI SDK.

## Modes

BUILD · IMPROVE · LAB · PPT · NOTES · PRACTICE · ASSESS · AUDIT · MAP · PACE · PRODUCTION

## Local setup

1. Install Node.js 20+.
2. Run `npm install`.
3. Set `OPENAI_API_KEY` in your environment.
4. Run `npm run dev`.
5. Open the local URL shown by Next.js.

## Knowledge

Put the SHULL Chemistry source Markdown files into `knowledge/`. Hank loads every `.md` file there into its system context. Keep curriculum sources current and clearly labeled as confirmed or provisional.

## Deploy

This repository is designed for Vercel. Add `OPENAI_API_KEY` as a Vercel environment variable, then deploy the `main` branch.

## Important

Hank should not invent missing curriculum information. Direct current instructions from Mr. Shull take priority over older source material. Student-facing and teacher-facing deliverables should remain clearly separated.
