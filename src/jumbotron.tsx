import React, {useState} from 'react';
import { Button, Collapse } from 'react-bootstrap';

export const Jumbotron = () => {
    const [open, setOpen] = useState(false);
    return (
        <section className="jumbotron text-center mb-0 bg-light">
            <div className="container">
                <h1 className="jumbotron-heading">Helping people to make best gift-choice</h1>
                <p className="lead text-muted">
                    This text makes no sense more than just filling the subtitle, cause an author have no creativity at all :)
                </p>
                <p>
                    <a href="#"
                       className="btn btn-primary m-2"
                       onClick={() => setOpen(!open)}
                       aria-controls="example-collapse-text"
                       aria-expanded={open}
                    > Hide | Open Hint</a>
                    <a href="#"
                       className="btn btn-secondary m-2">
                        Copy link</a>
                </p>
                <Collapse in={open}>

                    <div className="text-center" id="example-collapse-text">
                        <strong>Let's be Frank. Here the list of what's done:</strong>
                        <br/>
                        <ul className="list-group">
                            <li className="list-group-item">Authorization</li>
                            <li className="list-group-item">Create, Read and Delete (without saving update)</li>
                            <li className="list-group-item">Bootstrap and Routing</li>
                        </ul>
                    </div>
                </Collapse>
            </div>
        </section>
    );
};