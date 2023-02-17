import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/';

class MovieDetail extends Component {

    componentDidMount() {
        this.props.getMovieDetail(this.props.sharedMovieId);
    }

    render() {
        return (

            <div className="container">

                <div className="row">
                    <button
                        className="btn btn-info"
                        onClick={this.props.onHideMovieDetail}>Goto Movie list</button><br /><br />
                </div>

                <h1 className="my-4">{this.props.MovieDetail.title}</h1>

                <div className="row">
                    <div className="col-md-4">
                        <img
                            className="img-fluid"
                            src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2" + this.props.MovieDetail.poster_path}
                            alt="" />
                    </div>

                    <div className="col-md-8">
                        <h3 className="my-3">Overview</h3>
                        <p>{this.props.MovieDetail.overview}</p>
                    </div>
                </div>

            </div>

        );
    }
}

function mapStateToProps(state) {
    return { MovieDetail: state.actionReducer.movieDetailList }
}

const mapDispatchToProps = { getMovieDetail };

const movieDetail = connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieDetail);

export default movieDetail;