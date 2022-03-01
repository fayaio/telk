import {NavBar, Welcome, Features, Team, Footer,   TeamMembers} from './components'

const App = () => {
   return (
     <div className ="min-h-screen">
       <NavBar/>
       <Welcome />
       <Features />
      
       <div>
       <Team/>
       <TeamMembers/>
       <Footer/>
       </div>
      
      
      
    
     </div>
     
   )
}

export default App
