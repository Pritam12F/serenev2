import { SignUp } from "@clerk/nextjs";

export const runtime = "edge";

export default function Page() {
  return (
    <main className="flex flex-col justify-center items-center space-y-8 bg-gradient-to-r from-slate-500 via-slate-200 to-slate-100 w-full h-screen">
      <SignUp />
    </main>
  );
}
