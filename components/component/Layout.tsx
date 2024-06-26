/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/fUCyrErdmmH
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Judson } from 'next/font/google'
import { Libre_Franklin } from 'next/font/google'

judson({
  subsets: ['latin'],
  display: 'swap',
})

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { NavigationMenuLink, NavigationMenuItem, NavigationMenuList, NavigationMenu } from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Layout() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm dark:bg-gray-950/90">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link className="flex items-center gap-2" href="#">
            <MountainIcon className="h-6 w-6" />
            <span className="font-bold">Jane Doe</span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink className="group" href="#about">
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="group" href="#work">
                  Work
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="group" href="#contact">
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>
      <main className="flex flex-col">
        <section className="w-full bg-gray-100 py-20 dark:bg-gray-800" id="hero">
          <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Jane Doe</h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              Passionate designer and creative problem-solver
            </p>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              I create beautiful and functional digital experiences that delight users.
            </p>
          </div>
        </section>
        <section className="w-full py-20 dark:bg-gray-800" id="about">
          <div className="container grid gap-8 px-4 md:grid-cols-2 md:gap-12 md:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="text-gray-500 dark:text-gray-400">
                I&apos;m a passionate designer with over 5 years of experience in the industry. I specialize in creating
                beautiful and functional digital experiences that delight users. My design process is centered around
                user-centric design, with a strong focus on research, prototyping, and iterative testing.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                In addition to my design work, I&apos;m also an avid learner and enjoy staying up-to-date with the latest
                design trends and technologies. I&apos;m constantly exploring new tools and techniques to enhance my skills
                and deliver even better results for my clients.
              </p>
              <Button href="/resume.pdf" variant="link">
                View Resume
              </Button>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-md border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
                  <h3 className="text-lg font-semibold">User Interface Design</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Crafting intuitive and visually appealing user interfaces.
                  </p>
                </div>
                <div className="rounded-md border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
                  <h3 className="text-lg font-semibold">User Experience Design</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Designing seamless and delightful user experiences.
                  </p>
                </div>
                <div className="rounded-md border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
                  <h3 className="text-lg font-semibold">Branding</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Crafting memorable brand identities and visual systems.
                  </p>
                </div>
                <div className="rounded-md border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
                  <h3 className="text-lg font-semibold">Prototyping</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Bringing designs to life through interactive prototypes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-gray-100 py-20 dark:bg-gray-800" id="work">
          <div className="container space-y-8 px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Work</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Check out some of my latest design projects.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <img
                  alt="Project Thumbnail"
                  className="aspect-[3/2] rounded-t-md object-cover"
                  height="200"
                  src="/placeholder.svg"
                  width="300"
                />
                <CardContent className="space-y-2 p-4">
                  <h3 className="text-lg font-semibold">Project 1</h3>
                  <p className="text-gray-500 dark:text-gray-400">A sleek and modern e-commerce website design.</p>
                </CardContent>
              </Card>
              <Card>
                <img
                  alt="Project Thumbnail"
                  className="aspect-[3/2] rounded-t-md object-cover"
                  height="200"
                  src="/placeholder.svg"
                  width="300"
                />
                <CardContent className="space-y-2 p-4">
                  <h3 className="text-lg font-semibold">Project 2</h3>
                  <p className="text-gray-500 dark:text-gray-400">A responsive and user-friendly mobile app design.</p>
                </CardContent>
              </Card>
              <Card>
                <img
                  alt="Project Thumbnail"
                  className="aspect-[3/2] rounded-t-md object-cover"
                  height="200"
                  src="/placeholder.svg"
                  width="300"
                />
                <CardContent className="space-y-2 p-4">
                  <h3 className="text-lg font-semibold">Project 3</h3>
                  <p className="text-gray-500 dark:text-gray-400">A clean and modern branding design for a startup.</p>
                </CardContent>
              </Card>
              <Card>
                <img
                  alt="Project Thumbnail"
                  className="aspect-[3/2] rounded-t-md object-cover"
                  height="200"
                  src="/placeholder.svg"
                  width="300"
                />
                <CardContent className="space-y-2 p-4">
                  <h3 className="text-lg font-semibold">Project 4</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    A visually striking and interactive website design.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <img
                  alt="Project Thumbnail"
                  className="aspect-[3/2] rounded-t-md object-cover"
                  height="200"
                  src="/placeholder.svg"
                  width="300"
                />
                <CardContent className="space-y-2 p-4">
                  <h3 className="text-lg font-semibold">Project 5</h3>
                  <p className="text-gray-500 dark:text-gray-400">A user-friendly and intuitive mobile app design.</p>
                </CardContent>
              </Card>
              <Card>
                <img
                  alt="Project Thumbnail"
                  className="aspect-[3/2] rounded-t-md object-cover"
                  height="200"
                  src="/placeholder.svg"
                  width="300"
                />
                <CardContent className="space-y-2 p-4">
                  <h3 className="text-lg font-semibold">Project 6</h3>
                  <p className="text-gray-500 dark:text-gray-400">A modern and visually striking branding design.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-20 dark:bg-gray-800" id="contact">
          <div className="container grid gap-8 px-4 md:grid-cols-2 md:gap-12 md:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
              <p className="text-gray-500 dark:text-gray-400">
                I&apos;m always excited to discuss new projects and collaborate with talented individuals. Feel free to reach
                out using the form below, and I&apos;ll get back to you as soon as possible.
              </p>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" required type="text" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" required type="email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" required rows={5} />
                </div>
                <Button className="w-full" type="submit">
                  Send Message
                </Button>
              </form>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Let&apos;s Connect</h2>
              <p className="text-gray-500 dark:text-gray-400">You can also find me on the following platforms:</p>
              <div className="grid gap-4">
                <a
                  className="flex items-center gap-2 rounded-md bg-gray-100 px-4 py-2 transition-colors hover:bg-gray-200 dark:bg-gray-950 dark:hover:bg-gray-800"
                  href="#"
                >
                  <LinkedinIcon className="h-6 w-6" />
                  <span>LinkedIn</span>
                </a>
                <a
                  className="flex items-center gap-2 rounded-md bg-gray-100 px-4 py-2 transition-colors hover:bg-gray-200 dark:bg-gray-950 dark:hover:bg-gray-800"
                  href="#"
                >
                  <TwitterIcon className="h-6 w-6" />
                  <span>Twitter</span>
                </a>
                <a
                  className="flex items-center gap-2 rounded-md bg-gray-100 px-4 py-2 transition-colors hover:bg-gray-200 dark:bg-gray-950 dark:hover:bg-gray-800"
                  href="#"
                >
                  <InstagramIcon className="h-6 w-6" />
                  <span>Instagram</span>
                </a>
                <a
                  className="flex items-center gap-2 rounded-md bg-gray-100 px-4 py-2 transition-colors hover:bg-gray-200 dark:bg-gray-950 dark:hover:bg-gray-800"
                  href="#"
                >
                  <DribbbleIcon className="h-6 w-6" />
                  <span>Dribbble</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full bg-gray-100 py-8 dark:bg-gray-800">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 Jane Doe. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link className="text-sm hover:underline" href="#">
              Privacy Policy
            </Link>
            <Link className="text-sm hover:underline" href="#">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}

function DribbbleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
      <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
