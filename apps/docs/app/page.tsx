import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Landing } from "@repo/ui/components/landing";
import { Navbar } from "@repo/ui/components/navbar";

// export const dynamic = "force-dynamic";

export const runtime = "edge";

export default function Page() {
  return (
    <main>
      <SignedOut>
        <Navbar />
        <Landing />
      </SignedOut>
      <SignedIn></SignedIn>
    </main>
  );
}
