import { SignIn } from "@clerk/nextjs";

export const runtime = "edge";

export default function Page() {
  return (
    <main className="flex flex-col justify-center items-center bg-gradient-to-r from-slate-500 via-slate-200 to-slate-100 space-y-8 w-full h-screen">
      <SignIn />
    </main>
  );
}
