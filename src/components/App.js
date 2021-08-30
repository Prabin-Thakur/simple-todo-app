import React,{useState} from 'react';
import './App.css';
import plus from './images/plus.svg';
import List from './List'

const App = () => {
    const [list, setList] = useState([]);
    const [currentText, setCurrentText] = useState("");

    const extract = (e) => {
       setCurrentText(e.target.value);
    };

    const add = () => {
        setList((oldItems) =>{
            return [...oldItems, currentText]
        });
        setCurrentText("");
    };

    const deleted = (index) => {
        setList((oldItems) => {
           return oldItems.filter((el, id) => {
               return index !== id})
        });
    };

    return(
        <div className="body">
            <div className="container">
                <h2>ToDo List</h2>
                <div className="input">
                    <input onChange={extract} className="text" type="text" placeholder="Add the items" value={currentText} />
                    <div onClick={!currentText ? null : add} className="image_container">
                        <img className="image" src={plus} alt="plus"></img>
                    </div>
                </div>
                <div className="list_container">
                    <List list={list} setList={setList} deleted={deleted}/>
                </div>
            </div>
        </div>
    );
};

export default App;