import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Col, ButtonGroup } from 'reactstrap';
import './masterdatacompetition.css'
import axios from 'axios'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import { NavLink } from 'react-router-dom'
import { onLogoutUser } from '../redux/action'


class Masterdatacompetition extends Component {

    state = {
        inputSearch: '',
        competitionData: []
    }

    componentDidMount() {
        this.getDataCompetitions()
    }


    getDataCompetitions = () => {
        axios.get('url')
            .then(res => {
                this.setState({
                    competitionData: res.data.data
                })
            })
    }

    deleteCompetitions = (idCompetition) => {
        axios.delete('url', {
            data: {
                idCompetition: idCompetition
            }
        }).then(res => {
            console.log(res.data.data);

            Swal.fire('User berhasil di hapus !', 'Berhasil', 'success')
            this.getDataUsers()
        })
    }

    searchCompetitions = () => {
        axios.get(`url`, {
            params: {
                competitionName: this.state.inputSearch
            }
        }).then(res => {
            this.setState({
                competitionData: res.data.data
            })
            console.log(this.state.competitionData)
        })
    }

    renderCompetitions = () => {
        var angka = 0
        return this.state.competitionData.map((competition) => {
            return (
                <div className="container mt-5">
                    <table className="table table-success table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Competition ID</th>
                                <th scope="col">Competition Name</th>
                                <th scope="col">Date</th>
                                <th scope="col">Location</th>
                                <th scope="col">Scales</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">{angka++}</th>
                                <td>{competition.competitionId}</td>
                                <td>{competition.competitionName}</td>
                                <td>{competition.date}</td>
                                <td>{competition.location}</td>
                                <td>{competition.scales}</td>
                                <td>
                                    <NavLink to={'/editcompetition' + competition.competitionId}>
                                        <Button className="mx-2 btn btn-dark">Edit</Button>
                                    </NavLink>
                                    <Button onClick={() => { this.deleteCompetitions(competition.competitionId) }} className="mx-2 btn btn-danger">Delete</Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        })
    }

    render() {
        // if (this.props.user_role === "admin") {
        //     return (
        //         <div>
        //             <nav className="navbar navbar-light bg-light" id="nav1">
        //                 <div id="logo">
        //                     <img alt="Logo" className="gambar" />
        //                     <span className="navbar-brand mb-0 h1">Repository Youth Science Club in Senior High School X</span>
        //                 </div>
        //             </nav>
        //             <nav className="navbar navbar-expand-lg navbar-light" id="nav2">
        //                 <div className="container-fluid">
        //                     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        //                         <div className="navbar-nav">
        //                             <a className="nav-link active mx-3" href="/homepage">Home</a>
        //                             <a className="nav-link active mx-3" href="/manageuser">Manage User</a>
        //                             <a className="nav-link active mx-3" href="/managemasterdata">Manage Master Data</a>
        //                             <a className="nav-link active mx-3" href="/managescientificpaper">Manage Scienttific Paper</a>
        //                             <a className="nav-link active mx-3" href="/browsecollection">Browse Collection</a>
        //                             <a className="nav-link active mx-3" href="/report">Report</a>


        //                         </div>
        //                     </div>
        //                 </div>
        //             </nav>

        //             <nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav3">
        //                 <div className="hello">
        //                     <h6>Hello, Admin</h6>
        //                     <button onClick={this.props.onLogoutUser} className="btn btn-dark" id="btn-logout">Log Out</button>
        //                 </div>
        //             </nav>

        //             <div className="mt-5">
        //                 <h4 className="masterdatacompetition">Master Data Competition</h4>
        //             </div>

        //             <div className="mt-5 container">
        //                 <NavLink to="/addnewcompetition">
        //                     <button className="btn btn-outline-dark">Add New Data</button>
        //                 </NavLink>
        //                 <ButtonGroup className="btn-group ml-3">
        //                     <Button onClick={this.searchCompetitions}>
        //                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
        //                             <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        //                         </svg>
        //                     </Button>
        //                     <Input className="round" placeholder="Search here..." />
        //                 </ButtonGroup>
        //             </div>

        //             <div className="container">
        //                 {this.renderCompetitions()}
        //             </div>
        //         </div>
        //     )
        // } else if (this.props.user_role === "teacher") {
        //     return (
        //         <div>
        //             <nav className="navbar navbar-light bg-light" id="nav1">
        //                 <div id="logo">
        //                     <img alt="Logo" className="gambar" />
        //                     <span className="navbar-brand mb-0 h1">Repository Youth Science Club in Senior High School X</span>
        //                 </div>
        //             </nav>
        //             <nav className="navbar navbar-expand-lg navbar-light" id="nav2">
        //                 <div className="container-fluid">
        //                     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        //                         <div className="navbar-nav">
        //                             <a className="nav-link active mx-3" href="/homepage">Home</a>
        //                             <a className="nav-link active mx-3" href="/manageuser">Manage User</a>
        //                             <a className="nav-link active mx-3" href="/managemasterdata">Manage Master Data</a>
        //                             <a className="nav-link active mx-3" href="/managescientificpaper">Manage Scienttific Paper</a>
        //                             <a className="nav-link active mx-3" href="/browsecollection">Browse Collection</a>
        //                             <a className="nav-link active mx-3" href="/report">Report</a>


        //                         </div>
        //                     </div>
        //                 </div>
        //             </nav>

        //             <nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav3">
        //                 <div className="hello">
        //                     <h6>Hello, Teacher</h6>
        //                     <button onClick={this.props.onLogoutUser} className="btn btn-dark" id="btn-logout">Log Out</button>
        //                 </div>
        //             </nav>

        //             <div className="mt-5">
        //                 <h4 className="masterdatacompetition">Master Data Competition</h4>
        //             </div>

        //             <div className="mt-5 container">
        //                 <NavLink to="/addnewcompetition">
        //                     <button className="btn btn-outline-dark">Add New Data</button>
        //                 </NavLink>
        //                 <ButtonGroup className="btn-group ml-3">
        //                     <Button onClick={this.searchCompetitions}>
        //                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
        //                             <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        //                         </svg>
        //                     </Button>
        //                     <Input className="round" placeholder="Search here..." />
        //                 </ButtonGroup>
        //             </div>

        //             <div className="container">
        //                 {this.renderCompetitions()}
        //             </div>
        //         </div>
        //     )
        // } else {
        //     return (
        //         <h1 className="text-center mt-5">
        //             Halaman tidak dapat diakses
        //         </h1>
        //     )
        // }
        return (
            <div>
                <nav className="navbar navbar-light bg-light" id="nav1">
                    <div id="logo">
                        <img alt="Logo" className="gambar" />
                        <span className="navbar-brand mb-0 h1">Repository Youth Science Club in Senior High School X</span>
                    </div>
                </nav>
                <nav className="navbar navbar-expand-lg navbar-light" id="nav2">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <NavLink className="nav-link active mx-3" to="/homepage">Home</NavLink>
                                <NavLink className="nav-link active mx-3" to="/manageuser">Manage User</NavLink>
                                <NavLink className="nav-link active mx-3" to="/managemasterdata">Manage Master Data</NavLink>
                                <NavLink className="nav-link active mx-3" to="/managescientificpaper">Manage Scienttific Paper</NavLink>
                                <NavLink className="nav-link active mx-3" to="/browsecollection">Browse Collection</NavLink>
                                <NavLink className="nav-link active mx-3" to="/report">Report</NavLink>
                            </div>
                        </div>
                    </div>
                </nav>

                <nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav3">
                    <div className="hello">
                        <h6>Hello, Admin</h6>
                        <button onClick={this.props.onLogoutUser} className="btn btn-dark" id="btn-logout">Log Out</button>
                    </div>
                </nav>

                <div className="mt-5">
                    <h4 className="masterdatacompetition">Master Data Competition</h4>
                </div>

                <div className="mt-5 container">
                    <NavLink to="/addnewcompetition">
                        <button className="btn btn-outline-dark">Add New Data</button>
                    </NavLink>
                    <ButtonGroup className="btn-group ml-3">
                        <Button onClick={this.searchCompetitions}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </Button>
                        <Input className="round" placeholder="Search here..." />
                    </ButtonGroup>
                </div>

                <div className="container">
                    {this.renderCompetitions()}
                </div>
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         user_role: state.auth.role
//     }
// }

// export default connect(mapStateToProps, { onLogoutUser })(Masterdatacompetition)
export default Masterdatacompetition