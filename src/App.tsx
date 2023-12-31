import React from 'react';
import './App.css';
// import {Header} from "./site/Header";
// import {Body} from "./site/Body";
// // import {Footer} from "./site/Footer";
import {NewComponent} from "./NewComponent";

function App() {

    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]

    // const students = [
    //     {id: 1, name: "James", age: 8},
    //     {id: 2, name: "Robert", age: 18},
    //     {id: 3, name: "John", age: 28},
    //     {id: 4, name: "Michael", age: 38},
    //     {id: 5, name: "William", age: 48},
    //     {id: 6, name: "David", age: 58},
    //     {id: 7, name: "Richard", age: 68},
    //     {id: 8, name: "Joseph", age: 78},
    //     {id: 9, name: "Thomas", age: 88},
    //     {id: 10, name: "Charles", age: 98},
    //     {id: 11, name: "Christopher", age: 100},
    // ]

    return (
        <>
            <NewComponent topCars={topCars}/>
            {/*<NewComponent students={students}/>*/}
            {/*<Header title={"New header"}/>*/}
            {/*<Body title={"New body"}/>*/}
            {/*<Footer title={"New footer"}/>*/}
        </>
    )
}

export default App;
