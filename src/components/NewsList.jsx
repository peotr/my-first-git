import NewsCard from "../components/NewsCard.jsx";

function NewsList({ data = [] }) {
    const partOfdata = data.slice(0, 19);
    return (
        <div className="newsList" >
            {partOfdata.map((news, indx) => (
                <NewsCard
                    data={news}
                    key={`new-${indx}`}
                />
            ))}
        </div>
    )
}

export default NewsList;