import Link from 'next/link'


const Nav = () => {
    return ( 
        <nav>
            <div className="logo">
                <h1>BJF Properties</h1>
            </div>

            <Link href="/gallery"><a>Gallery</a></Link>
            <Link href="/properties"><a>Properties</a></Link>
            <Link href="/about"><a>About Us</a></Link>
            <Link href="/contact" ><a>Contact Us</a></Link>
            

        </nav>
     );
}
 
export default Nav;