"use client";
import { ChakraProvider } from "@chakra-ui/react";
import NavTitle from "./navTitle";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />

      <body>
        <ChakraProvider>
          <NavTitle />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
