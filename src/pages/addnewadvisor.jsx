import React, { Component } from 'react'
import './addnewadvisor.css'
import { Button, Form, FormGroup, Label, Input, FormText, Col, ButtonGroup } from 'reactstrap';
import axios from 'axios'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import { NavLink } from 'react-router-dom'
import { onLogoutUser } from '../redux/action'

class Addnewadvisor extends Component {

    state = {
        inputTeacherName: '',
        inputNUPTK: '',
        gender: ''
    }

    onBtnRegister = () => {
        if (
            !this.state.inputTeacherName || !this.state.inputNUPTK || !this.state.gender
        ) {
            Swal.fire('Invalid', 'Harap isi semua form', 'error')
        } else {
            if (this.state.gender && this.state.inputNUPTK && this.state.inputTeacherName) {
                axios.post('http://localhost:6773/users/register', 
                 {
                    teachername: this.state.inputTeacherName,
                    nuptk: this.state.inputNUPTK,
                    gender: this.state.gender
                }).then(res => {
                    if (res.data.status === '200') {
                        Swal.fire('Registered!', res.data.message, 'success')
                    } else if (res.data.status === '500') {
                        Swal.fire('invalid!', res.data.message, 'error')
                    }
                }).catch(err => {
                    console.log(err);
                })
                Swal.fire('Registered!', 'Advisor has been registered', 'success')
            }
        }
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
        //                 <h4 className="manageuser">Master Data Advisor</h4>
        //             </div>

        //             <div className="container card" id="form">
        //                 <Form className="form-create container">
        //                     <h3 className="headline-login my-5">Add New Advisor</h3>
        //                     <FormGroup row>
        //                         <Label className="col" id="teachername">Teacher Name</Label>
        //                         <Col sm={10}>
        //                             <Input onChange={e => this.setState({ inputTeacherName: e.target.value })} id="example" placeholder="input teacher name" />
        //                         </Col>
        //                     </FormGroup>
        //                     <FormGroup row>
        //                         <Label className="col">NUPTK</Label>
        //                         <Col sm={10}>
        //                             <Input onChange={e => this.setState({ inputNUPTK: e.target.value })} id="example" placeholder="input NUPTK" />
        //                         </Col>
        //                     </FormGroup>
        //                     <FormGroup row>
        //                         <Label className="col">Gender</Label>
        //                         <Col sm={10}>
        //                             <select class="form-select"
        //                                 value={this.state.gender}
        //                                 onChange={e => this.setState({ gender: e.target.value })}>
        //                                 <option value="male">Male</option>
        //                                 <option value="female">Female</option>
        //                             </select>
        //                         </Col>
        //                     </FormGroup>
        //                     <div className="button-create my-5">
        //                         <button type="reset" className="btn btn-dark mx-3" id="btn-cancel">Cancel</button>
        //                         <button onClick={this.onBtnRegister} className="btn btn-dark mx-3" id="btn-save">Save</button>
        //                     </div>
        //                 </Form>
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
        //                 <h4 className="manageuser">Master Data Advisor</h4>
        //             </div>

        //             <div className="container card" id="form">
        //                 <Form className="form-create container">
        //                     <h3 className="headline-login my-5">Add New Advisor</h3>
        //                     <FormGroup row>
        //                         <Label className="col" id="teachername">Teacher Name</Label>
        //                         <Col sm={10}>
        //                             <Input onChange={e => this.setState({ inputTeacherName: e.target.value })} id="example" placeholder="input teacher name" />
        //                         </Col>
        //                     </FormGroup>
        //                     <FormGroup row>
        //                         <Label className="col">NUPTK</Label>
        //                         <Col sm={10}>
        //                             <Input onChange={e => this.setState({ inputNUPTK: e.target.value })} id="example" placeholder="input NUPTK" />
        //                         </Col>
        //                     </FormGroup>
        //                     <FormGroup row>
        //                         <Label className="col">Gender</Label>
        //                         <Col sm={10}>
        //                             <select class="form-select"
        //                                 value={this.state.gender}
        //                                 onChange={e => this.setState({ gender: e.target.value })}>
        //                                 <option value="male">Male</option>
        //                                 <option value="female">Female</option>
        //                             </select>
        //                         </Col>
        //                     </FormGroup>
        //                     <div className="button-create my-5">
        //                         <button type="reset" className="btn btn-dark mx-3" id="btn-cancel">Cancel</button>
        //                         <button onClick={this.onBtnRegister} className="btn btn-dark mx-3" id="btn-save">Save</button>
        //                     </div>
        //                 </Form>
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
                    <h4 className="manageuser">Master Data Advisor</h4>
                </div>

                <div className="container card" id="form">
                    <Form className="form-create container">
                        <h3 className="headline-login my-5">Add New Advisor</h3>
                        <FormGroup row>
                            <Label className="col" id="teachername">Teacher Name</Label>
                            <Col sm={10}>
                                <Input onChange={e => this.setState({ inputTeacherName: e.target.value })} id="example" placeholder="input teacher name" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className="col">NUPTK</Label>
                            <Col sm={10}>
                                <Input onChange={e => this.setState({ inputNUPTK: e.target.value })} id="example" placeholder="input NUPTK" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className="col">Gender</Label>
                            <Col sm={10}>
                                <select class="form-select"
                                    value={this.state.gender}
                                    onChange={e => this.setState({ gender: e.target.value })}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </Col>
                        </FormGroup>
                        <div className="button-create my-5">
                            <button type="reset" className="btn btn-dark mx-3" id="btn-cancel">Cancel</button>
                            <button onClick={this.onBtnRegister} className="btn btn-dark mx-3" id="btn-save">Save</button>
                        </div>
                    </Form>
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

// export default connect(mapStateToProps, { onLogoutUser })(Addnewadvisor)
export default Addnewadvisor