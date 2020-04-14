import * as React from 'react';
interface IButtonProps {
    children?: React.ReactNode;
    props?: any;
    onClick?: any;
    typeButton?: string;
}
declare const BasicButton: React.FC<IButtonProps>;
export default BasicButton;
