import React, { Component } from 'react';
import EmpleadosList from './EmpleadosList';


class Home extends Component {
    render() {
        console.log()
        return(
            <div>
                <h1>Menu Principal</h1>
                <EmpleadosList/>
            </div>
        );
    }
}
export default Home;