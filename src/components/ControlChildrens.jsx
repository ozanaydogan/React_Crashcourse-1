import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Card from './Card';

const ControlChildrens = () => {
    const myRef = useRef("");

    return (
        <>
        <Card ref={myRef} />
        <hr />
        <div>
            <button type="button" onClick={myRef.current.changeFirstCard}>
            buton1
            </button>
            <button type="button" onClick={myRef.current.changeSecondCard}>
            buton2 
            </button>
            <button type="button" onClick={myRef.current.changeThirdCard}>
            buton3
            </button>
        </div>
        </>
    )
}

export default ControlChildrens