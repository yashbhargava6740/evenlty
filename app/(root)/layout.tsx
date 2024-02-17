import Footer from "@/components/shared/Footer"
import Header from "@/components/shared/Header"
import NextTopLoader from 'nextjs-toploader';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1"><NextTopLoader />{children}</main>
      <Footer />
    </div>
  )
}
