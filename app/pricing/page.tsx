import { PricingTable } from "@clerk/nextjs";

export default function PricingPage() {
  return (
    <div>
          <PricingTable newSubscriptionRedirectUrl="/dashboard" />
    </div>
  );
}
