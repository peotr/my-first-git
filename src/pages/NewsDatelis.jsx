import{useParams, Link} from 'react-router-dom';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Louder from '../components/Louder';


const API_URI = id => "https://jsonplaceholder.typicode.com/posts/"+id;

function NewsDetailes(){

    const [data,setData] = useState(null);
    const [loading, setLoading] = useState(true)

    const {newsId} = useParams();
    const fetchData = async()=>{
        const response= await axios.get(API_URI(newsId));
        setData(response.data);
        setLoading(false);
    }

    useEffect(() => {
        console.log(data);
    }, [data])

useEffect(fetchData, [])
if(loading) return <Louder/>

     return(
         <div className="newsDetails">
             <div className="containers">
                 <Link to="/">home</Link>
                 <img src={`https://picsum.photos/id/${data.id+20}/1400/350`} alt={data.title} />
                 <div className="newDetailes-body">
                     <h1> {data.title}</h1>
                     <p>
                         {data.body}
                     </p>
                 </div>
             </div>
         </div>
     )
 }




 export default NewsDetailes;