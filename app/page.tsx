import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-7xl flex-col items-center justify-between py-32 px-8 md:px-16 bg-white dark:bg-black sm:items-start">
        
        {/* Logo: left on mobile, centered on desktop */}
        <div className="w-full flex justify-start sm:justify-center">
          <Image
            className="dark:invert"
            src="/avokado.svg"
            alt="avokado logo"
            width={100}
            height={20}
            priority
          />
        </div>

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left w-full max-w-xl">
          <h1 className="w-full text-4xl sm:text-5xl font-semibold leading-tight sm:leading-12 tracking-tight text-black dark:text-zinc-50">
            Your Creative Partner for Digital Growth
          </h1>

          <p className="w-full text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Avokado is a creative digital agency built for brands that want more
            than just content — they want connection. We believe creativity
            should feel{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              effortless, intuitive, and alive.
            </a>
          </p>
        </div>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row w-full max-w-md">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-auto md:min-w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>

          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-auto md:min-w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
