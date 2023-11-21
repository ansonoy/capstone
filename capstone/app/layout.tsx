import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "./components/header"
import Footer from "./components/footer"
import Providers from "./components/providers"
import ProductIdContextProvider from "@/context/product-id-context"

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
        <ProductIdContextProvider>
        <Providers>
          <Header />
          {children}
          <Footer />
          </Providers>
        </ProductIdContextProvider>
      </body>
    </html>
  )
}
