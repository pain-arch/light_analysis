import { AuthConfig } from "convex/server";

const clerkDomain = process.env.CLERK_JWT_ISSUER_DOMAIN;

if (!clerkDomain) {
  throw new Error("Missing CLERK_JWT_ISSUER_DOMAIN environment variable");
}

export default {
  providers: [
    // Uncomment this once you have set up a Clerk app
    {
      domain: clerkDomain,
      applicationID: "convex",
    },
  ],
} satisfies AuthConfig;
