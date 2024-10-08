import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Landing } from "~/components/landing";
import { Navbar } from "~/components/navbar";

// export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <main>
      <SignedOut>
        <Navbar />
        <Landing />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </main>
  );
}
