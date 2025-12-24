import { Outfit } from "next/font/google";
import "@/app/_styles/globals.scss";
import Attribution from "@/app/_components/attribution/Attribution";

const outfit = Outfit({
  weight: ["300", "400", "600"]
});

export const metadata = {
  title: "Frontend Mentor | NFT preview card component",
  description: "A frontendmentor.io challenge"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>₿</text></svg>"
        />
      </head>
      <body className={`${outfit.variable}`}>
        <main>{children}</main>
        <footer>
          <Attribution />
        </footer>
      </body>
    </html>
  );
}
