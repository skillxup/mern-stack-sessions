import React, { Component } from 'react';
import LoadIndicatorHOC from './LoadIndicatorHOC';

class LoaderDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: "", 
            searchResults: [], 
            contactList: []
        }
        this.handleUserInput = this.handleUserInput.bind(this);
    };

    handleUserInput(inputText) {
        this.setState({
            searchText: inputText, 
        }, () => console.log(this.state))
    };

    componentWillMount() {
        let init = {
            method: "GET", 
            headers: new Headers(), 
            mode: "cors", 
            cache: "default"
        };

        fetch("http://demo5424178.mockable.io/contacts/", init)
            .then(response => (response.json()))
            .then(
                (data) => {console.log(data); this.setState(
                    prevState => ({
                        contactList: [...data.contacts]
                    })
                )}
            )
    }

    render() {
        const ContactListWithLoadIndicator = LoadIndicatorHOC("contacts")(ContactList);
        return(
            <div className=''>
                <h1>Loader Demo</h1>

                <ContactListWithLoadIndicator 
                    contacts = {this.state.contactList} 
                />
                
            </div>
        );
    }
}

const ContactList = ({contacts}) => {
    return(
        <div>
            <ul>
                {contacts.map(
                    (contact) => <li key={contact.email}>
                        <div>
                            <h4>{contact.name}</h4>
                            <small>{contact.email}</small>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default LoaderDemo;