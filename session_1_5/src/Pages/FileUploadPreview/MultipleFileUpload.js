import React, { Component } from 'react';

export default class MultipleFileUpload extends Component {
    fileObj = [];
    fileArray = [];

    constructor(props) {
        super(props);
        this.state = {
            file: [null]
        }
        this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this);
    };

    uploadMultipleFiles(event) {
        this.fileObj.push(event.target.files);
        for(let i = 0; i < this.fileObj[0].length; i++) {
            this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
        }
        this.setState({
            file: this.fileArray
        })
    };

    render() {
        return(
            <div className='row mb-3'>
                <div className='col-sm-6 offset-sm-3'>
                    <h4> Multiple File Upload </h4>

                    <hr />

                    <div className='card'>
                        <div className='card-body'>
                            <form>
                                <input type='file' className='form-control' onChange={this.uploadMultipleFiles} multiple />
                            </form>
                        </div>
                    </div>

                    <hr />

                    <div className='row'>
                        {(this.fileArray || []).map((url, index) => (
                            <div className='col-sm-3'>
                                <img src={url} alt='' title='' style={{width: '190px'}} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}