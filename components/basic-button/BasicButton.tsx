import * as React from 'react';

interface IButtonProps {
    children?: React.ReactNode;
    props?: any;
    onClick?: any;
    typeButton?: string;
};

const typeStyle: any = {
    danger: "#A91011",
    alert: "#F27713",
    info: "#083D77",
    warn: "#083D77",
}

const BasicButton: React.FC<IButtonProps> = ({ typeButton, onClick, children, ...props }) => {
    const type = typeButton || "info";

    const mystyle = {
        color: "white",
        backgroundColor: typeStyle[type],
        padding: "20px",
        fontFamily: "Arial",
        width: "500px",
        fontSize: "20px",
        border: "0",
        borderRadius: "10px",
        boxShadow: "0 2px 5px 1px rgba(0,0,0,0.8)",
        cursor: "pointer",
    };

    return (
        <button style={mystyle} {...props} onClick={onClick}>
            {children}
        </button>
    );
}

export default BasicButton;