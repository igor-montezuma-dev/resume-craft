import { cn } from "@/lib/utils";
import { setDefaultOptions } from "date-fns";
import { ptBR } from "date-fns/locale";
import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";

import { ClientProviders } from "@/components/shared/client-providers";
import "../styles/globals.css";

const fontSans = Nunito_Sans({ subsets: ["latin"], variable: "--font-sans" });
const fontTitle = Nunito({ subsets: ["latin"], variable: "--font-title" });

export const metadata: Metadata = {
  title: "ResumeCraft",
};

setDefaultOptions({ locale: ptBR });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontTitle.variable,
          fontSans.variable
        )}
      >
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
