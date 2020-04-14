var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
;
const typeStyle = {
    danger: "#A91011",
    alert: "#F27713",
    info: "#083D77"
};
const BasicButton = (_a) => {
    var { typeButton, onClick, children } = _a, props = __rest(_a, ["typeButton", "onClick", "children"]);
    const type = typeButton || "info";
    const mystyle = {
        color: "white",
        backgroundColor: typeStyle[type],
        padding: "16px",
        fontFamily: "Arial",
        width: "250px",
        fontSize: "18px",
        border: "0",
        borderRadius: "12px",
        boxShadow: "0 2px 5px 1px rgba(0,0,0,0.2)",
        cursor: "pointer",
    };
    return (React.createElement("button", Object.assign({ style: mystyle }, props, { onClick: onClick }), children));
};
export default BasicButton;
