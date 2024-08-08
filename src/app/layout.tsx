import "../styles/globals.css";
import { StoreProvider } from "../store/StoreProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StoreProvider>
        <body>{children}</body>
      </StoreProvider>
    </html>
  );
}
