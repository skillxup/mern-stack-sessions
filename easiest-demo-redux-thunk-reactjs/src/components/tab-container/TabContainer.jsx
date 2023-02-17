import React, { Component } from 'react';

import TabComponent from '../tabs/TabComponent';
import DuplicateTabComponent from '../duplicate-tabs/DuplicateTabComponent';

class TabContainer extends Component {

    render() {
        return (
            <div className="content">
                <div className="row">
                    <div className="col-md-12">
                        <TabComponent />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h2>Duplicating state in child component</h2>
                        <div className="row">
                            <div className="col-md-12">
                                <DuplicateTabComponent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TabContainer;