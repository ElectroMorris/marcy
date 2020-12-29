import React from 'react';

import { Provider } from './store';
import CardList from './CardList';

const Sample: React.FC = () => (
    <Provider>
        <CardList />
    </Provider>
);

export default Sample;