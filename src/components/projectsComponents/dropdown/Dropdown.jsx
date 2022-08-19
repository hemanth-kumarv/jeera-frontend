import React, { useEffect, useState } from "react";
import { useRef } from "react";
import styles from "./Dropdown.module.scss";

const Dropdown = (props) => {
    const { children } = props;
    const buttonRef = useRef();
    const popupRef = useRef();
    const [isPopupOpen, togglePopup] = useState(false);

    useEffect(() => {
        if (popupRef?.current) {
            let [topOffset, leftOffset] = [buttonRef.current?.offsetTop, buttonRef.current?.offsetLeft];
            popupRef.current.style.transform = `translate(${leftOffset - 10}px, ${topOffset + 30}px)`;
        }
    }, [popupRef?.current, isPopupOpen]);

    return (
        <div className={styles["projects-dropdown"]}>
            <div
                className={`${styles["dropdown-container"]} ${isPopupOpen ? styles["active-dropdown"] : ""}`}
                onBlur={() => togglePopup(false)}
                onClick={() => togglePopup((prevState) => !prevState)}
                tabIndex={1}
            >
                <p ref={buttonRef}>{props.title}</p>
            </div>
            {isPopupOpen && (
                <div className={styles["dropdown-content"]} ref={popupRef}>
                    {children}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
