import React from "react";
import { connect } from 'react-redux';

class Counter extends React.Component {
    increment = () => {
        this.props.dispatch({
            type: 'INCREMENT'
        })
    };

    decrement = () => {
        this.props.dispatch({
            type: 'DECREMENT'
        })
    };

    render() {
        return(
        <div>
            <h4>Redux with Counter</h4>

            <hr />

            <div className='row'>
                <div className='col-sm-12'>
                    <button type='button' className='btn btn-primary me-3' onClick={this.decrement}> - </button>

                    <span className='text-info lead me-3'>{this.props.count}</span>

                    <button type='button' className='btn btn-primary' onClick={this.increment}> + </button>
                </div>
            </div>
            
        </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(Counter);