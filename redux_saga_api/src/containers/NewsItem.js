import React from "react";
import { connect } from 'react-redux';

let NewsItem = ({article}) => (
    article ? (
        <div className="panel panel-default">
            {article.error && (<div className="panel-heading">
                <h4 className="title">{article.error}</h4>
            </div>)}
            {article.map((item, index) => {return(
(<div key={index}><div className="panel-heading">
<h4 className="panel-title">{item.title}</h4>
</div>
<div className="panel-body">
<img src={item.urlToImage} style={{width: '190px', height: '110px', float: 'left'}} className="img_thumbnail" alt="" title="" />
<p>{item.description}</p>
<p>{item.content}</p>
</div>
<div className="panel-footer">
<a href={item.url} target="_blank">read more</a>
</div></div>)
            )})}
        </div>
    ) : null
);

const mapStateToProps = (state) => ({
    article: state.news
});

NewsItem = connect(
    mapStateToProps, 
    null
)(NewsItem);

export default NewsItem;