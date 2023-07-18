import Header from "./header"
import Footer from "./footer"

export default function IndexLayout({children}){
    return(
        <>
        <Header />
         {children}
        <Footer />
        </>
    )
}