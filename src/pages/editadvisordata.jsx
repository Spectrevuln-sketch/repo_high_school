import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Col, ButtonGroup } from 'reactstrap';
import './editadvisordata.css'
import axios from 'axios';
import { connect } from 'react-redux';
import { onLogoutUser } from '../redux/action'
import { NavLink } from 'react-router-dom'

class Editadvisordata extends Component {

    constructor(props) {

        super(props);
        this.onChangeTeacherName = this.onChangeTeacherName.bind(this);
        this.onChangeNUPTK = this.onChangeNUPTK.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            inputTeacherName: '',
            inputNUPTK: '',
            inputGender: '',
            advisors: []
        }
    }

    componentDidMount() {
        axios.get('').then(res => {
            this.setState({
                inputTeacherName: res.data.data.teachername,
                inputNUPTK: res.data.data.nuptk,
                inputGender: res.data.data.gender
            })
        }).catch(err => {
            console.log(err);
        })
        axios.get('').then(res => {
            if (res.data.data.length > 0) {
                this.setState({
                    advisors: res.data.data.map(advisor => advisor.teachername)

                })
            }
        }).catch(err => {
            console.log(err);
        })
    }

    onChangeTeacherName(e) {
        this.setState({
            inputTeacherName: e.target.value
        })
    }
    onChangeNUPTK(e) {
        this.setState({
            inputNUPTK: e.target.value
        })
    }

    onChangeGender(e) {
        this.setState({
            inputGender: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const advisors_data = {
            teachername: this.state.inputTeacherName,
            nuptk: this.state.inputNUPTK,
            gender: this.state.inputGender
        }
        console.log(advisors_data)
        axios.put('url')
            .then(res => console.log(res.data.data));
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
        //                     <button onClick={this.props.onClick} className="btn btn-dark" id="btn-logout">Log Out</button>
        //                 </div>
        //             </nav>

        //             <div className="mt-5">
        //                 <h4 className="manageuser">Master Data Advisor</h4>
        //             </div>

        //             <div className="container card" id="form">
        //                 <Form className="form-create container" onSubmit={this.onSubmit}>
        //                     <h3 className="headline-login my-5">Edit Advisor</h3>
        //                     <FormGroup row>
        //                         <Label className="col" id="teachername">Teacher Name</Label>
        //                         <Col sm={10}>
        //                             <Input value={this.onChangeTeacherName} id="example" placeholder="input teacher name" />
        //                         </Col>
        //                     </FormGroup>
        //                     <FormGroup row>
        //                         <Label className="col">NUPTK</Label>
        //                         <Col sm={10}>
        //                             <Input value={this.onChangeNUPTK} id="example" placeholder="input NUPTK" />
        //                         </Col>
        //                     </FormGroup>
        //                     <FormGroup row>
        //                         <Label className="col">Gender</Label>
        //                         <Col sm={10}>
        //                             <select class="form-select" value={this.state.inputGender}
        //                                 onChange={this.onChangeGender} >
        //                                 {
        //                                     this.state.inputGender.map(genders => {
        //                                         return <option key={genders} value={genders}>{genders}</option>
        //                                     })
        //                                 }
        //                             </select>
        //                         </Col>
        //                     </FormGroup>
        //                     <div className="button-create my-5">
        //                         <button type="reset" className="btn btn-dark mx-3" id="btn-cancel">Cancel</button>
        //                         <button type="submit" className="btn btn-dark mx-3" id="btn-save">Save</button>
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
        //                     <button onClick={this.props.onClick} className="btn btn-dark" id="btn-logout">Log Out</button>
        //                 </div>
        //             </nav>

        //             <div className="mt-5">
        //                 <h4 className="manageuser">Master Data Advisor</h4>
        //             </div>

        //             <div className="container card" id="form">
        //                 <Form className="form-create container" onSubmit={this.onSubmit}>
        //                     <h3 className="headline-login my-5">Edit Advisor</h3>
        //                     <FormGroup row>
        //                         <Label className="col" id="teachername">Teacher Name</Label>
        //                         <Col sm={10}>
        //                             <Input value={this.onChangeTeacherName} id="example" placeholder="input teacher name" />
        //                         </Col>
        //                     </FormGroup>
        //                     <FormGroup row>
        //                         <Label className="col">NUPTK</Label>
        //                         <Col sm={10}>
        //                             <Input value={this.onChangeNUPTK} id="example" placeholder="input NUPTK" />
        //                         </Col>
        //                     </FormGroup>
        //                     <FormGroup row>
        //                         <Label className="col">Gender</Label>
        //                         <Col sm={10}>
        //                             <select class="form-select" value={this.state.inputGender}
        //                                 onChange={this.onChangeGender} >
        //                                 {
        //                                     this.state.inputGender.map(genders => {
        //                                         return <option key={genders} value={genders}>{genders}</option>
        //                                     })
        //                                 }
        //                             </select>
        //                         </Col>
        //                     </FormGroup>
        //                     <div className="button-create my-5">
        //                         <button type="reset" className="btn btn-dark mx-3" id="btn-cancel">Cancel</button>
        //                         <button type="submit" className="btn btn-dark mx-3" id="btn-save">Save</button>
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
                        <button onClick={this.props.onClick} className="btn btn-dark" id="btn-logout">Log Out</button>
                    </div>
                </nav>

                <div className="mt-5">
                    <h4 className="manageuser">Master Data Advisor</h4>
                </div>

                <div className="container card" id="form">
                    <Form className="form-create container" onSubmit={this.onSubmit}>
                        <h3 className="headline-login my-5">Edit Advisor</h3>
                        <FormGroup row>
                            <Label className="col" id="teachername">Teacher Name</Label>
                            <Col sm={10}>
                                <Input value={this.onChangeTeacherName} id="example" placeholder="input teacher name" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className="col">NUPTK</Label>
                            <Col sm={10}>
                                <Input value={this.onChangeNUPTK} id="example" placeholder="input NUPTK" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className="col">Gender</Label>
                            <Col sm={10}>
                                <select class="form-select" value={this.state.inputGender}
                                    onChange={this.onChangeGender} >
                                    {
                                        this.state.inputGender.map(genders => {
                                            return <option key={genders} value={genders}>{genders}</option>
                                        })
                                    }
                                </select>
                            </Col>
                        </FormGroup>
                        <div className="button-create my-5">
                            <button type="reset" className="btn btn-dark mx-3" id="btn-cancel">Cancel</button>
                            <button type="submit" className="btn btn-dark mx-3" id="btn-save">Save</button>
                        </div>
                    </Form>
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

// export default connect(mapStateToProps, { onLogoutUser })(Editadvisordata)
export default Editadvisordata