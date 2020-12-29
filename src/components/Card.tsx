import React from 'react';
import { useDispatch, useTrackedState, CardType } from './store';
import { useFlasher } from './utils';

const renderHighlight = (title: string, query: string) => {
    if (!query) return title;
    const index = title.indexOf(query);
    if (index === -1) return title;
    return (
        <>
            {title.slice(0, index)}
            <b>{query}</b>
            {title.slice(index + query.length)}
        </>
    );
};

type Props = CardType;

const Card: React.FC<Props> = ({ id, title, completed, price, description }) => {
    const dispatch = useDispatch();
    const state = useTrackedState();
    const delCard = () => {
        dispatch({ type: 'DELETE_CARD', id });
    };
    return (
        <li ref={useFlasher()}>
            <input
                type="checkbox"
                checked={!!completed}
                onChange={() => dispatch({ type: 'TOGGLE_CARD', id })}
            />
            <span
                style={{
                    textDecoration: completed ? 'line-through' : 'none',
                }}
            >
                {completed ? title : renderHighlight(title, state.query)}
            </span>
            <button onClick={delCard}>Delete</button>
        </li>
    );
};

export default React.memo(Card);