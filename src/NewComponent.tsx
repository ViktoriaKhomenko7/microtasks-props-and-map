import React from 'react';

type NewComponentType = {
    students: StudentsType[]
}

type StudentsType = {
    id: number
    name: string
    age: number
}

export const NewComponent = (props: NewComponentType) => {
    return (
           <ul>
               {props.students.map((objectFromStudentsArray)=>{
                   return (
                       <li key={objectFromStudentsArray.id}>
                           <span>{objectFromStudentsArray.name}</span>
                           <span> age: {objectFromStudentsArray.age}</span>
                       </li>
                   )
               })}
           </ul>
    );
};