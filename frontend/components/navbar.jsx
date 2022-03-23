import Link from 'next/link'
import Image from 'next/image'


const Nav = () => {
    return ( 
        <nav>
            <div className="logo">
               <Image src="/bjflogo.svg" width={128} height={77}/>
            </div>

            <Link href="/gallery"><a>Gallery</a></Link>
            <Link href="/properties"><a>Properties</a></Link>
            
            <Link href="/about"><a>About Us</a></Link>
            <Link href="/contact" ><a>Contact Us</a></Link>
            

        </nav>
     );
}
 
export default Nav;