import {NavBar, Welcome, Features, Team, Footer,TeamMembers, Testimonial} from './components'

const App = () => {
   return (
     <div class ="min-h-screen">
       <NavBar/>
       <Welcome />
       <Features />
       <Testimonial/>
      <div>
      <Team/>
      </div>
       <div>
      
       <TeamMembers/>
       <Footer/>
       </div>
      
      
      
    
     </div>
     
   )
}

export default App
