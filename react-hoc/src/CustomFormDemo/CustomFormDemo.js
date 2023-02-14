import React from 'react';
import CustomFormHOC from './CustomFormHOC';

const Form = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit();
    };

    const handleChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;

        props.onChange(inputName, inputValue);
    };

    return(
        <div className='row'>
            <div className='col-12'>
                <form onSubmit = {handleSubmit} onChange = {handleChange}>
                    <input type="text" name='name' className='form-control mb-3' placeholder='enter any name' /> 
                    <input type="text" name='email' className='form-control mb-3' placeholder='enter any email' />

                    <button type='submit' className='btn btn-primary'>submit</button>
                </form>
            </div>
        </div>
    );
};

const CustomFormDemo = (props) => {
    const FormWithCustom = CustomFormHOC({
        contact: {
            name: "", 
            email: ""
        }
    })({
        propName: "contact", 
        propListName: "contactList"
    })(Form);

    return(
        <div>
            <FormWithCustom {...props} />
        </div>
    )
}

export default CustomFormDemo;