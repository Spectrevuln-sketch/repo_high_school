import React, { Component } from 'react'
import './addnewcompetition.css'
import { Button, Form, FormGroup, Label, Input, FormText, Col, ButtonGroup } from 'reactstrap';
import axios from 'axios'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import { NavLink } from 'react-router-dom'
import { onLogoutUser } from '../redux/action'
import DatePicker from 'react-date-picker';

class Addnewcompetition extends Component {

    state = {
        inputCompetitionName: '',
        inputDate: new Date(),
        inputOrganizer: '',
        inputLocation: '',
        inputScales: ''
    }

    handleDate = (e) => {
        console.log(e);
        this.setState({
            inputDate: e
        })
    }

    onBtnRegister = () => {
        if (
            !this.state.inputCompetitionName || !this.state.inputDate || !this.state.inputLocation || !this.state.inputOrganizer
            || !this.state.inputScales
        ) {
            Swal.fire('Invalid', 'Harap isi semua form', 'error')
        } else {
            if (this.state.inputCompetitionName && this.state.inputDate && this.state.inputLocation && this.state.inputOrganizer
                && this.state.inputScales) {
                axios.post('url', {
                    competitionname: this.state.inputCompetitionName,
                    date: this.state.inputDate,
                    location: this.state.inputLocation,
                    organizer: this.state.inputOrganizer,
                    scales: this.state.inputScales
                }).then(res => {
                    if (res.data.status === '200') {
                        Swal.fire('Registered!', res.data.message, 'success')
                    } else if (res.data.status === '500') {
                        Swal.fire('invalid!', res.data.message, 'error')
                    }
                }).catch(err => {
                    console.log(err);
                })
                Swal.fire('Registered!', 'Competition has been registered', 'success')
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
        //                 <h4 className="manageuser">Master Data Competition</h4>
        //             </div>

        //             <div className="container card" id="form">
        //                 <Form className="form-create container">
        //                     <h3 className="headline-login my-5">Add New Competition</h3>
        //                     <FormGroup row>
        //                         <Label className="col" id="studentname">Competition Name</Label>
        //                         <Col sm={10}>
        //                             <Input onChange={e => this.setState({ inputCompetitionName: e.target.value })} id="example" placeholder="input student name" />
        //                         </Col>
        //                     </FormGroup>
        //                     <FormGroup row>
        //                         <Label className="col">Date</Label>
        //                         <Col sm={10}>
        //                             <DatePicker value={this.state.inputDate} onChange={this.handleDate} format="y-MM-dd" />
        //                         </Col>
        //                     </FormGroup>
        //                     <FormGroup row>
        //                         <Label className="col">Organizer</Label>
        //                         <Col sm={10}>
        //                             <Input onChange={e => this.setState({ inputOrganizer: e.target.value })} id="example" placeholder="input Organnizer" />
        //                         </Col>
        //                     </FormGroup>
        //                     <FormGroup row>
        //                         <Label className="col">Location</Label>
        //                         <Col sm={10}>
        //                             <Input onChange={e => this.setState({ inputLocation: e.target.value })} id="example" placeholder="input Location" />
        //                         </Col>
        //                     </FormGroup>
        //                     <FormGroup row>
        //                         <Label className="col">Scales</Label>
        //                         <Col sm={10}>
        //                             <select class="form-select"
        //                                 value={this.state.inputScales}
        //                                 onChange={e => this.setState({ inputScales: e.target.value })} >
        //                                 {
        //                                     this.state.inputScales.map(scales => {
        //                                         return <option key={scales} value={scales}>{scales}</option>
        //                                     })
        //                                 }
        //                             </select>
        //                         </Col>
        //                     </FormGroup>
        //                     <div className="button-create my-5">
        //                         <button type="reset" type="reset" className="btn btn-dark mx-3" id="btn-cancel">Cancel</button>
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
        //                 <h4 className="manageuser">Master Data Competition</h4>
        //             </div>

        //             <div className="container card" id="form">
        //                 <Form className="form-create container">
        //                     <h3 className="headline-login my-5">Add New Competition</h3>
        //                     <FormGroup row>
        //                         <Label className="col" id="studentname">Competition Name</Label>
        //                         <Col sm={10}>
        //                             <Input onChange={e => this.setState({ inputCompetitionName: e.target.value })} id="example" placeholder="input student name" />
        //                         </Col>
        //                     </FormGroup>
        //                     <FormGroup row>
        //                         <Label className="col">Date</Label>
        //                         <Col sm={10}>
        //                             <DatePicker value={this.state.inputDate} onChange={this.handleDate} format="y-MM-dd" />
        //                         </Col>
        //                     </FormGroup>
        //                     <FormGroup row>
        //                         <Label className="col">Organizer</Label>
        //                         <Col sm={10}>
        //                             <Input onChange={e => this.setState({ inputOrganizer: e.target.value })} id="example" placeholder="input Organnizer" />
        //                         </Col>
        //                     </FormGroup>
        //                     <FormGroup row>
        //                         <Label className="col">Location</Label>
        //                         <Col sm={10}>
        //                             <Input onChange={e => this.setState({ inputLocation: e.target.value })} id="example" placeholder="input Location" />
        //                         </Col>
        //                     </FormGroup>
        //                     <FormGroup row>
        //                         <Label className="col">Scales</Label>
        //                         <Col sm={10}>
        //                             <select class="form-select"
        //                                 value={this.state.inputScales}
        //                                 onChange={e => this.setState({ inputScales: e.target.value })} >
        //                                 {
        //                                     this.state.inputScales.map(scales => {
        //                                         return <option key={scales} value={scales}>{scales}</option>
        //                                     })
        //                                 }
        //                             </select>
        //                         </Col>
        //                     </FormGroup>
        //                     <div className="button-create my-5">
        //                         <button type="reset" type="reset" className="btn btn-dark mx-3" id="btn-cancel">Cancel</button>
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
                    <h4 className="manageuser">Master Data Competition</h4>
                </div>

                <div className="container card" id="form">
                    <Form className="form-create container">
                        <h3 className="headline-login my-5">Add New Competition</h3>
                        <FormGroup row>
                            <Label className="col" id="studentname">Competition Name</Label>
                            <Col sm={10}>
                                <Input onChange={e => this.setState({ inputCompetitionName: e.target.value })} id="example" placeholder="input student name" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className="col">Date</Label>
                            <Col sm={10}>
                                <DatePicker value={this.state.inputDate} onChange={this.handleDate} format="y-MM-dd" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className="col">Organizer</Label>
                            <Col sm={10}>
                                <Input onChange={e => this.setState({ inputOrganizer: e.target.value })} id="example" placeholder="input Organnizer" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className="col">Location</Label>
                            <Col sm={10}>
                                <Input onChange={e => this.setState({ inputLocation: e.target.value })} id="example" placeholder="input Location" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className="col">Scales</Label>
                            <Col sm={10}>
                                <select class="form-select"
                                    value={this.state.inputScales}
                                    onChange={e => this.setState({ inputScales: e.target.value })} >
                                    {
                                        this.state.inputScales.map(scales => {
                                            return <option key={scales} value={scales}>{scales}</option>
                                        })
                                    }
                                </select>
                            </Col>
                        </FormGroup>
                        <div className="button-create my-5">
                            <button type="reset" type="reset" className="btn btn-dark mx-3" id="btn-cancel">Cancel</button>
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

// export default connect(mapStateToProps, { onLogoutUser })(Addnewcompetition)
export default Addnewcompetition