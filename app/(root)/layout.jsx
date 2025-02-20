import '@/styles/globals.css'
import Navbar from "@/components/Navbar";
import Provider from '@/components/Provider';
import Footer from '@/components/Footer';

const Layout = ({ children }) => {
    return (
        <Provider>
            <main>
                <Navbar />
                {children}
                <Footer />
            </main>
        </Provider>
    )
}

export default Layout;