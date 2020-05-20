import React from 'react'
import News from './News'
import PropTypes from 'prop-types'

const NewsList = ({allNews}) => {
    return ( 
        <div className='row'>
            {allNews.map(news => (
                <News key={news.url} news={news} />
            ))}
        </div>
     );
}

NewsList.propTypes = {
    allNews: PropTypes.array.isRequired
}
 
export default NewsList;