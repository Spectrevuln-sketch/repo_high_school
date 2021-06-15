import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Col, ButtonGroup } from 'reactstrap';
import './masterdatatopic.css'
import axios from 'axios'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import { NavLink } from 'react-router-dom'
import { onLogoutUser } from '../redux/action'

class Masterdatatopic extends Component {

    state = {
        inputSearch: '',
        topicData: []
    }

    componentDidMount() {
        this.getDataTopic()
    }


    getDataTopic = () => {
        axios.get('url')
            .then(res => {
                this.setState({
                    topicData: res.data.data
                })
            })
    }

    deleteTopic = (idTopic) => {
        axios.delete('url', {
            data: {
                idTopic: idTopic
            }
        }).then(res => {
            console.log(res.data.data);

            Swal.fire('Data berhasil di hapus !', 'Berhasil', 'success')
            this.getDataTopic()

        })
    }

    searchTopic = () => {
        axios.get(`url`, {
            params: {
                topicName: this.state.inputSearch
            }
        }).then(res => {
            this.setState({
                topicData: res.data.data
            })
            console.log(this.state.topicData)
        })
    }

    renderTopic = () => {
        var angka = 0
        return this.state.topicData.map((topic) => {
            return (
                <div className="container mt-5">
                    <table className="table table-success table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Topic ID</th>
                                <th scope="col">Topic Name</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">{angka++}</th>
                                <td>{topic.topicId}</td>
                                <td>{topic.topicName}</td>
                                <td>
                                    <NavLink to={"/edittopicdata" + topic.topicId}>
                                        <Button className="mx-2 btn btn-dark">Edit</Button>
                                    </NavLink>
                                    <Button onClick={() => { this.deleteTopic(topic.topicId) }} className="mx-2 btn btn-danger">Delete</Button>
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
        //                 <h4 className="masterdatafield">Master Data Topic</h4>
        //             </div>

        //             <div className="mt-5 container">
        //                 <NavLink to="/addnewtopic">
        //                     <button className="btn btn-outline-dark">Add New Data</button>
        //                 </NavLink>
        //                 <ButtonGroup className="btn-group ml-3">
        //                     <Button onClick={this.searchTopic}>
        //                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
        //                             <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        //                         </svg>
        //                     </Button>
        //                     <Input onChange={e => { this.setState({ inputSearch: e.target.value }) }} className="round" placeholder="Search here..." />
        //                 </ButtonGroup>
        //             </div>

        //             <div className="container">
        //                 {this.renderTopic()}
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
        //                 <h4 className="masterdatafield">Master Data Topic</h4>
        //             </div>

        //             <div className="mt-5 container">
        //                 <NavLink to="/addnewtopic">
        //                     <button className="btn btn-outline-dark">Add New Data</button>
        //                 </NavLink>
        //                 <ButtonGroup className="btn-group ml-3">
        //                     <Button onClick={this.searchTopic}>
        //                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
        //                             <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        //                         </svg>
        //                     </Button>
        //                     <Input onChange={e => { this.setState({ inputSearch: e.target.value }) }} className="round" placeholder="Search here..." />
        //                 </ButtonGroup>
        //             </div>

        //             <div className="container">
        //                 {this.renderTopic()}
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
                    <h4 className="masterdatafield">Master Data Topic</h4>
                </div>

                <div className="mt-5 container">
                    <NavLink to="/addnewtopic">
                        <button className="btn btn-outline-dark">Add New Data</button>
                    </NavLink>
                    <ButtonGroup className="btn-group ml-3">
                        <Button onClick={this.searchTopic}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </Button>
                        <Input onChange={e => { this.setState({ inputSearch: e.target.value }) }} className="round" placeholder="Search here..." />
                    </ButtonGroup>
                </div>

                <div className="container">
                    {this.renderTopic()}
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

// export default connect(mapStateToProps, { onLogoutUser })(Masterdatatopic)
export default Masterdatatopic