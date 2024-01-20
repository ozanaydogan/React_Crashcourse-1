// ilk constructor --> state initialization
// render metodu ilk defa calisti
// onClick eventi çalıştı
// setState state nesnesini guncelledi --> triggered render
// render metodu guncel JSX i sayfada gosteriyor

import React from 'react';
import Card from './Card';
import { useState } from 'react';

const Collapse = () => { 

    const [show,setShow] = useState(false)

    const button_ = () => {
        setShow(prev => prev == false ? true : false);
    }

        return (
            <div>
                <button type='button' onClick={button_}>buttonNaME</button>
                {show && <Card></Card>}
            </div>
        );
    
};

export default Collapse;