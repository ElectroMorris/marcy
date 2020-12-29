import React from 'react';

import { useDispatch, useTrackedState } from './store';
import Card from './Card';
import NewCard from './NewCard';

const CardList: React.FC = () => {
    const dispatch = useDispatch();
    const state = useTrackedState();
    const setQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'SET_QUERY', query: event.target.value });
    };
    return (
        <div>
            <ul>
                {state.cards.map(({ id, title, completed }) => (
                    <Card key={id} id={id} title={title} completed={completed} />
                ))}
                <NewCard />
            </ul>
            <div>
                Highlight Query for incomplete items:
                <input value={state.query} onChange={setQuery} />
            </div>
        </div>
    );
};

export default CardList;