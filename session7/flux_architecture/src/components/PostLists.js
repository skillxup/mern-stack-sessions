import React from "react";

function PostLists(props) {
    return(
        <div style={{margin: 20}}>
            {props.posts.map((post) => (
                <div className="card mt-4" key={post.id}>
                    <h2 className="card-header">{post.title}</h2>
                    <div className="card-body">
                        <h4 className="card-subtitle mb-2 text-muted">@{post.author}</h4>
                        <blockquote className="blockquote mb-2">
                            <p>{post.body}</p>
                        </blockquote>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PostLists;