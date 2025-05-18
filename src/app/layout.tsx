import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Raffy Uanan | Full Stack Developer",
  description: "Portfolio website of Raffy Uanan, a full stack developer specializing in modern web technologies.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {
                  console.error('Error applying theme:', e);
                }
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900 dark:bg-black dark:text-white">{children}</body>
    </html>
  )
}
