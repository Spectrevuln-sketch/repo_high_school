import axios from 'axios';
import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Col, NavLink } from 'reactstrap';
import '../pages/login.css'
import Swal from 'sweetalert2'
import { connect } from 'react-redux'
import { onLoginUser } from '../redux/action'
import { Redirect } from 'react-router-dom'

class Login extends Component {


    state = {
        inputUsername: '',
        inputPassword: ''
    }

    onBtnLogin = (e) => {
        e.preventDefault()
        if (this.state.inputPassword || this.state.inputUsername) {
            axios.post('http://localhost:6773/users/login_auth', {
                username: this.state.inputUsername,
                password: this.state.inputPassword
            }).then(result => {
                console.log(result)
                if (result.status == 200) {
                    Swal.fire('Authententicate!', result.data.message, 'success')
                } else {
                    Swal.fire('Invalid User!', result.data.message, 'error')
                }

            }).catch(err => {
                console.error(err)
            })
        }
        if (this.state.inputPassword || this.state.inputUsername) {
            Swal.fire('In Falid !', 'Cannot Auth', 'error')
        }

    }

    // onBtnLogin = () => {
    //     let username = this.state.inputUsername
    //     let password = this.state.inputUsername
    //     this.props.onLoginUser(username, password)
    // }

    render() {
        // if (!this.props.user_name) {
        //     return (
        //         <div className="container card">
        //             <Form className="form-login">
        //                 <h3 className="headline-login">Login to Repository</h3>
        //                 <FormGroup row>
        //                     <Label>Username</Label>
        //                     <Col sm={10}>
        //                         <Input onChange={e => this.setState({ inputUsername: e.target.value })} id="exampleEmail" />
        //                     </Col>
        //                 </FormGroup>
        //                 <FormGroup row>
        //                     <Label>Password</Label>
        //                     <Col sm={10}>
        //                         <Input onChange={e => this.setState({ inputPassword: e.target.value })} type="password" name="password" id="examplePassword" />
        //                     </Col>
        //                 </FormGroup>
        //                 <NavLink to="/homepage">
        //                     <Button onClick={this.onBtnLogin} className="button-login">Login</Button>
        //                 </NavLink>
        //             </Form>
        //         </div>
        //     )
        // } else {
        //     Swal.fire('Anda sudah login')
        //     return (
        //         < Redirect to='/' />
        //         )
        //     }
        return (
            <div className="container card">
                <Form className="form-login" onSubmit={this.onBtnLogin} >
                    <h3 className="headline-login">Login to Repository</h3>
                    <FormGroup row>
                        <Label>Username</Label>
                        <Col sm={10}>
                            <Input onChange={e => this.setState({ inputUsername: e.target.value })} id="exampleEmail" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label>Password</Label>
                        <Col sm={10}>
                            <Input onChange={e => this.setState({ inputPassword: e.target.value })} type="password" name="password" id="examplePassword" />
                        </Col>
                    </FormGroup>
                    <Redirect to="/homepage">
                        <Button type="submit" className="button-login">Login</Button>
                    </Redirect>
                </Form>
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         user_name: state.auth.username
//     }
// }

// export default connect(mapStateToProps, {onLoginUser})(Login)
export default Login