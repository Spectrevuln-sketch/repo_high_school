import React, { Component } from 'react'
import './uploadscientificpaper.css'
import { Button, Form, FormGroup, Label, Input, FormText, Col, ButtonGroup } from 'reactstrap';
import axios from 'axios'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import { NavLink } from 'react-router-dom'
import { onLogoutUser } from '../redux/action'
import DatePicker from 'react-date-picker';


class Uploadscientificpaper extends Component {

    state = {
        inputDate: new Date(),
        inputTitle: '',
        inputAuthor: [],
        author: '',
        inputAdvisor: [],
        advisor: '',
        inputField: [],
        field: '',
        inputTopic: [],
        topic: '',
        inputCompetition: [],
        competition: '',
        inputPlacement: '',
        inputAbstract: '',
        inputFile: null
    }


    handleDate = (e) => {
        console.log(e);
        this.setState({
            inputDate: e
        })
    }

    onBtnRegister = () => {
        if (
            !this.state.inputAbstract || !this.state.inputAdvisor || !this.state.inputAuthor || !this.state.inputCompetition
            || !this.state.inputDate || !this.state.inputFile || !this.state.inputPlacement || !this.state.inputTitle || !this.state.inputTopic
            || !this.state.inputField
        ) {
            Swal.fire('Invalid', 'Harap isi semua form', 'error')
        } else {
            if (this.state.inputAbstract && this.state.inputAdvisor && this.state.inputAuthor && this.state.inputCompetition && this.state.inputDate
                && this.state.inputField && this.state.inputFile && this.state.inputPlacement && this.state.inputTitle && this.state.inputTopic) {
                axios.post('url', {
                    abstract: this.state.inputAbstract,
                    advisor: this.state.advisor,
                    author: this.state.author,
                    competition: this.state.competition,
                    uploaddate: this.state.inputDate,
                    field: this.state.field,
                    file: this.state.inputFile,
                    placement: this.state.inputPlacement,
                    title: this.state.inputTitle,
                    topic: this.state.topic
                }).then(res => {
                    if (res.data.status === '200') {
                        Swal.fire('Registered!', res.data.message, 'success')
                    } else if (res.data.status === '500') {
                        Swal.fire('invalid!', res.data.message, 'error')
                    }
                }).catch(err => {
                    console.log(err);
                })
                Swal.fire('Registered!', 'Paper has been registered', 'success')
            }
        }
    }

    onFileChange = (e) => {
        // Update the state
        this.setState({
            inputFile: e.target.files[0]
        })
    }

