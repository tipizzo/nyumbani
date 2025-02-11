import '@/styles/globals.css'
import Navbar from "@/components/Navbar";


export const metadata = {
    title: "Nyumbani",
    description: "Nyumbani is a modern real estate platform where users can buy, sell, or rent properties with ease."
}

const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <main>
                    <Navbar />
                    {children}
                </main>
            </body>
        </html>
    )
}

export default RootLayout;