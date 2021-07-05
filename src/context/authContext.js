import { createContext } from "react";

const initiaState = {
    authenticated:false,
    userDate: null
};

function authReducer(state = initiaState, action){
    switch(action.type){
        case "logo":{
            return{
                authenticated:true,
            userData:action.payload            
        }
    }
    case "logout":{
        return{
            authenticated:false,
            userData:null
        }
    }
    default:
        return state;
}
}

const AuthContext =createContext();
export{
    initiaState,
    authReducer,
    AuthContext
}



