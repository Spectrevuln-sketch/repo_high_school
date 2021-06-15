import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Col, ButtonGroup } from 'reactstrap';
import './edituser.css'
import axios from 'axios';
import { connect } from 'react-redux';
import { onLogoutUser } from '../redux/action'
import { NavLink } from 'react-router-dom'

class Edituser extends Component {
    constructor(props) {
        super(props);
        this.onChangeUserID = this.onChangeUserID.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeRole = this.onChangeRole.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            inputUserid: '',
            inputUsername: '',
            inputPassword: '',
            role: '',
            users: []

        }
    }
    /* Mount Data ke Value masing masing input 
    * jangan lupa gunakan dan sertai username nya <Link to={"edituser/+props.data.username"}></Link> pada Button Link Ke EditUser  dengan dengan 
    * jadi didmount akan berjalan
    */
    componentDidMount() {
        if (this.props.match && this.props.match.params.id) {
            axios.get('http://localhost:6773/findUser/' + this.props.match.params.id)
                .then(res => {
                    this.setState({
                        inputUserid: res.data.data.id,
                        inputUsername: res.data.data.username,
                        inputPassword: res.data.data.password,
                        role: res.data.data.role
                    }).catch(err => {
                        console.log(err);
                    })
                })
            axios.get('http://localhost:6773/users_data')
                .then(res => {
                    if (res.data.data.length > 0) {
                        this.setState({
                            users: res.data.data.map(user => user.username)
                        })
                    }
                }).catch((error) => {
                    console.log(error);
                })

        }
    }

    onChangeUserID(e) {
        this.setState({
            inputUserid: e.target.value
        })
    }
    onChangeUsername(e) {
        this.setState({
            inputUsername: e.target.value
        })
    }

    onChangePassword(e) {
        this.setState({
            inputPassword: e.target.value
        })
    }

    onChangeRole(e) {
        this.setState({
            role: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        const users_data = {
            id: this.state.inputUserid,
            username: this.state.inputUsername,
            password: this.state.password,
            role: this.state.role
        }
        console.log(users_data)
        axios.put('http://localhost:6773/users/update_user/' + this.props.match.params.id, users_data)
            .then(res => console.log(res.data.data));
    }


    render() {
        // if (this.props.user_role === 'admin') {
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
        //                             <a className="nav-link active mx-3" href="#">Home</a>
        //                             <a className="nav-link active mx-3" href="#">Manage User</a>
        //                             <a className="nav-link active mx-3" href="#">Manage Master Data</a>
        //                             <a className="nav-link active mx-3" href="#">Manage Scienttific Paper</a>
        //                             <a className="nav-link active mx-3" href="#">Browse Collection</a>
        //                             <a className="nav-link active mx-3" href="#">Report</a>

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
        //                 <h4 className="manageuser">Manage User</h4>
        //             </div>

        //             <div className="container card" id="form">
        //                 <Form className="form-create container" onSubmit={this.onSubmit}>
        //                     <h3 className="headline-login">Edit User</h3>
        //                     <FormGroup row>
        //                         <Label for="exampleUserid" className="col">User ID</Label>
        //                         <Col sm={10}>
        //                             <Input type="email" name="email" id="example" placeholder="Cannot change" value={this.onChangeUserID} />
        //                         </Col>
        //                     </FormGroup>
        //                     <FormGroup row>
        //                         <Label for="exampleEmail" className="col">Username</Label>
        //                         <Col sm={10}>
        //                             <Input type="email" name="email" id="example" placeholder="input username" value={this.state.inputUserid} onChange={this.onChangeUsername} />
        //                         </Col>
        //                     </FormGroup>
        //                     <FormGroup row>
        //                         <Label for="examplePassword" className="col">Password</Label>
        //                         <Col sm={10}>
        //                             <Input type="password" name="password" id="example" placeholder="input password" value={this.state.inputUsername} onChange={this.onChangePassword} />
        //                         </Col>
        //                     </FormGroup>
        //                     <FormGroup row>
        //                         <Label for="example" className="col">Role</Label>
        //                         <Col sm={10}>
        //                             <select className="form-select"
        //                                 value={this.state.role}
        //                                 onChange={this.onChangeRole} >
        //                                 {
        //                                     this.state.role.map(roles => {
        //                                         return <option key={roles} value={roles}>{roles}</option>
        //                                     })
        //                                 }
        //                                 {/* <option selected>Select</option> */}
        //                             </select>
        //                         </Col>
        //                     </FormGroup>
        //                     <div className="button-create my-5">
        //                         <button type="submit" className="btn btn-dark mx-3" id="btn-save">Save</button>
        //                         <button type="reset" className="btn btn-dark mx-3" id="btn-cancel">Cancel</button>
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
                    <h4 className="manageuser">Manage User</h4>
                </div>

                <div className="container card" id="form">
                    <Form className="form-create container" onSubmit={this.onSubmit}>
                        <h3 className="headline-login">Edit User</h3>
                        <FormGroup row>
                            <Label className="col">User ID</Label>
                            <Col sm={10}>
                                <Input id="example" placeholder="Cannot change" value={this.onChangeUserID} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className="col">Username</Label>
                            <Col sm={10}>
                                <Input id="example" placeholder="input username" value={this.state.inputUserid} onChange={this.onChangeUsername} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className="col">Password</Label>
                            <Col sm={10}>
                                <Input type="password" name="password" id="example" placeholder="input password" value={this.state.inputUsername} onChange={this.onChangePassword} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className="col">Role</Label>
                            <Col sm={10}>
                                <select className="form-select"
                                    value={this.state.role}
                                    onChange={this.onChangeRole} >
                                    {
                                        this.state.role.map(roles => {
                                            return <option key={roles} value={roles}>{roles}</option>
                                        })
                                    }
                                    {/* <option selected>Select</option> */}
                                </select>
                            </Col>
                        </FormGroup>
                        <div className="button-create my-5">
                            <button type="submit" className="btn btn-dark mx-3" id="btn-save">Save</button>
                            <button type="reset" className="btn btn-dark mx-3" id="btn-cancel">Cancel</button>
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

// export default connect(mapStateToProps, { onLogoutUser })(Edituser)
export default Edituser