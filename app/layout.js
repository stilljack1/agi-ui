import './globals.css';
export const metadata = { title: 'AGI-1 GENESIS', description: 'System Online' };
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
