import "./App.css";
import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter as Switch, Routes, Route } from "react-router-dom";
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Router>
//           <NavBar />
//           <Switch>
//            <Route exact path="/" element = {<News pageSize = {5} country = "in" category = "general"/>}/>
//            <Route exact path="/business" element = {<News pageSize = {5} country = "in" category = "business"/>}/>
//            <Route exact path="/science" element = {<News pageSize = {5} country = "in" category = "science"/>}/>
//            <Route exact path="/sports" element = {<News pageSize = {5} country = "in" category = "sports"/>}/>
//            <Route exact path="/entertainment" element = {<News pageSize = {5} country = "in" category = "entertainment"/>}/>
//            <Route exact path="/health" element = {<News pageSize = {5} country = "in" category = "health"/>}/>
//            <Route exact path="/technology" element = {<News pageSize = {5} country = "in" category = "technology"/>}/>
//            <Route exact path="/general" element = {<News pageSize = {5} country = "in" category = "general"/>}/>
//           </Switch>
//         </Router>
//       </div>
//     );
//   }
// }


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        <Switch>
          <Route path="/" element={< News  key='general' pageSize={8} country="in" category="general"/>}></Route>
          <Route path="/Business" element={ <News key='business'  pageSize={8} country="in" category="business"/>}></Route>
          <Route path="/Entertainment" element={<News key='entertainment'  pageSize={8} country="in" category="entertainment"/>}></Route>
          <Route path="/General" element={ <News key='general'  pageSize={8} country="in" category="general"/>}></Route>
          <Route path="/Health" element={ <News key='health'  pageSize={8} country="in" category="health"/>}></Route>
          <Route path="/Science" element={ <News key='science'  pageSize={8} country="in" category="science"/>}></Route>
          <Route path="/Sports" element={ <News key='sports'  pageSize={8} country="in" category="sports"/>}></Route>
          <Route path="/Technology" element={ <News  key='technology}>' pageSize={8} country="in" category="technology"/>}></Route>

        </Switch>
        </Router>
      </div>
    )
  }
}


// 2a34e0be195f409dbb266aec1d2f224c
