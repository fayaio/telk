import Nav from './navbar'
import Footer from  './footer'

const Layout = ({children}) => {
    return ( 
        <div className="content">
            <Nav />
            { children }
            <Footer />

        </div>
     );
}
 
export default Layout;