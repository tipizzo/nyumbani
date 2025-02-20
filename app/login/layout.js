export const metadata = {
  title: 'Login | Sign Up',
  description: 'Welcome to Login/Sign Up Page.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
