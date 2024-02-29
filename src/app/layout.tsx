import { inter, ptSerif } from "@/styling/fonts";
import "../styling/globals.css";
import StyledComponentsRegistry from "../styling/registry";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={`${inter.className} ${ptSerif.variable}`}>
      <body>
        <StyledComponentsRegistry> {children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
