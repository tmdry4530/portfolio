import Link from "next/link";
import Icons from "../components/Icons";
import Image from "next/image";

export default function Main() {
  return (
    <div className="flex flex-col h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-gray-500 bg-opacity-80 fixed w-full z-10">
        <Link className="flex items-center justify-center" href="#">
          <Icons.HeaderIcon className="h-6 w-6" />
          <span className="sr-only">My Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Project
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1 overflow-auto no-scrollbar">
        <section className="w-full h-full py-12 sm:py-12 md:py-24 lg:py-32 xl:py-48 flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <Image
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-full object-cover sm:w-full lg:order-last lg:aspect-square"
                height={400}
                src="/cat.jpg"
                width={400}
                layout="responsive"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Welcome to My Portfolio
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    {/* Discover my latest projects and get in touch for
                    collaborations. */}
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="/project"
                  >
                    Introduce
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full h-full py-12 md:py-12 lg:py-24 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                    Skills
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    My Technical Stack
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    {/* I specialize in frontend development with a focus on
                    creating responsive and interactive user interfaces. */}
                    참돔 참돔 아기참돔. 내 기술 스택임 보고 연락해라 ㅋㅋ
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Icons.HTMLIcon className="w-6 h-6" />
                    <span>HTML5</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icons.CssIcon className="w-6 h-6" />
                    <span>Css3</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icons.JavascriptIcon className="w-6 h-6" />
                    <span>Javascript</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Icons.NodejsIcon className="w-6 h-6" />
                    <span>Node.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icons.ReactIcon className="w-6 h-6" />
                    <span>React.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icons.TypescriptIcon className="w-6 h-6" />
                    <span>Typescript</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icons.NextjsIcon className="w-6 h-6" />
                    <span>Next.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icons.SolidityIcon className="w-6 h-6" />
                    <span>Solidity</span>
                  </div>
                </div>
              </div>
              <Image
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                src="/placeholder.svg"
                width={550}
                height={310}
                layout="responsive"
              />
            </div>
          </div>
        </section>
        <section className="w-full h-full py-12 md:py-12 lg:py-24 "></section>
      </main>
    </div>
  );
}
