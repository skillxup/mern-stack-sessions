
import axios from 'axios';

export const tabClicked = (activeTab) => ({
  type: 'tabClicked',
  activeTab: activeTab
});

export const getMovieList = () => async (dispatch) => {
    try {
        const { data } = await axios.get('https://api.themoviedb.org/3/list/1?api_key=5d56dde8626ffbd38860a04fd1351669&language=en-US');
        dispatch(setMovieList(data));
    } catch (err) {
        console.log('error', err);
    }
};


export const setMovieList = (movie_lists) => {
    return {
        type: 'SET_MOVIE_LIST',
        payload: movie_lists
    };
};

export const getMovieDetail = (param_movie_id) => async (dispatch) => {
    try {

        let data = null;
        let localMovieRecoreds = JSON.parse(window.localStorage.getItem("localMovieDetail"));

        if (window.localStorage.getItem("localMovieDetail")) {
            localMovieRecoreds.filter((item) => {
                if (item.id === param_movie_id) {
                    data = item;
                }
                return 0;
            });
        }

        if (data === null) {

            data = await axios.get('https://api.themoviedb.org/3/movie/' + param_movie_id + '?api_key=5d56dde8626ffbd38860a04fd1351669&language=en-US');

            localMovieRecoreds= (localMovieRecoreds === null) ? [] : localMovieRecoreds;
            localMovieRecoreds.push(data.data);
            data = data.data;

            window.localStorage.setItem('localMovieDetail', JSON.stringify(localMovieRecoreds));
        }

        dispatch(setMovieDetail(data));

    } catch (err) {
        console.log('error', err);
    }
};


export const setMovieDetail = (movie_detail) => {
    return {
        type: 'SET_MOVIE_DETAIL',
        payload: movie_detail
    };
};

