import "../../globals.css";

export const metadata = {
  title: "Vadavision",
  description: "Vadavision",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        {children}
      </body>
    </html>
  );
}
