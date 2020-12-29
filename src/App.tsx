import React, {useState,useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/header';
import { Main } from './components/main';
import { Footer } from './components/footer';
import { E_header } from './components/e_header';
import Login from "./login";
import Sample from "./components/sample";
import { Provider } from './components/store';

export default function App() {
    const isLoggedIn = Boolean(window.localStorage.getItem('isLoggedIn'));

    return (
        <Provider>
            <Router>
                <Switch>
                    <Route path='/login'>
                        <Login_page />
                    </Route>
                    {!isLoggedIn && <Redirect to='/login' />}
                    <Redirect exact from='/' to='/home' />
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </Provider>
    );
}
function Home() {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
}
function About() {
    return (
        <>
            <Header />
            <Footer />
        </>
    );
}
function Login_page() {
    return (
        <>
            <E_header />
            <Login />
        </>
    );
}
