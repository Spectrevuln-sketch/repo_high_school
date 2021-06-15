import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class asal extends Component {
    render() {
        return (
            <div>
                <NavLink className="nav-link active mx-3" to="/homepage">Home</NavLink>
                <NavLink className="nav-link active mx-3" to="/manageuser">Manage User</NavLink>
                <NavLink className="nav-link active mx-3" to="/managemasterdata">Manage Master Data</NavLink>
                <NavLink className="nav-link active mx-3" to="/managescientificpaper">Manage Scienttific Paper</NavLink>
                <NavLink className="nav-link active mx-3" to="/browsecollection">Browse Collection</NavLink>
                <NavLink className="nav-link active mx-3" to="/report">Report</NavLink>
            </div>
        )
    }
}
