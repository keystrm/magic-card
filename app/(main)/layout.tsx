import { Metadata } from "next";
import Layout from "../../layout/layout";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Magic Card",
  description:
    "Expelliarmus",
  robots: { index: false, follow: false },
  viewport: { initialScale: 1, width: "device-width" },
  openGraph: {
    type: "website",
    title: "Magic Card",
    url: "https://keystrm.com/",
    description:
      "Expelliarmus",
    ttl: 604800,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function AppLayout({ children }: AppLayoutProps) {
  return <Layout>{children}</Layout>;
}
