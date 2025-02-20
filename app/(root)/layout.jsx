import '@/styles/globals.css'
import Navbar from "@/components/Navbar";
import Provider from '@/components/Provider';
import Footer from '@/components/Footer';


export const metadata = {
    title: "Nyumbani",
    description: "Nyumbani is a modern real estate platform where users can buy, sell, or rent properties with ease."
}

const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <Provider>
                    <main>
                        <Navbar />
                        {children}
                        <Footer />
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default RootLayout;