import{ useContext, useEffect ,useState} from"react";
import axiso from "axios";
import Louder from "../components/Louder";
import NewsList from "../components/NewsList";
import { AuthContext } from "../context/authContext";
 
 const API_URI ="https://jsonplaceholder.typicode.com/posts"
 function Home(){

    const[data, setData] = useState(null);
    const[loading, setLoading]= useState(true);

    const {state ,dispatch} = useContext(AuthContext);
    

    const fetchData = async () => {
        const response = await axiso.get(API_URI);
        setData(response.data);
        setLoading(false);
    };

    useEffect(fetchData, [fetchData]);
    if(loading) return<Louder/>


     return(
         <div className="home">
             <div className="container">
                 <NewsList data={data}/>
             </div>
         </div>
     );
 }
export default Home;