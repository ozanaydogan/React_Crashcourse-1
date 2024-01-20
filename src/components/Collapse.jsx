import React, { useEffect, useRef } from 'react';

//useRef() kullanarak yaptıgim birkac deneme

const Collapse = () => {

    useEffect(()=>{
     console.log("render edildi mi?")   
    })

    const inputRef = useRef();
    console.log(inputRef)

    const typeSomething = () => {
        console.log(inputRef)
        console.log(inputRef.current) // referansı inputRef olan html elementine eriştik
        inputRef.current.value = inputRef.current.value + "ozan"
        console.log(inputRef.current.value)
    }

    const changedtext = (e) => {
        console.log(e.target); // event hangi html elementinde gerçekleşti?
        console.log(e.target.value); // eventin gerçekleştiği html elementinin value değeri
        
    }

    return (
        <>
        <input type="text" ref={inputRef} id="i_1" onChange={changedtext} />
        <button type='button' onClick={typeSomething}>
            Button
        </button>
        </>
    );

};

export default Collapse;