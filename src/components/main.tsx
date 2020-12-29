import React from 'react';

import { Jumbotron } from '../jumbotron';
import { Card } from '../card';
import { useDispatch, useTrackedState } from './store';

let n = 666;

export const Main = () => {
    const state = useTrackedState();
    const dispatch = useDispatch();
    const addCard = () => dispatch({ type: 'ADD_CARD', title: 'title_' + n++ })

    return (
        <main role="main">
            <Jumbotron />
            <div className="album py-5 bg-light">
                <strong>
                    <h1 className="jumbotron-heading text-center">Your Recommendations</h1>
                </strong>
                <div className="container">
                    <button type="button" className="btn btn-success btn-lg btn-block" onClick={addCard}>
                        Get a new Card!
                    </button>
                    <br/>
                    <div className="row">
                        {state.cards.map(card => (
                            <Card {...card} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};