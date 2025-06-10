import "./globals.css";

export const metadata = {
  title: "Imposter",
  description: "A fun party game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