    onFileUpload = () => {
        // Create an object of formData
        const formData = new FormData()

        // Update formData object
        formData.append(
            "myFile",
            this.state.inputFile,
            this.state.inputFile.name
        )

        console.log(this.state.inputFile);

        // Request ke backend api
        // Kirim formData object
        axios.post('url', formData)
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
        //                 <h4 className="manageuser">Manage Scientific Paper</h4>
        //             </div>

        //             <div className="container card" id="form">
        //                 <Form className="form-create container">
        //                     <h3 className="headline-login my-5">Upload New Paper</h3>
        //                     <FormGroup row>
        //                         <Label className="col" id="studentname">Upload Date</Label>
        //                         <Col sm={10}>
        //                             <DatePicker format="y-MM-dd" value={this.state.inputDate} onChange={this.handleDate} id="example" placeholder="input date" />
        //                         </Col>
        //                     </FormGroup>
        //                     <FormGroup row>
        //                         <Label className="col">Title</Label>
        //                         <Col sm={10}>
        //                             <Input placeholder="Input title" id="example" onChange={e => this.setState({ inputTitle: e.target.value })} />
        //                         </Col>
        //                     </FormGroup>
        //                     <FormGroup row>
        //                         <Label className="col">Author</Label>
        //                         <Col sm={10}>
        //                             <select class="form-select"
        //                                 value={this.state.author}
        //                                 onChange={e => this.setState({ author: e.target.value })} >
        //                                 {
        //                                     this.state.author.map(authors => {
        //                                         return <option key={authors} value={authors}>{authors}</option>
        //                                     })
        //                                 }
        //                             </select>
        //                         </Col>
        //                     </FormGroup>
        //                     <FormGroup row>
        //                         <Label className="col">Advisor</Label>
        //                         <Col sm={10}>
        //                             <select class="form-select"
        //                                 value={this.state.advisor}
        //                                 onChange={e => this.setState({ advisor: e.target.value })} >
        //                                 {
        //                                     this.state.advisor.map(advisors => {
        //                                         return <option key={advisors} value={advisors}>{advisors}</option>
        //                                     })
        //                                 }
        //                             </select>
        //                         </Col>
        //                     </FormGroup>
        //                     <FormGroup row>
        //                         <Label className="col">Field</Label>
        //                         <Col sm={10}>
        //                             <select class="form-select"
        //                                 value={this.state.field}
        //                                 onChange={e => this.setState({ field: e.target.value })} >
        //                                 {
        //                                     this.state.field.map(fields => {
        //                                         return <option key={fields} value={fields}>{fields}</option>
        //                                     })
        //                                 }
        //                             </select>
        //                         </Col>
        //                     </FormGroup>
        //                     <FormGroup row>
        //                         <Label className="col">Topic</Label>
        //                         <Col sm={10}>
        //                             <select class="form-select"
        //                                 value={this.state.topic}
        //                                 onChange={e => this.setState({ topic: e.target.value })} >
        //                                 {
        //                                     this.state.topic.map(topics => {
        //                                         return <option key={topics} value={topics}>{topics}</option>
        //                                     })
        //                                 }
        //                             </select>
        //                         </Col>
        //                     </FormGroup>
        //                     <FormGroup row>
        //                         <Label className="col">Competition</Label>
        //                         <Col sm={10}>
        //                             <select class="form-select"
        //                                 value={this.state.competition}
        //                                 onChange={e => this.setState({ competition: e.target.value })} >
        //                                 {
        //                                     this.state.competition.map(competitions => {
        //                                         return <option key={competitions} value={competitions}>{competitions}</option>
        //                                     })
        //                                 }
        //                             </select>
        //                         </Col>
        //                     </FormGroup>
        //                     <FormGroup row>
        //                         <Label className="col">Placement</Label>
        //                         <Col sm={10}>
        //                             <Input placeholder="Input placement" id="example" onChange={e => this.setState({ inputPlacement: e.target.value })} />
        //                         </Col>
        //                     </FormGroup>
        //                     <FormGroup row>
        //                         <Label className="col">Abstract</Label>
        //                         <Col sm={10}>
        //                             <Input placeholder="Input abstract" id="example" onChange={e => this.setState({ inputAbstract: e.target.value })} />
        //                         </Col>
        //                     </FormGroup>
        //                     <FormGroup row>
        //                         <Label className="col">Upload File</Label>
        //                         <Col sm={10}>
        //                             <Input type="file" placeholder="Select file" id="example" onChange={this.onFileChange} />
        //                             <button className="btn btn-success" onClick={this.onFileUpload}>Upload</button>
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
        //                     <h6>Hello, Teacher</h6>
        //                     <button onClick={this.props.onLogoutUser} className="btn btn-dark" id="btn-logout">Log Out</button>
        //                 </div>
        //             </nav>

        //             <div className="mt-5">
        //                 <h4 className="manageuser">Manage Scientific Paper</h4>
        //             </div>

        //             <div className="container card" id="form">
        //                 <Form className="form-create container">
        //                     <h3 className="headline-login my-5">Upload New Paper</h3>
        //                     <FormGroup row>
        //                         <Label className="col" id="studentname">Upload Date</Label>
        //                         <Col sm={10}>
        //                             <DatePicker format="y-MM-dd" value={this.state.inputDate} onChange={this.handleDate} id="example" placeholder="input date" />
        //                         </Col>
        //                     </FormGroup>
        //                     <FormGroup row>
        //                         <Label className="col">Title</Label>
        //                         <Col sm={10}>
        //                             <Input placeholder="Input title" id="example" onChange={e => this.setState({ inputTitle: e.target.value })} />
        //                         </Col>
        //                     </FormGroup>
        //                     <FormGroup row>
        //                         <Label className="col">Author</Label>
        //                         <Col sm={10}>
        //                             <select class="form-select"
        //                                 value={this.state.author}
        //                                 onChange={e => this.setState({ author: e.target.value })} >
        //                                 {
        //                                     this.state.author.map(authors => {
        //                                         return <option key={authors} value={authors}>{authors}</option>
        //                                     })
        //                                 }
        //                             </select>
        //                         </Col>
        //                     </FormGroup>
        //                     <FormGroup row>
        //                         <Label className="col">Advisor</Label>
        //                         <Col sm={10}>
        //                             <select class="form-select"
        //                                 value={this.state.advisor}
        //                                 onChange={e => this.setState({ advisor: e.target.value })} >
        //                                 {
        //                                     this.state.advisor.map(advisors => {
        //                                         return <option key={advisors} value={advisors}>{advisors}</option>
        //                                     })
        //                                 }
        //                             </select>
        //                         </Col>
        //                     </FormGroup>
        //                     <FormGroup row>
        //                         <Label className="col">Field</Label>
        //                         <Col sm={10}>
        //                             <select class="form-select"
        //                                 value={this.state.field}
        //                                 onChange={e => this.setState({ field: e.target.value })} >
        //                                 {
        //                                     this.state.field.map(fields => {
        //                                         return <option key={fields} value={fields}>{fields}</option>
        //                                     })
        //                                 }
        //                             </select>
        //                         </Col>
        //                     </FormGroup>
        //                     <FormGroup row>
        //                         <Label className="col">Topic</Label>
        //                         <Col sm={10}>
        //                             <select class="form-select"
        //                                 value={this.state.topic}
        //                                 onChange={e => this.setState({ topic: e.target.value })} >
        //                                 {
        //                                     this.state.topic.map(topics => {
        //                                         return <option key={topics} value={topics}>{topics}</option>
        //                                     })
        //                                 }
        //                             </select>
        //                         </Col>
        //                     </FormGroup>
        //                     <FormGroup row>
        //                         <Label className="col">Competition</Label>
        //                         <Col sm={10}>
        //                             <select class="form-select"
        //                                 value={this.state.competition}
        //                                 onChange={e => this.setState({ competition: e.target.value })} >
        //                                 {
        //                                     this.state.competition.map(competitions => {
        //                                         return <option key={competitions} value={competitions}>{competitions}</option>
        //                                     })
        //                                 }
        //                             </select>
        //                         </Col>
        //                     </FormGroup>
        //                     <FormGroup row>
        //                         <Label className="col">Placement</Label>
        //                         <Col sm={10}>
        //                             <Input placeholder="Input placement" id="example" onChange={e => this.setState({ inputPlacement: e.target.value })} />
        //                         </Col>
        //                     </FormGroup>
        //                     <FormGroup row>
        //                         <Label className="col">Abstract</Label>
        //                         <Col sm={10}>
        //                             <Input placeholder="Input abstract" id="example" onChange={e => this.setState({ inputAbstract: e.target.value })} />
        //                         </Col>
        //                     </FormGroup>
        //                     <FormGroup row>
        //                         <Label className="col">Upload File</Label>
        //                         <Col sm={10}>
        //                             <Input type="file" placeholder="Select file" id="example" onChange={this.onFileChange} />
        //                             <button className="btn btn-success" onClick={this.onFileUpload}>Upload</button>
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
                    <h4 className="manageuser">Manage Scientific Paper</h4>
                </div>

                <div className="container card" id="form">
                    <Form className="form-create container">
                        <h3 className="headline-login my-5">Upload New Paper</h3>
                        <FormGroup row>
                            <Label className="col" id="studentname">Upload Date</Label>
                            <Col sm={10}>
                                <DatePicker format="y-MM-dd" value={this.state.inputDate} onChange={this.handleDate} id="example" placeholder="input date" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className="col">Title</Label>
                            <Col sm={10}>
                                <Input placeholder="Input title" id="example" onChange={e => this.setState({ inputTitle: e.target.value })} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className="col">Author</Label>
                            <Col sm={10}>
                                <select class="form-select"
                                    value={this.state.author}
                                    onChange={e => this.setState({ author: e.target.value })} >
                                    {
                                        this.state.author.map(authors => {
                                            return <option key={authors} value={authors}>{authors}</option>
                                        })
                                    }
                                </select>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className="col">Advisor</Label>
                            <Col sm={10}>
                                <select class="form-select"
                                    value={this.state.advisor}
                                    onChange={e => this.setState({ advisor: e.target.value })} >
                                    {
                                        this.state.advisor.map(advisors => {
                                            return <option key={advisors} value={advisors}>{advisors}</option>
                                        })
                                    }
                                </select>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className="col">Field</Label>
                            <Col sm={10}>
                                <select class="form-select"
                                    value={this.state.field}
                                    onChange={e => this.setState({ field: e.target.value })} >
                                    {
                                        this.state.field.map(fields => {
                                            return <option key={fields} value={fields}>{fields}</option>
                                        })
                                    }
                                </select>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className="col">Topic</Label>
                            <Col sm={10}>
                                <select class="form-select"
                                    value={this.state.topic}
                                    onChange={e => this.setState({ topic: e.target.value })} >
                                    {
                                        this.state.topic.map(topics => {
                                            return <option key={topics} value={topics}>{topics}</option>
                                        })
                                    }
                                </select>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className="col">Competition</Label>
                            <Col sm={10}>
                                <select class="form-select"
                                    value={this.state.competition}
                                    onChange={e => this.setState({ competition: e.target.value })} >
                                    {
                                        this.state.competition.map(competitions => {
                                            return <option key={competitions} value={competitions}>{competitions}</option>
                                        })
                                    }
                                </select>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className="col">Placement</Label>
                            <Col sm={10}>
                                <Input placeholder="Input placement" id="example" onChange={e => this.setState({ inputPlacement: e.target.value })} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className="col">Abstract</Label>
                            <Col sm={10}>
                                <Input placeholder="Input abstract" id="example" onChange={e => this.setState({ inputAbstract: e.target.value })} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className="col">Upload File</Label>
                            <Col sm={10}>
                                <Input type="file" placeholder="Select file" id="example" onChange={this.onFileChange} />
                                <button className="btn btn-success" onClick={this.onFileUpload}>Upload</button>
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
//         user_role: state.auth.role,
//     }
// }

// export default connect(mapStateToProps, { onLogoutUser })(Uploadscientificpaper)
export default Uploadscientificpaper