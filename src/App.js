import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header'
import Form from './components/Form'
import NewsList from './components/NewsList'


function App() {

  //definir la categoría y noticia
  const [category, setCategory] = useState('')
  const [news, setNews] = useState([])

  useEffect(() => {
    const consultAPI = async() => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`
    
      const answer = await fetch(url)
      const news = await answer.json()

      setNews(news.articles)
    
    }
    consultAPI()
  },[category])

  return (
    <Fragment>
      <Header 
      title= 'Buscador de noticias'/>

      <div className='container white'>
        <Form setCategory = {setCategory}/>
      </div>

      <NewsList allNews={news}/>
    </Fragment>
  );
}

export default App;
