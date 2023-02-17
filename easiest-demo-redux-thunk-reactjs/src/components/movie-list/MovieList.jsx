import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovieList } from '../../actions/';
import MovieDetail from '../movie-detail/MovieDetail.jsx'

class MovieList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sawMovieDetail: false,
            selectedMovieId: 0
        }
    }

    componentWillMount() {
        this.props.getMovieList();
    }

    clicked = (param_movie_id) => {
        this.setState({
            selectedMovieId: param_movie_id,
            sawMovieDetail: true
        });
    }

    hideMovieDetail = () => {
        this.setState({ sawMovieDetail: false });
    }

    render() {

        return (
            <div className="container">
                {(this.state.sawMovieDetail) ?

                    <MovieDetail
                        sharedMovieId={this.state.selectedMovieId}
                        onHideMovieDetail={this.hideMovieDetail} /> :

                    <div className="container-fluid">
                        <div className="card-columns">

                            {typeof this.props.movieList.items !== 'undefined' &&
                                this.props.movieList.items.map((option, index) =>

                                    <div className="card" key={index}>
                                          <a onClick={() => this.clicked(option.id)} style={{'cursor': 'pointer'}}>

                                            <img
                                                className="card-img-top"
                                                src={'https://image.tmdb.org/t/p/w185_and_h278_bestv2/' + option.poster_path}
                                                alt="not found" />

                                            <div className="card-body">
                                                <h5 className="card-title">{option.title}</h5>
                                                <p className="card-text">{option.description}</p>
                                            </div>

                                        </a>
                                    </div>

                                )}
                        </div>
                    </div>
                }
            </div>
        )
    }
}



function mapStateToProps(state) {
    return { movieList: state.actionReducer.movieList }
}

const mapDispatchToProps = { getMovieList };

const movieList = connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieList);

export default movieList;