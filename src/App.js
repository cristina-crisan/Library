import './App.scss';
import React, { Component, Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from "./components/nav-bar/NavBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Books from "./components/books/Books";
import NotFound from "./components/NotFound";
import BookDetails from './components/book-details/BookDetails';
import Favorite from './components/Favorite';
import BookForm from './components/book-form/BookForm';
import Footer from './components/footer/Footer';
class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/books/:id" component={BookDetails}></Route>
            <Route path="/edit-book/:id" component={BookForm}></Route>
            <Route path="/books" component={Books}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/favorite" component={Favorite}></Route>
            <Route path="/new-book" component={BookForm}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/" exact to="/books"/>
            <Redirect to="/not-found"/>
          </Switch>
        </div>
<Footer/>
      </Fragment>
    );
  }
}

export default App;
