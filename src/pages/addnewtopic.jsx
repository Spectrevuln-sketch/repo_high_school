import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Col, ButtonGroup } from 'reactstrap';
import './addnewtopic.css'
import axios from 'axios'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import { NavLink } from 'react-router-dom'
import { onLogoutUser } from '../redux/action'

class Addnewtopic extends Component {

    state = {
        inputTopicName: ''
    }

    onBtnRegister = () => {
        if (
            !this.state.inputTopicName
        ) {
            Swal.fire('Invalid', 'Harap isi semua form', 'error')
        } else {
            if (this.state.inputTopicName) {
                axios.post('url', {
                    topicname: this.state.inputTopicName
                }).then(res => {
                    if (res.data.status === '200') {
                        Swal.fire('Registered!', res.data.message, 'success')
                    } else if (res.data.status === '500') {
                        Swal.fire('invalid!', res.data.message, 'error')
                    }
                }).catch(err => {
                    console.log(err);
                })
                Swal.fire('Registered!', 'Topic has been registered', 'success')
            }
        }
    }

    render() {
        if (this.props.user_role === "admin") {
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
                                    <a className="nav-link active mx-3" href="/homepage">Home</a>
                                    <a className="nav-link active mx-3" href="/manageuser">Manage User</a>
                                    <a className="nav-link active mx-3" href="/managemasterdata">Manage Master Data</a>
                                    <a className="nav-link active mx-3" href="/managescientificpaper">Manage Scienttific Paper</a>
                                    <a className="nav-link active mx-3" href="/browsecollection">Browse Collection</a>
                                    <a className="nav-link active mx-3" href="/report">Report</a>
                                </div>
                            </div>
                        </div>
                    </nav>

                    <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav3">
                        <div className="hello">
                            <h6>Hello, Admin</h6>
                            <button onClick={this.props.onLogoutUser} className="btn btn-dark" id="btn-logout">Log Out</button>
                        </div>
                    </nav>

                    <div className="mt-5">
                        <h4 className="manageuser">Master Data Topic</h4>
                    </div>

                    <div className="container card" id="form">
                        <Form className="form-create container">
                            <h3 className="headline-login my-5">Add New Topic</h3>
                            <FormGroup row>
                                <Label className="col" id="topicname">Topic Name</Label>
                                <Col sm={10}>
                                    <Input onChange={e => { this.setState({ inputTopicName: e.target.value }) }} id="example" placeholder="input topic name" />
                                </Col>
                            </FormGroup>
                        </Form>
                        <div className="button-create my-5">
                            <button type="reset" className="btn btn-dark mx-3" id="btn-cancel">Cancel</button>
                            <button onClick={this.onBtnRegister} className="btn btn-dark mx-3" id="btn-save">Save</button>
                        </div>
                    </div>
                </div>
            )
        } else if (this.props.user_role === "teacher") {
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
                                    <a className="nav-link active mx-3" href="/homepage">Home</a>
                                    <a className="nav-link active mx-3" href="/managemasterdata">Manage Master Data</a>
                                    <a className="nav-link active mx-3" href="/managescientificpaper">Manage Scienttific Paper</a>
                                    <a className="nav-link active mx-3" href="/browsecollection">Browse Collection</a>
                                    <a className="nav-link active mx-3" href="/report">Report</a>
                                </div>
                            </div>
                        </div>
                    </nav>

                    <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav3">
                        <div className="hello">
                            <h6>Hello, Teacher</h6>
                            <button onClick={this.props.onLogoutUser} className="btn btn-dark" id="btn-logout">Log Out</button>
                        </div>
                    </nav>

                    <div className="mt-5">
                        <h4 className="manageuser">Master Data Topic</h4>
                    </div>

                    <div className="container card" id="form">
                        <Form className="form-create container">
                            <h3 className="headline-login my-5">Add New Topic</h3>
                            <FormGroup row>
                                <Label className="col" id="topicname">Topic Name</Label>
                                <Col sm={10}>
                                    <Input onChange={e => { this.setState({ inputTopicName: e.target.value }) }} id="example" placeholder="input topic name" />
                                </Col>
                            </FormGroup>
                        </Form>
                        <div className="button-create my-5">
                            <button type="reset" className="btn btn-dark mx-3" id="btn-cancel">Cancel</button>
                            <button onClick={this.onBtnRegister} className="btn btn-dark mx-3" id="btn-save">Save</button>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <h1 className="text-center mt-5">
                    Halaman tidak dapat diakses
                </h1>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        user_role: state.auth.role
    }
}

export default connect(mapStateToProps, { onLogoutUser })(Addnewtopic)