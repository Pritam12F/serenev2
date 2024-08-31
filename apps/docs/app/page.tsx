import { Background } from "@repo/ui/components/background-collision";
import WordPullUp from "@repo/ui/components/magicui/word-pullup";
import { Navbar } from "@repo/ui/components/navbar";

export default function Page() {
  return (
    <main>
      <Navbar />
      <div className="h-[91vh] bg-gradient-to-b from-bg-gray1-400 to-white dark:bg-neutral-800 flex justify-center items-center border-none">
        <WordPullUp
          className="text-4xl font-bold tracking-[-0.02em text-black dark:text-white md:text-7xl md:leading-[5rem]"
          words="Serene will change the way you take notes"
        />
      </div>
      <Background />
    </main>
  );
}
