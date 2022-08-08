import React, { useEffect, useState } from "react";
import "./HeaderTemplate.scss";

// Assets
import { ReactComponent as CandyBoxIcon } from "../../resources/icons/common/candyboxMenu.svg";
import { ReactComponent as Logo } from "../../resources/icons/common/logo.svg";
import { ReactComponent as LogoSmall } from "../../resources/icons/common/logo-sm.svg";
import { ReactComponent as HelpIcon } from "../../resources/icons/common/helpIcon.svg";
import { ReactComponent as SettingsIcon } from "../../resources/icons/common/settingsIcon.svg";
import { ReactComponent as BellIcon } from "../../resources/icons/common/bellIcon.svg";
import DropdownButton from "../../components/Header/DropdownButton";
import SearchBar from "../../components/searchBar/SearchBar";

const HeaderTemplate = () => {
    const [screenWidth, setWidth] = useState(0);
    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        });
        return () => {
            window.removeEventListener("resize", () => {});
        };
    }, []);

    return (
        <div className={`common-header`}>
            <div>
                <CandyBoxIcon className={`candybox-menu`} />
                {screenWidth < 1200 ? <LogoSmall className={`jira-logo logo-sm`} /> : <Logo className={`jira-logo`} />}
                <DropdownButton text={"Your Work"} />
                <DropdownButton text={"Projects"} />
                <DropdownButton text={"Filters"} />
                <DropdownButton text={"Dashboards"} />
                <DropdownButton text={"People"} />
                <DropdownButton text={"Apps"} />
                <div className="button">Create</div>
            </div>
            <div>
                <SearchBar />
                <BellIcon />
                <HelpIcon className="help-icon" />
                <SettingsIcon />
                <img src={`https://ui-avatars.com/api?background=random&format=svg&name=${"Hemanth Kumar".split(" ").join("+")}`} className="user-icon" />
            </div>
        </div>
    );
};

export default HeaderTemplate;
