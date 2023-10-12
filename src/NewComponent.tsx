import React from 'react';

type NewComponentPropsType = {
    topCars: TopCarsType[]
}

type TopCarsType = {
    manufacturer: string
    model: string
}

export const NewComponent = (props: NewComponentPropsType) => {
    return (
        <table>
            <thead>
            <tr>
                <td>Марка</td>
                <td>Модель</td>
            </tr>
            </thead>
            <tbody>
            {props.topCars.map((objectOfTopCarsArray) => {
                return (
                    <tr key={objectOfTopCarsArray.manufacturer}>
                        <td>{objectOfTopCarsArray.manufacturer}</td>
                        <td>{objectOfTopCarsArray.model}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}


// type NewComponentType = {
//     students: StudentsType[]
// }
//
// type StudentsType = {
//     id: number
//     name: string
//     age: number
// }
//
// export const NewComponent = (props: NewComponentType) => {
//     return (
//            <ul>
//                {props.students.map((objectFromStudentsArray)=>{
//                    return (
//                        <li key={objectFromStudentsArray.id}>
//                            <span>{objectFromStudentsArray.name}</span>
//                            <span> age: {objectFromStudentsArray.age}</span>
//                        </li>
//                    )
//                })}
//            </ul>
//     );
// };