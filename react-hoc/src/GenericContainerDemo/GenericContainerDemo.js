import React, { Component } from 'react';
import GenericContainerHOC from './GenericContainerHOC';

class GenericContainerDemo extends Component {
    render() {
        const ContactListGenericContainer = GenericContainerHOC({reqUrl: 'http://demo5424178.mockable.io/contacts', reqMethod: 'GET', resName: 'contacts'})(ContactList);

        return(
            <div className=''>
                <h1>Generic Container</h1>

                <hr />

                <div>
                    <ContactListGenericContainer />
                </div>

            </div>
        );
    }
}

const ContactList = ({contacts}) => {
    return(
        <div>
            <ul>
                {contacts.map(
                    (contact) => 
                        <li key={contact.email}>
                            <div className='contactData'>
                                <h4>{contact.name}</h4>
                                <small>{contact.email}</small>
                            </div>
                        </li>
                        )}
            </ul>
        </div>
    );
}

export default GenericContainerDemo;