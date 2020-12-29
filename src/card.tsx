import React from 'react';
import { faTrashAlt,faRedo,faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {CardType, useDispatch} from "./components/store";

interface IProps extends CardType {}

export const Card: React.FC<IProps> = ({ id, title,  completed, description, price }) => {
    const dispatch = useDispatch();
    const delCard = () => {
        dispatch({ type: 'DELETE_CARD', id: id });
    };
    const toggleCard = () => dispatch({ type: 'TOGGLE_CARD', id })

    return (
        <div className="col-md-4">
            <div className="card mb-4 box-shadow">
                <img
                    className="card-img-top"
                    src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-gift-wrapping-ideas-candy-1576705635.jpg?crop=0.670xw:1.00xh;0.212xw,0&resize=640:*"
                    alt="Card"
                />
                <div className="card-body">
                    <strong>Name</strong> <br/>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-secondary" type="button" id="button-addon1">Generate
                            </button>
                        </div>
                        <input type="text" className="form-control" placeholder="" value={title}
                               aria-label="Example text with button addon" aria-describedby="button-addon1" />
                    </div>
                    <p className="card-text">
                        <strong>Description </strong>
                        <br/>
                        <div className="input-group">
                            <div className="input-group-prepend">
                            </div>
                            <textarea className="form-control" placeholder="Write something..."></textarea>
                        </div>
                    </p>
                    <strong>Price</strong>
                    <br/>
                    <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">$</span>
                        </div>
                        <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>
                        <div className="input-group-append">
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-danger"
                                onClick={delCard}
                            >
                                <div>
                                    <FontAwesomeIcon icon={faTrashAlt}/> Delete
                                </div>
                            </button>
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                            >
                                <div>
                                    <FontAwesomeIcon icon={faRedo}/> Reswap
                                </div>
                            </button>
                            <br/>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={completed}
                                    id={`completion_${id}`}
                                    onChange={toggleCard}
                                />
                                <label className="form-check-label" htmlFor={`completion_${id}`}>
                                    Want it!
                                </label>
                            </div>
                            {/*<button*/}
                            {/*    type="button"*/}
                            {/*    className="btn btn-sm btn-outline-primary"*/}
                            {/*    onClick={toggleCard}*/}
                            {/*>*/}
                            {/*    <div>*/}
                            {/*        <FontAwesomeIcon icon={faPlus}/> To List*/}
                            {/*    </div>*/}
                            {/*</button>*/}
                        </div>
                        <small className="text-muted">
                            <text>Sample</text>
                        </small>
                    </div>
                </div>
            </div>
        </div>
    );
};