import React from 'react'; 

const getStyleObj = (textColor) => {
    return {
        color: textColor,
    };
}

const Title = (props) => {
    const name = "this website";
    const styleObj = getStyleObj(props.textColor);
    return (
        <>
            <h1 style={styleObj}>
                Welcome to {name}.
            </h1>
            <h2>Thank you for visiting.</h2>
        </>
    );
}

export default Title;