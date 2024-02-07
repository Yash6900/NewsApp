import React, {useEffect,useState}from 'react'
import NewsItem from './NewsItem'
import Spinner  from './Spinner';
import Carousel from './Carousel';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';



const News=(props)=> {
 
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  

 const capitalizeFirstLetter = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  const updateNews= async()=>{
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=92193d42fc8648a19092fb5dc8dd9217&page=${page}&PageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let passedData = await data.json();
    props.setProgress(70);
    console.log (passedData);
    setArticles(passedData.articles);
    setTotalResults(passedData.totalResults);
    setLoading(false);
    props.setProgress(100);
    document.title = `Daily News-${capitalizeFirstLetter(props.category)}`;

  }

  useEffect(() => {
    document.body.style.backgroundColor = "#FFF5EE";
    updateNews();
    console.log(page);
  }, [])
  
  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=92193d42fc8648a19092fb5dc8dd9217&page=${page+1}&PageSize=${props.pageSize}`;
    let data = await fetch(url);
    let passedData = await data.json();
    console.log (passedData);
    console.log(page);
    setArticles(articles.concat(passedData.articles));
    setTotalResults(passedData.totalResults);
    document.title = `Daily News-${capitalizeFirstLetter(props.category)}`;
    
   
  }
  
 
      
    return (


      <div className='container mt-3'id="carousel">
        <h1 className='text-center mb-2' style={{marginTop:'100px'}}>Top {capitalizeFirstLetter(props.category)} News</h1>
        <Carousel slides={articles.slice(0, 3).map((article) => ({ title: article.title, image: article.urlToImage, description: article.description,Url : article.url}))} />
        {loading&&<Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={page*props.pageSize<totalResults}
          loader={<Spinner/>}
        >
          
         <div className="container"> 
        <div className='row'>
        {articles.map((element)=>{
          return <div className="col-md-4" key={element.url}> 
        <NewsItem title={element.title?element.title.slice(0,40):""} description ={element.description?element.description.slice(0, 80):""} imageUrl={element.urlToImage} newsUrl={element.url} publishedAt={element.publishedAt} author={element.author} Key={element.url} />
        </div> 
         
        })}
        </div>
        </div>
        </InfiniteScroll>
      </div>
    
      
    )
  }


News.defaultProps = {
  country : 'in',
  pageSize : 9,
  category : "genral", 
}

News.propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string,
}



export default News
