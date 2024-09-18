import { Landing } from "~/components/landing";
import { Navbar } from "~/components/navbar";

// export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Landing />
    </main>
  );
}
