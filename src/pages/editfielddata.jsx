import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Col, ButtonGroup } from 'reactstrap';
import './editfielddata.css'
import axios from 'axios';
import { connect } from 'react-redux';
import { onLogoutUser } from '../redux/action'
import { NavLink } from 'react-router-dom'

class Editfielddata extends Component {

    constructor(props) {
        super(props);
        this.onChangeFieldrName = this.onChangeFieldrName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            inputFieldName: '',
            fields: []
        }
    }

    componentDidMount() {
        axios.get('').then(res => {
            this.setState({
                inputFieldName: res.data.data.fieldname
            })
        }).catch(err => {
            console.log(err);
        })
        axios.get('').then(res => {
            if (res.data.data.length > 0) {
                this.setState({
                    fields: res.data.data.map(field => field.fieldname)

                })
            }
        }).catch(err => {
            console.log(err);
        })
    }

    onChangeFieldrName(e) {
        this.setState({
            inputFieldName: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()
        const fields_data = {
            fieldname: this.state.inputFieldName
        }
        console.log(fields_data);
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
        //                     <button onClick={this.props.onLogoutUser} className="btn btn-dark" id="btn-logout">Log Out</button>
        //                 </div>
        //             </nav>

        //             <div className="mt-5">
        //                 <h4 className="manageuser">Master Data Field</h4>
        //             </div>

        //             <div className="container card" id="form">
        //                 <Form className="form-create container" onSubmit={this.onSubmit}>
        //                     <h3 className="headline-login my-5">Edit Field</h3>
        //                     {/* <FormGroup row>
        //                         <Label for="example" className="col" id="fieldname">Field ID</Label>
        //                         <Col sm={10}>
        //                             <Input type="email" name="email" id="example" placeholder="Cannot change" />
        //                         </Col>
        //                     </FormGroup> */}
        //                     <FormGroup row>
        //                         <Label className="col" id="fieldname">Field Name</Label>
        //                         <Col sm={10}>
        //                             <Input value={this.onChangeFieldrName} id="example" placeholder="input field name" />
        //                         </Col>
        //                     </FormGroup>
        //                 </Form>
        //                 <div className="button-create my-5">
        //                     <button type="reset" className="btn btn-dark mx-3" id="btn-cancel">Cancel</button>
        //                     <button type="submit" className="btn btn-dark mx-3" id="btn-save">Save</button>
        //                 </div>
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
        //                 <h4 className="manageuser">Master Data Field</h4>
        //             </div>

        //             <div className="container card" id="form">
        //                 <Form className="form-create container" onSubmit={this.onSubmit}>
        //                     <h3 className="headline-login my-5">Edit Field</h3>
        //                     {/* <FormGroup row>
        //                         <Label for="example" className="col" id="fieldname">Field ID</Label>
        //                         <Col sm={10}>
        //                             <Input type="email" name="email" id="example" placeholder="Cannot change" />
        //                         </Col>
        //                     </FormGroup> */}
        //                     <FormGroup row>
        //                         <Label className="col" id="fieldname">Field Name</Label>
        //                         <Col sm={10}>
        //                             <Input value={this.onChangeFieldrName} id="example" placeholder="input field name" />
        //                         </Col>
        //                     </FormGroup>
        //                 </Form>
        //                 <div className="button-create my-5">
        //                     <button type="reset" className="btn btn-dark mx-3" id="btn-cancel">Cancel</button>
        //                     <button type="submit" className="btn btn-dark mx-3" id="btn-save">Save</button>
        //                 </div>
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
                    <h4 className="manageuser">Master Data Field</h4>
                </div>

                <div className="container card" id="form">
                    <Form className="form-create container" onSubmit={this.onSubmit}>
                        <h3 className="headline-login my-5">Edit Field</h3>
                        {/* <FormGroup row>
                            <Label for="example" className="col" id="fieldname">Field ID</Label>
                            <Col sm={10}>
                                <Input type="email" name="email" id="example" placeholder="Cannot change" />
                            </Col>
                        </FormGroup> */}
                        <FormGroup row>
                            <Label className="col" id="fieldname">Field Name</Label>
                            <Col sm={10}>
                                <Input value={this.onChangeFieldrName} id="example" placeholder="input field name" />
                            </Col>
                        </FormGroup>
                    </Form>
                    <div className="button-create my-5">
                        <button type="reset" className="btn btn-dark mx-3" id="btn-cancel">Cancel</button>
                        <button type="submit" className="btn btn-dark mx-3" id="btn-save">Save</button>
                    </div>
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

// export default connect(mapStateToProps, { onLogoutUser })(Editfielddata)
export default Editfielddata