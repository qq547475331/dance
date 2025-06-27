This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Wrangler.toml Configuration

The `wrangler.toml` file has been updated to include `pages_build_output_dir = ".next"` under a `[build]` section. This is necessary for Cloudflare Pages to correctly identify the build output directory for Next.js projects.

## TypeScript Configuration

To resolve the `PagesFunction` type error in Cloudflare Pages Functions, the `@cloudflare/workers-types` package has been installed as a development dependency. Additionally, the `tsconfig.json` file has been updated to include these types in the `compilerOptions.types` array, ensuring proper type recognition during compilation.

## API Function Type Definitions

To resolve the `Property 'name' does not exist on type 'unknown'` error in `functions/api/upload.ts`, an `UploadRequestBody` interface has been defined to explicitly type the expected JSON payload from `context.request.json()`. The result is now type-asserted to `UploadRequestBody` to ensure type safety.

## Git Initialization and Push

The project has been successfully initialized as a Git repository and pushed to the remote GitHub repository: `https://github.com/qq547475331/dance.git`.

## Upload Page Enhancements

The `src/app/upload/page.tsx` file has been enhanced to correctly handle video uploads and navigation. The `key` variable, which identifies the uploaded video, has been reintroduced. Upon successful upload, the user is now automatically redirected to the video playback page using `next/navigation`'s `useRouter` hook.

## Latest Commit

**Commit Message:** `feat: Implement video upload and playback navigation`

This commit includes the necessary changes to enable video uploads and automatic redirection to the video playback page after a successful upload.