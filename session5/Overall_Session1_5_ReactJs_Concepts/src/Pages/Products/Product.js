import React from 'react';


let Product = (props) => {
    return(
        <div className='col-sm-4'>
          <div className='card'>
            <div className='card-body'>
              <h4>{props.productName}</h4>
              <p>Rating: {props.productRating}</p>
              
              <hr />
              
              <p onClick={props.updateRecords} className='btn btn-info'>Update Records</p>

              <p onClick={props.updateRecordsPassParameters} className='btn btn-info'>Update Records with passing parameters</p>

            <hr />

                <input type='text' name='productName' className='form-control' onChange={props.updateProductName} />
            </div>
          </div>
        </div>
    );
}

export default Product;