import {
  CheckCircledIcon,
  CrossCircledIcon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Measurement",
  description: "Typescript measurement library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Theme>
          {children}

          <Toaster
            icons={{
              success: <CheckCircledIcon color="green" />,
              info: <InfoCircledIcon color="blue" />,
              warning: <ExclamationTriangleIcon color="orange" />,
              error: <CrossCircledIcon color="red" />,
            }}
            toastOptions={{
              style: {
                background: "var(--color-background)",
                color: "var(--gray-12)",
                borderColor: "var(--gray-6)",
              },
            }}
          />
        </Theme>
      </body>
    </html>
  );
}
