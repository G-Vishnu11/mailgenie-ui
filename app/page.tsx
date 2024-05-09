import Link from "next/link"
import Image from "next/image"
import mailBox from "../static/images/mailbox.png"
import placeHolder from "../static/images/placeholder.svg"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src={mailBox}
            alt="Picture of the mailbox"
            width={40}
            height={40}
            className="pl-2"
          />
          <span className="sr-only">mailGENie</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-blue-500"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-blue-500"
            href="#"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-blue-500"
            href="#"
          >
            Register
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Unlock the Power of AI-Driven Email with mailGENie
                </h1>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Revolutionize your email experience with mailGENie&apos;s
                  cutting-edge AI technology. Personalized content, smart
                  summaries, and integrated data visualizations - all in one
                  seamless platform.
                </p>
                <div className="space-x-4">
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:bg-blue-500 dark:text-gray-900 dark:hover:bg-blue-500/90 dark:focus-visible:ring-blue-300"
                    href="#"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
            <Image
              src={placeHolder}
              alt="Place Holder for image or video"
              height="100"
              width="600"
              className="mx-auto"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  AI-Powered Email
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Elevate Your Email Experience
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  mailGENie&apos;s cutting-edge AI technology transforms your email
                  workflow, delivering personalized content, smart summaries,
                  and integrated data visualizations to boost productivity and
                  engagement.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Smart Email Summaries</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Quickly grasp the key points of any email with our
                  AI-generated summaries, saving you time and boosting
                  productivity.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Personalized Content</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Receive tailored content and recommendations based on your
                  preferences and behavior, ensuring you stay engaged and
                  informed.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">
                  Integrated Data Visualizations
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Visualize key email metrics and insights directly within the
                  platform, empowering you to make data-driven decisions.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Seamless Collaboration</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Streamline teamwork with shared inboxes, real-time updates,
                  and integrated communication tools.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Intelligent Scheduling</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Let mailGENie&apos;s AI assistant handle scheduling and calendar
                  management, ensuring you never miss an important meeting or
                  deadline.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Automated Workflows</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Streamline your email processes with customizable workflows
                  and automation, freeing up your time for more strategic tasks.
                </p>
              </div>
            </div>
            {/* <div className="flex justify-center flex-col sm:flex-row items-start gap-4">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-blue-500 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:bg-blue-500 dark:text-gray-900 dark:hover:bg-blue-500/90 dark:focus-visible:ring-blue-300"
                href="#"
              >
                Get Started
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-blue-500 border-blue-500 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:border-blue-800 dark:border-blue-800 dark:bg-gray-950 dark:hover:bg-blue-800 dark:hover:text-gray-50 dark:focus-visible:ring-blue-300"
                href="#"
              >
                Learn More
              </Link>
            </div> */}
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Streamline Your Email Workflow with mailGENie
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Boost productivity, save time, and stay on top of your email
                with mailGENie&apos;s AI-powered features.
              </p>
            </div>
            {/* <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Button
                  className="bg-blue-500 hover:bg-blue-600 text-gray-50 dark:bg-blue-500 dark:text-gray-900 dark:hover:bg-blue-500/90"
                  type="submit"
                >
                  Get Started
                </Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Sign up to experience the future of email.
                <Link className="underline underline-offset-2 text-blue-500" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div> */}
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container flex flex-col items-center justify-center space-y-4 text-center px-4 md:px-6">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Trusted by Leading Brands
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Powering Email for the Best Teams
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                mailGENie is trusted by companies of all sizes, helping them
                streamline their email workflows and boost productivity.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src={placeHolder}
                alt="Place Holder for image or video"
                height="310"
                width="550"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Increased Productivity
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        mailGENie&apos;s smart summaries and automated workflows help
                        you save time and focus on what matters most.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Personalized Experience
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Receive tailored content and recommendations based on
                        your preferences, ensuring you stay engaged and
                        informed.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Seamless Collaboration
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Streamline teamwork with shared inboxes, real-time
                        updates, and integrated communication tools.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Experience the Future of Email with mailGENie
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Boost your productivity, stay organized, and deliver
                personalized content to your customers with mailGENie&apos;s
                cutting-edge AI technology.
              </p>
            </div>
            <div className="flex flex-col space-y-4 lg:justify-end">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-blue-500 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:bg-blue-500 dark:text-gray-900 dark:hover:bg-blue-500/90 dark:focus-visible:ring-blue-300"
                href="#"
              >
                Register & Get Started
              </Link>
              <div className="mx-auto">
                We use your lima to directly register you into our product.
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}