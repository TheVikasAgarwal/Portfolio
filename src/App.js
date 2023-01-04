import React from "react";

import "./App.css";
import Blog from "./Components/Blog/Blog";
import { BrowserRouter, Switch, Route, Redirect, HashRouter } from "react-router-dom";
import SingleBlog from "./Components/SingleBlog/SingleBlog";
import Layout from "./Components/Menubar/Layout/Layout";
import Footer from "./Components/Footer/Footer";
import Stars from '../src/utils/Stars.js';
// import "./styles.css";

function App() {
  return (
    <div className="App">
      <HashRouter >
        <Layout />
        <Switch>
          <Route path="/:id" exact component={SingleBlog}></Route>
          <Route path="/" exact component={Blog}></Route>
        </Switch>
        <Footer />
     </HashRouter> 
    </div>
  );
}


export default App;
