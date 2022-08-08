import React, { useEffect, useRef, useState } from "react";
import "./DropdownButton.scss";

const DropdownButton = ({ text }) => {
    const popupRef = useRef();
    const buttonRef = useRef();

    const [isPopupOpen, togglePopup] = useState(false);

    useEffect(() => {
        if (popupRef?.current) {
            let [topOffset, leftOffset] = [buttonRef.current?.offsetTop, buttonRef.current?.offsetLeft];
            console.log("topOffset :>> ", topOffset);
            popupRef.current.style.transform = `translate(${leftOffset}px, ${topOffset + 30}px)`;
        }
    }, [popupRef?.current, isPopupOpen]);

    return (
        <div className={`dropdown-button`} onBlur={() => togglePopup(false)} tabIndex={1}>
            <p ref={buttonRef} onClick={() => togglePopup((prevState) => !prevState)}>
                {text}
            </p>
            {isPopupOpen && (
                <div ref={popupRef} className="dropdown-popup">
                    Content
                </div>
            )}
        </div>
    );
};

export default DropdownButton;
