import React, { useState } from 'react';

import { useDispatch } from './store';
import { useFlasher } from './utils';

const NewCard: React.FC = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const addCard = () => {
        dispatch({ type: 'ADD_CARD', title: text });
        setText('');
    };
    return (
        <li ref={useFlasher()}>
            <input
                value={text}
                placeholder="Enter title..."
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={addCard}>Add</button>
        </li>
    );
};

export default React.memo(NewCard);