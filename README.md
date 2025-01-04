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


<div className="bg-gradient-to-l from-[#fff] py-24">
      <div className="bg-white/50 rounded-lg relative container border-neutral-900" >
        <h1 className="text-3xl mb-6 section-title">About Us</h1>
        <div className="md:flex block">
          {/* Text Section */}
          <div className="md:w-1/2 w-full flex justify-center items-center">
            <p className="text-gray-700 section-description leading-tight px-6">
              We are a forward-thinking company, dedicated to creating
              innovative solutions that impact the world. Our mission is to
              deliver exceptional products and services that provide value to
              our customers and contribute to the betterment of society. Our team
              is made up of talented and passionate individuals, each bringing
              unique perspectives and expertise to the table. We believe in
              collaboration and continuously seek to push the boundaries of
              what's possible. Whether you're a customer, partner, or team
              member, we value your input and are excited to work with you to
              create meaningful impact.
            </p>
          </div>
          
          {/* Image Section */}
          <div className="md:w-1/2 w-full flex justify-center items-center mt-6 md:mt-0">
            <ManageIcon
              alt="Manage Search Icon"
              width={400}
              height={400}
              className="max-w-full h-auto"
            />
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link href="/" className="text-blue-500 hover:underline">
            Go Back to Home
          </Link>
        </div>
      </div>
    </div>
