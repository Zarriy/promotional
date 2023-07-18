import Image from "next/image";
import Link from "next/link";


 
export default function Footer(){
    
    return (
        <footer className="flex justify-between items-center px-6 border-t py-8 ">
            <div className="flex gap-4">
                <Link href="/">
                <Image src="/logo.png" width={120} height={80} alt="Logo of zawar portfolio website" />
                </Link>
                <h3 className="font-medium leading-normal">Zawar Mian
                    <br/>
                    Senior Web Developer
                </h3>
            </div>
            <div>
                <p>&copy; {new Date().getFullYear()} Labs</p>
            </div>
        </footer>
    )

}