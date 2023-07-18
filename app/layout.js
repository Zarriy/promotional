import './globals.css'
import { Work_Sans } from 'next/font/google'
import Layout from "@/components/layout";
import StyledComponentsRegistry from '@/lib/registry';

const fontFamily = Work_Sans({ subsets: ['latin'] })

export const metadata = {
  title: "Zawar's Web Development Showcase",
  description: 'Empowering Web Experiences | Explore captivating web development projects crafted with expertise and creativity.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-lighter ${fontFamily.className}`}>
        <StyledComponentsRegistry>
        <Layout>
           {children}
        </Layout>
        </StyledComponentsRegistry>
        </body>
    </html>
  )
}
