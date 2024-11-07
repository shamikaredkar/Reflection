import {Lora} from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Lora({
  subsets: ['latin'], // You can specify other subsets if needed
  weight: ['400'], // Specify the weights you want to use
  // style: ['normal', 'italic'], // Specify the styles you want to use
})

export const metadata = {
  title: "Reflective",
  description: "Track your emotions",
};

export default function RootLayout({ children }) {
  const header = (<header className="p-4 sm:p-8 flex items-center justify-between gap-4">
    <Link href={'/'}><h1 className={'text-base sm:text-lg textGradient ' + inter.className}>reflection</h1></Link>
    <div className="flex items-center justify-between">
      PLACEHOLDER
    </div>
  </header>)

  const footer = (<footer className="p-4 sm:p-8">
        <a href="https://storyset.com/people">Illustrations by Storyset</a>

  </footer>)
  return (
    <html lang="en">
      <body
        className={'w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col'}
      >
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
