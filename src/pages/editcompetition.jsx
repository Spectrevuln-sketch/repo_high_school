import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Col, ButtonGroup } from 'reactstrap';
import './editcompetition.css'
import axios from 'axios';
import { connect } from 'react-redux';
import { onLogoutUser } from '../redux/action'
import DatePicker from 'react-date-picker'
import { NavLink } from 'react-router-dom'

class Editcompetition extends Component {

    constructor(props) {
        super(props);
        this.onChangeCompetitionName = this.onCompetitionName.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeOrganizer = this.onChangeOrganizer.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onChangeScales = this.onChangeScales.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            inputCompetitionName: '',
            inputDate: '',
            inputOrganizer: '',
            inputLocation: '',
            inputScales: '',
            competitions: []

        }
    }

    componentDidMount() {
        axios.get('url')
            .then(res => {
                this.setState({
                    inputCompetitionName: res.data.competitionname,
                    inputDate: res.data.data.date,
                    inputLocation: res.data.data.location,
                    inputOrganizer: res.data.data.organizer,
                    inputScales: res.data.data.scales
                }).catch(err => {
                    console.log(err);
                })
            })
        axios.get('url')
            .then(res => {
                if (res.data.data.length > 0) {
                    this.setState({
                        competitions: res.data.data.map(competition => competition.competitionname)
                    })
                }
            }).catch((error) => {
                console.log(error);
            })
    }

    onChangeCompetitionName(e) {
        this.setState({
            inputCompetitionName: e.target.value
        })
    }
    onChangeDate(e) {
        this.setState({
            inputDate: e
        })
    }

    onChangeOrganizer(e) {
        this.setState({
            inputOrganizer: e.target.value
        })
    }

    onChangeLocation(e) {
        this.setState({
            inputLocation: e.target.value
        })
    }

    onChangeScales(e) {
        this.setState({
            inputScales: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const competitions_data = {
            competitionname: this.state.inputCompetitionName,
            date: this.state.inputDate,
            organizer: this.state.inputOrganizer,
            location: this.state.inputLocation,
            scales: this.state.inputScales
        }
        console.log(competitions_data)
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
        //                 <h4 className="manageuser">Manage Data Competition</h4>
        //             </div>

        //             <div className="container card" id="form">
        //                 <Form className="form-create container" onSubmit={this.onSubmit}>
        //                     <h3 className="headline-login">Edit Competition</h3>
        //                     <FormGroup row>
        //                         <Label className="col">Competition Name</Label>
        //                         <Col sm={10}>
        //                             <Input id="example" placeholder="input competition name" value={this.state.inputCompetitionName} onChange={this.onChangeCompetitionName} />
        //                         </Col>
        //                     </FormGroup>
        //                     <FormGroup row>
        //                         <Label className="col">Date</Label>
        //                         <Col sm={10}>
        //                             <DatePicker value={this.state.inputDate} onChange={this.onChangeDate} />
        //                         </Col>
        //                     </FormGroup>
        //                     <FormGroup row>
        //                         <Label className="col">Organizer</Label>
        //                         <Col sm={10}>
        //                             <Input id="example" placeholder="input organizer name" value={this.state.inputOrganizer} onChange={this.onChangeOrganizer} />
        //                         </Col>
        //                     </FormGroup>
        //                     <FormGroup row>
        //                         <Label className="col">Location</Label>
        //                         <Col sm={10}>
        //                             <Input id="example" placeholder="input location name" value={this.state.inputLocation} onChange={this.onChangeLocation} />
        //                         </Col>
        //                     </FormGroup>
        //                     <FormGroup row>
        //                         <Label className="col">Scales</Label>
        //                         <Col sm={10}>
        //                             <select className="form-select"
        //                                 value={this.state.inputScales}
        //                                 onChange={this.onChangeScales} >
        //                                 {
        //                                     this.state.inputScales.map(scales => {
        //                                         return <option key={scales} value={scales}>{scales}</option>
        //                                     })
        //                                 }
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
        //                 <h4 className="manageuser">Manage Data Competition</h4>
        //             </div>

        //             <div className="container card" id="form">
        //                 <Form className="form-create container" onSubmit={this.onSubmit}>
        //                     <h3 className="headline-login">Edit Competition</h3>
        //                     <FormGroup row>
        //                         <Label className="col">Competition Name</Label>
        //                         <Col sm={10}>
        //                             <Input id="example" placeholder="input competition name" value={this.state.inputCompetitionName} onChange={this.onChangeCompetitionName} />
        //                         </Col>
        //                     </FormGroup>
        //                     <FormGroup row>
        //                         <Label className="col">Date</Label>
        //                         <Col sm={10}>
        //                             <DatePicker value={this.state.inputDate} onChange={this.onChangeDate} />
        //                         </Col>
        //                     </FormGroup>
        //                     <FormGroup row>
        //                         <Label className="col">Organizer</Label>
        //                         <Col sm={10}>
        //                             <Input id="example" placeholder="input organizer name" value={this.state.inputOrganizer} onChange={this.onChangeOrganizer} />
        //                         </Col>
        //                     </FormGroup>
        //                     <FormGroup row>
        //                         <Label className="col">Location</Label>
        //                         <Col sm={10}>
        //                             <Input id="example" placeholder="input location name" value={this.state.inputLocation} onChange={this.onChangeLocation} />
        //                         </Col>
        //                     </FormGroup>
        //                     <FormGroup row>
        //                         <Label className="col">Scales</Label>
        //                         <Col sm={10}>
        //                             <select className="form-select"
        //                                 value={this.state.inputScales}
        //                                 onChange={this.onChangeScales} >
        //                                 {
        //                                     this.state.inputScales.map(scales => {
        //                                         return <option key={scales} value={scales}>{scales}</option>
        //                                     })
        //                                 }
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
                    <h4 className="manageuser">Manage Data Competition</h4>
                </div>

                <div className="container card" id="form">
                    <Form className="form-create container" onSubmit={this.onSubmit}>
                        <h3 className="headline-login">Edit Competition</h3>
                        <FormGroup row>
                            <Label className="col">Competition Name</Label>
                            <Col sm={10}>
                                <Input id="example" placeholder="input competition name" value={this.state.inputCompetitionName} onChange={this.onChangeCompetitionName} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className="col">Date</Label>
                            <Col sm={10}>
                                <DatePicker value={this.state.inputDate} onChange={this.onChangeDate} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className="col">Organizer</Label>
                            <Col sm={10}>
                                <Input id="example" placeholder="input organizer name" value={this.state.inputOrganizer} onChange={this.onChangeOrganizer} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className="col">Location</Label>
                            <Col sm={10}>
                                <Input id="example" placeholder="input location name" value={this.state.inputLocation} onChange={this.onChangeLocation} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className="col">Scales</Label>
                            <Col sm={10}>
                                <select className="form-select"
                                    value={this.state.inputScales}
                                    onChange={this.onChangeScales} >
                                    {
                                        this.state.inputScales.map(scales => {
                                            return <option key={scales} value={scales}>{scales}</option>
                                        })
                                    }
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

// export default connect(mapStateToProps, { onLogoutUser })(Editcompetition)
export default Editcompetition