import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
// import Home from './pages/home'
import Login from './pages/login';
import Homepage from './pages/homepage'
import Manageuser from './pages/manageuser'
import Createnewuser from './pages/createnewuser'
import Edituser from './pages/edituser'
import Managemasterdata from './pages/managemasterdata'
import Masterdataauthor from './pages/masterdataauthor'
import Addnewauthor from './pages/addnewauthor'
import Editauthordata from './pages/editauthordata'
import Masterdataadvisor from './pages/masterdataadvisor'
import Addnewadvisor from './pages/addnewadvisor'
import Editadvisordata from './pages/editadvisordata'
import Masterdatafield from './pages/masterdatafield'
import Addnewfield from './pages/addnewfield'
import Editfielddata from './pages/editfielddata'
import Masterdatatopic from './pages/masterdatatopic'
import Addnewtopic from './pages/addnewtopic'
import Edittopic from './pages/edittopic'
import Masterdatascales from './pages/masterdatascales'
import Addnewscales from './pages/addnewscales'
import Editscales from './pages/editscales'
import Masterdatacompetition from './pages/masterdatacompetition'
import Addnewcompetition from './pages/addnewcompetition'
// import Asal from './pages/asal'
import Editcompetition from './pages/editcompetition'
import Managescientificpaper from './pages/managescientificpaper'
import Uploadscientificpaper from './pages/uploadscientificpaper'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/homepage" component={Homepage} />
        <Route path="/login" component={Login} />
        <Route path="/managemasterdata" component={Managemasterdata} />
        <Route path="/manageuser" component={Manageuser} />
        <Route path="/createnewuser" component={Createnewuser} />
        <Route path="/edituser" component={Edituser} />
        <Route path="/masterdataauthor" component={Masterdataauthor} />
        <Route path="/addnewauthor" component={Addnewauthor} />
        <Route path="/editauthordata" component={Editauthordata} />
        <Route path="/masterdataadvisor" component={Masterdataadvisor} />
        <Route path="/addnewadvisor" component={Addnewadvisor} />
        <Route path="/editadvisordata" component={Editadvisordata} />
        <Route path="/masterdatafield" component={Masterdatafield} />
        <Route path="/addnewfield" component={Addnewfield} />
        <Route path="/editfielddata" component={Editfielddata} />
        <Route path="/masterdatatopic" component={Masterdatatopic} />
        <Route path="/addnewtopic" component={Addnewtopic} />
        <Route path="/edittopic" component={Edittopic} />
        <Route path="/masterdatascales" component={Masterdatascales} />
        <Route path="/addnewscales" component={Addnewscales} />
        <Route path="/editscales" component={Editscales} />
        <Route path="/masterdatacompetition" component={Masterdatacompetition} />
        <Route path="/addnewcompetition" component={Addnewcompetition} />
        <Route path="/editcompetition" component={Editcompetition} />
        <Route path="/managescientificpaper" component={Managescientificpaper} />
        <Route path="/uploadscientificpaper" component={Uploadscientificpaper} />
        {/* <Route path="/asal" component={Asal} /> */}
      </BrowserRouter>
    )
  }
}

export default App;
