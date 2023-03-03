import React, { createContext, useState } from 'react';

export const ModalContext = createContext({});

const ModalProvider = (props) => {
    const [className, setClassName] = useState('background-image-1');

    const setBackgroundWithoutImage = (className) => {
        setClassName(className);
    };

    return (
        <ModalContext.Provider value={{setClassName}}>
            <div className={className}>
                {props.children}
            </div>
        </ModalContext.Provider>
    );
};

export { ModalProvider };