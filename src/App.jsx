import {NavBar, Welcome, Features, Team, Footer, Testimonial,  TeamMembers} from './components'

const App = () => {
   return (
     <div className ="min-h-screen">
       <NavBar/>
       <Welcome />
       <Features />
       <Testimonial/>
       <div>
       <Team/>
       <TeamMembers/>
       <Footer/>
       </div>
      
      
      
    
     </div>
     
   )
}

export default App
