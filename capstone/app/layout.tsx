import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "./components/header"
import Footer from "./components/footer"
import Providers from "./components/providers"
import { Toaster } from "react-hot-toast"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Whispering Dutchman Distillery",
  description: "Whispering Dutchman Distillery"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-b from-stone-700 to-black text-gray-50 text-opacity-90`}
      >
        <Providers>
          <Header />
          <Toaster
            toastOptions={{
              className: "",
              style: {
                border: "2px solid #F97316",
                padding: "12px",
                color: "white",
                background: "#1C1917"
              }
            }}
          />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
