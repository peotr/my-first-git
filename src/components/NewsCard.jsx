import { Link}  from 'react-router-dom';


function NewsCard({data}){
    return(
        <div className="newsCard">
            <img src={`https://picsum.photos/id/${data.id+20}/250/400`}
             alt={data.title} 
            />

            <div className="newsCard-body">
                 <h3>{data.title}</h3>
                  <p>{data.body}</p>
                <Link to={`/${data.id}`}> Read more -&gt</Link>
             </div>
       </div>
    );
}

export default NewsCard;