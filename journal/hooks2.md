A way for react to bring in a function and call it.


## Froms in React
import React from 'react'

function Form(props){
    const submitf=(e)=>:> {}
    const onChange = (e) => {}


    return (
        <form onSubmit ={onSubmit}>
            <input name="food> placeholder="Name Food"
            onChange={onchange}/>
            <inpuot name="calories" type="number' onchange={onChange}/>
            <button type="sumbint">>Save food</button>
     
    )
}

export default Form

- we use onChange with forms
- we use onSubmit with forms
- both these functions execute functions when user makes a change or a submit

get form
get initial get
then get the post