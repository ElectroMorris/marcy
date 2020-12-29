import { useReducer } from 'react';
import { createContainer } from 'react-tracked';

export type CardType = {
    id: number;
    title: string;
    price?: number;
    description?: string;
    completed?: boolean;
};

type State = {
    cards: CardType[];
    query: string;
};

type Action =
    | { type: 'ADD_CARD'; title: string, description?: string, price?: number, completed?: boolean }
    | { type: 'DELETE_CARD'; id: number }
    | { type: 'TOGGLE_CARD'; id: number }
    | { type: 'SET_QUERY'; query: string };

const initialState: State = {
    cards: [
        {
            id: 1,
            title: 'Laptop',
            price: 2890,
            description: 'SampleTextString',
            completed: true
        },
        {
            id: 2,
            title: 'Console',
            price: 1415,
            description: 'SampleTextString',
            completed: true
        },
        {
            id: 3,
            title: 'Fan',
            price: 364,
            description: 'SampleTextString',
            completed: false
        }
    ],
    query: '',
};

let nextId = 4;

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'ADD_CARD':
            return {
                ...state,
                cards: [...state.cards, { id: nextId++, title: action.title, description: action.description, price: action.price }],
            };
        case 'DELETE_CARD':
            return {
                ...state,
                cards: state.cards.filter((card) => card.id !== action.id),
            };
        case 'TOGGLE_CARD':
            return {
                ...state,
                cards: state.cards.map((card) =>
                    card.id === action.id
                        ? { ...card, completed: !card.completed }
                        : card,
                ),
            };
        case 'SET_QUERY':
            return {
                ...state,
                query: action.query,
            };
        default:
            return state;
    }
};

const useValue = () => useReducer(reducer, initialState);

export const {
    Provider,
    useTrackedState,
    useUpdate: useDispatch,
} = createContainer(useValue);