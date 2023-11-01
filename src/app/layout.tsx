import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "@/styles/globals.css";
import { Lato } from "next/font/google";

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lato.className}>
      <head>
        <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=globals"></script>
      </head>
      <body>
        <main>
          {children}
        </main>
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
