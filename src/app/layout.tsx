import { inter, ptSerif } from "@/styling/fonts";
import "../styling/globals.css";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={`${inter.className} ${ptSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
