import React from "react";
import Button from "../containers/Button";
import Loading from "../containers/Loading";
import NewsItem from "../containers/NewsItem";

let App = () => (
    <div className="container">
        <div className="row">
            <div className="col-sm-12">
                <Button />

                <Loading />

                <NewsItem />
            </div>
        </div>
    </div>
);

export default App;