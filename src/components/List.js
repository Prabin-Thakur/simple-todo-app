import React from 'react';
import close from './images/close.svg';

const List = (props) => {
    const renderedList = props.list.map((value,index) => {
            return <li key={index}>
                        <div onClick={() => props.deleted(index)} className="image_container2">
                            <img className="image2" src={close} alt="close"></img>
                        </div>
                        <div className="list_texts">{value}</div>
                    </li>
    });

    return(
        <div className="list">
           {renderedList}
        </div>
    );
};

export default List;