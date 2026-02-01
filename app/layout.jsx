import './globals.css';

export const metadata = {
  title: 'InboxPilot - Student Command',
  description: 'Agentic AI dashboard for student inbox and calendar automation.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
