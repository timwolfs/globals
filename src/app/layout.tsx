import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "@/styles/globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
