import "../styles/globals.css";
import { StoreProvider } from "../store/StoreProvider";
import React, { ReactNode, Suspense } from "react";
import Loading from "./loading";
import HomePage from "./home-page";

type Props = {
  children: ReactNode
}

export default function RootLayout({children}: Props) {
  return (
    <html lang="en">
      <StoreProvider>
        <body>
          <Suspense fallback={<Loading />}>
          <HomePage>
             {children}
          </HomePage>
          </Suspense>
        </body>
      </StoreProvider>
    </html>
  );
}
