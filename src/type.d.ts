export interface ICard {
    _id: string
    name: string
    description: string
    status: boolean
    createdAt?: string
    updatedAt?: string
}

export interface CardProps {
    card: ICard
}

export type ApiDataType = {
    message: string
    status: string
    cards: ICard[]
    card?: ICard
}

export type Element = {
    text: string,
    category: string,
    price: number,
    relevant: boolean
};

export type ToggleElement = (selectedElement: Element) => void;