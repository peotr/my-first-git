import {Switch ,Route} from 'react-router-dom';
import Home from './pages/Home';
import NewsDetailes from './pages/NewsDatelis';
import Header from './components/Header';
import SignIn from './pages/Sigin';
import AuthContext from './context/authContext';
import {useReducer} from 'react';
import { AuthContext, authReducer, initialState} from 'react'


function App(){
     
    const [state, dispatch] = useReducer(authReducer, initialState);
    return(
        <div className="app">
           
           <Header>
               <AuthContext.Provider>
            <Switch>
             <Route exact path="/" component={Home}/>
             <Route exact path="/post/:newsId" component={NewsDetailes}/>
             <Route exact path="/signin" component={}/>
          </Switch>
          </AuthContext.Provider>
          </Header>
        </div>
    )
}
export default App;