import React, { Component } from 'react'
import {
    Button, Form, FormGroup, Label, Input, FormText, Col, ButtonGroup,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Nav
} from 'reactstrap';
import './managemasterdata.css'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { onLogoutUser } from '../redux/action'
import { NavLink } from 'react-router-dom'

class Managemasterdata extends Component {
    render() {
        // if (this.props.user_role === 'admin') {
        //     return (
        //         <div>
        //             <nav class="navbar navbar-light bg-light" id="nav1">
        //                 <div id="logo">
        //                     <img alt="Logo" className="gambar" />
        //                     <span class="navbar-brand mb-0 h1">Repository Youth Science Club in Senior High School X</span>
        //                 </div>
        //             </nav>
        //             <nav class="navbar navbar-expand-lg navbar-light" id="nav2">
        //                 <div class="container-fluid">
        //                     <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        //                         <div class="navbar-nav">
        //                             <a class="nav-link active mx-3" href="/homepage">Home</a>
        //                             <a class="nav-link active mx-3" href="/manageuser">Manage User</a>
        //                             <a class="nav-link active mx-3" href="/managemasterdata">Manage Master Data</a>
        //                             <a class="nav-link active mx-3" href="/managescientificpaper">Manage Scienttific Paper</a>
        //                             <a class="nav-link active mx-3" href="/browsecollection">Browse Collection</a>
        //                             <a class="nav-link active mx-3" href="/report">Report</a>

        //                         </div>
        //                     </div>
        //                 </div>
        //             </nav>

        //             <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav3">
        //                 <div className="hello">
        //                     <h6>Hello, Admin</h6>
        //                     <button className="btn btn-dark" id="btn-logout">Log Out</button>
        //                 </div>
        //             </nav>

        //             <div className="mt-5">
        //                 <h4 className="manageuser">Manage Master Data</h4>
        //             </div>

        //             <div className="row">
        //                 <Card className="col-4" id="card">
        //                     <img id="img" src="/assets/318x180.svg" alt="Card image cap" />
        //                     <CardBody>
        //                         <CardTitle tag="h5" className="title">
        //                             <a href="/masterdataauthor">Author</a>
        //                         </CardTitle>
        //                     </CardBody>
        //                 </Card>
        //                 <Card className="col-4" id="card">
        //                     <img id="img" src="/assets/318x180.svg" alt="Card image cap" />
        //                     <CardBody>
        //                         <CardTitle tag="h5" className="title">
        //                             <a href="/masterdataadvisor">Advisor</a>
        //                         </CardTitle>
        //                     </CardBody>
        //                 </Card>
        //                 <Card className="col-4" id="card">
        //                     <img id="img" src="/assets/318x180.svg" alt="Card image cap" />
        //                     <CardBody>
        //                         <CardTitle tag="h5" className="title">Field</CardTitle>
        //                     </CardBody>
        //                 </Card>
        //                 <Card className="col-4" id="card">
        //                     <img id="img" src="/assets/318x180.svg" alt="Card image cap" />
        //                     <CardBody>
        //                         <CardTitle tag="h5" className="title">
        //                             <a href="/masterdatafield">Field</a>
        //                         </CardTitle>
        //                     </CardBody>
        //                 </Card>
        //                 <Card className="col-4" id="card">
        //                     <img id="img" src="/assets/318x180.svg" alt="Card image cap" />
        //                     <CardBody>
        //                         <CardTitle tag="h5" className="title">
        //                             <a href="/masterdatascales">Scales</a>
        //                         </CardTitle>
        //                     </CardBody>
        //                 </Card>
        //                 <Card className="col-4" id="card">
        //                     <img id="img" src="/assets/318x180.svg" alt="Card image cap" />
        //                     <CardBody>
        //                         <CardTitle tag="h5" className="title">
        //                             <a href="/masterdatacompetition">Competition</a>
        //                         </CardTitle>
        //                     </CardBody>
        //                 </Card>
        //             </div>
        //         </div>
        //     )
        // } else if (this.props.user_role === 'teacher') {
        //     return (
        //         <div>
        //             <nav class="navbar navbar-light bg-light" id="nav1">
        //                 <div id="logo">
        //                     <img alt="Logo" className="gambar" />
        //                     <span class="navbar-brand mb-0 h1">Repository Youth Science Club in Senior High School X</span>
        //                 </div>
        //             </nav>
        //             <nav class="navbar navbar-expand-lg navbar-light" id="nav2">
        //                 <div class="container-fluid">
        //                     <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        //                         <div class="navbar-nav">
        //                             <a class="nav-link active mx-3" href="/homepage">Home</a>
        //                             {/* <a class="nav-link active mx-3" href="/manageuser">Manage User</a> */}
        //                             <a class="nav-link active mx-3" href="/managemasterdata">Manage Master Data</a>
        //                             <a class="nav-link active mx-3" href="/managescientificpaper">Manage Scienttific Paper</a>
        //                             <a class="nav-link active mx-3" href="/browsecollection">Browse Collection</a>
        //                             <a class="nav-link active mx-3" href="/report">Report</a>


        //                         </div>
        //                     </div>
        //                 </div>
        //             </nav>

        //             <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav3">
        //                 <div className="hello">
        //                     <h6>Hello, Teacher</h6>
        //                     <button className="btn btn-dark" id="btn-logout">Log Out</button>
        //                 </div>
        //             </nav>

        //             <div className="mt-5">
        //                 <h4 className="manageuser">Manage Master Data</h4>
        //             </div>

        //             <div className="row">
        //                 <Card className="col-4" id="card">
        //                     <NavLink to="/masterdataauthor">
        //                         <img id="img" src="/assets/318x180.svg" alt="Card image cap" />
        //                     </NavLink>
        //                     <CardBody>
        //                         <CardTitle tag="h5" className="title">
        //                             Author
        //                         </CardTitle>
        //                     </CardBody>
        //                 </Card>
        //                 <Card className="col-4" id="card">
        //                     <NavLink to="/masterdataadvisor">
        //                         <img id="img" src="/assets/318x180.svg" alt="Card image cap" />
        //                     </NavLink>
        //                     <CardBody>
        //                         <CardTitle tag="h5" className="title">
        //                             Advisor
        //                         </CardTitle>
        //                     </CardBody>
        //                 </Card>
        //                 <Card className="col-4" id="card">
        //                     <NavLink to="/masterdatafield">
        //                         <img id="img" src="/assets/318x180.svg" alt="Card image cap" />
        //                     </NavLink>
        //                     <CardBody>
        //                         Field
        //                     </CardBody>
        //                 </Card>
        //                 <Card className="col-4" id="card">
        //                     <NavLink to="/masterdatatopic">
        //                         <img id="img" src="/assets/318x180.svg" alt="Card image cap" />
        //                     </NavLink>
        //                     <CardBody>
        //                         <CardTitle tag="h5" className="title">
        //                             Topic
        //                         </CardTitle>
        //                     </CardBody>
        //                 </Card>
        //                 <Card className="col-4" id="card">
        //                     <NavLink to="/masterdatascales">
        //                         <img id="img" src="/assets/318x180.svg" alt="Card image cap" />
        //                     </NavLink>
        //                     <CardBody>
        //                         <CardTitle tag="h5" className="title">
        //                             Scales
        //                         </CardTitle>
        //                     </CardBody>
        //                 </Card>
        //                 <Card className="col-4" id="card">
        //                     <NavLink to="/masterdatacompetition">
        //                         <img id="img" src="/assets/318x180.svg" alt="Card image cap" />
        //                     </NavLink>
        //                     <CardBody>
        //                         <CardTitle tag="h5" className="title">
        //                             Competition
        //                         </CardTitle>
        //                     </CardBody>
        //                 </Card>
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

                <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav3">
                    <div className="hello">
                        <h6>Hello, Admin</h6>
                        <button className="btn btn-dark" id="btn-logout">Log Out</button>
                    </div>
                </nav>

                <div className="mt-5">
                    <h4 className="manageuser">Manage Master Data</h4>
                </div>

                <div className="row">
                    <Card className="col-4" id="card">
                        <img id="img" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5" className="author">
                                <NavLink to="/masterdataauthor">Author</NavLink>
                            </CardTitle>
                        </CardBody>
                    </Card>
                    <Card className="col-4" id="card">
                        <img id="img" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5" className="advisor">
                                <NavLink to="/masterdataadvisor">Advisor</NavLink>
                            </CardTitle>
                        </CardBody>
                    </Card>
                    <Card className="col-4" id="card">
                        <img id="img" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5" className="field">
                                <NavLink to="/masterdatafield">Field</NavLink>
                            </CardTitle>
                        </CardBody>
                    </Card>
                    <Card className="col-4" id="card">
                        <img id="img" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5" className="topic">
                                <NavLink to="/masterdatatopic">Topic</NavLink>
                            </CardTitle>
                        </CardBody>
                    </Card>
                    <Card className="col-4" id="card">
                        <img id="img" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5" className="scales">
                                <NavLink to="/masterdatascales">Scales</NavLink>
                            </CardTitle>
                        </CardBody>
                    </Card>
                    <Card className="col-4" id="card">
                        <img id="img" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5" className="competition">
                                <NavLink to="/masterdatacompetition">Competition</NavLink>
                            </CardTitle>
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         user_role: state.auth.role,
//     }
// }

// export default connect(mapStateToProps, { onLogoutUser })(Managemasterdata)
export default Managemasterdata