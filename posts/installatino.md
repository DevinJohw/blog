---
title: Installation
description: Create a new Next.js application with `create-next-app`. Set up TypeScript, styles, and configure your `next.config.js` file.
date: '2024-04-23'
---

System Requirements:

- [Node.js 18.18](https://nodejs.org/) or later.
- macOS, Windows (including WSL), and Linux are supported.

## Automatic Installation

We recommend starting a new Next.js app using [`create-next-app`](/docs/app/api-reference/create-next-app), which sets up everything automatically for you. To create a project, run:

```bash filename="Terminal"
npx create-next-app@latest
```

On installation, you'll see the following prompts:

```txt filename="Terminal"
What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like your code inside a `src/` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to use Turbopack for `next dev`?  No / Yes
Would you like to customize the import alias (`@/*` by default)? No / Yes
What import alias would you like configured? @/*
```

After the prompts, [`create-next-app`](/docs/app/api-reference/create-next-app) will create a folder with your project name and install the required dependencies.

If you're new to Next.js, see the [project structure](/docs/getting-started/project-structure) docs for an overview of all the possible files and folders in your application.

> **Good to know**:
>
> - Next.js now ships with [TypeScript](/docs/app/building-your-application/configuring/typescript), [ESLint](/docs/app/building-your-application/configuring/eslint), and [Tailwind CSS](/docs/app/building-your-application/styling/tailwind-css) configuration by default.
> - You can optionally use a [`src` directory](/docs/app/building-your-application/configuring/src-directory) in the root of your project to separate your application's code from configuration files.