import Navbar from  "./Components/NavBar/Navbar.jsx"


import "./globals.css";
import { Fraunces, Inter, Roboto } from 'next/font/google'


const fraunces = Fraunces({
  weight: ['100','300','400', '500', '700', '900'],
  subsets: ['latin'],
})

const inter = Inter({
  weight: ['100','300','400', '500', '700', '900'],
  subsets: ['latin'],
})

const roboto = Roboto({
  weight: ['100','300','400', '500', '700', '900'],
  subsets: ['latin'],
})



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fraunces.className} antialiased`}    >
       <Navbar />
       
        {children}


      </body>
    </html>
  );
}
