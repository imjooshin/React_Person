import React from 'react'

function Person(props){
    return <div>
        <h1>{props.name}</h1>
        <p>Age: {props.age}</p>
        <p>Weight: {props.weight}</p>
        <p>Height: {props.height}</p>
    </div>

}

export default Person;