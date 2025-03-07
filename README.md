# This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)

## Getting Started
Certificate of conformity
First, run the development <i>server:

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

Tasks:

Parsing error : Cannot find module 'next/babel'
In your NextJS Project you have this file , named .eslintrc.json, In this file.

Solution:

You have following code

{
  "extends": "next/core-web-vitals"
}
Replace it with.

{
  "extends": ["next/babel","next/core-web-vitals"]
}

Tasks:
Next.js Error: Hooks are not Allowed in Server Components

Solution: If you want to use hooks in your Next.js application, you need to use client components, which are components that run on the browser and have access to state and lifecycle methods. Client components can use hooks such as useState, useEffect, useRef, useContext, useRouter, and any custom hooks that use them.

To use client components in Next.js, you need to add the use client directive as the first line of your file (before any imports).

When adding a point with coordinates on the map, the request is transmitted to the server, an old Soviet map with minerals is viewed on the server and information is transmitted to the front about what minerals this water is rich in or is it groundwater.


If you want Next.js it is dangerous to create working code, even if there are errors in your application, you can disable the built-in type checking stage.

If disabled, make sure you run type checking as part of the build or deployment process, otherwise it can be very dangerous.

Open next.config.js and enable ignoreBuildErrors option in typescript configuration:

next.config.js

module.exports = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
