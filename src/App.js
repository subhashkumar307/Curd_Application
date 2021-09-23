
import './App.css';
import Navbar from './Components/Navbar';
import Codefor from './Components/Codefor';
import Alluser from './Components/Alluser';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Adduser from './Components/Adduser';
import NotFound from './Components/NotFound';
import EditUser from './Components/EditUser';

function App() {
  return (
   <>
   <BrowserRouter>
  
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Codefor}/>
    <Route exact path="/all" component={Alluser}/>
    <Route exact path="/add" component={Adduser}/>
    <Route exact path="/edit/:id" component={EditUser}/>
    <Route exact  component={NotFound}/>
   

    </Switch>
    </BrowserRouter>
    

   </>
  );
}

export default App;
