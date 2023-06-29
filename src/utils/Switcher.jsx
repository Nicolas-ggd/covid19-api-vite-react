import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useDarkSide } from "./useDarkSide";

export const Switcher = () => {
    const [colorTheme, setColorTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(
        colorTheme === "light" ? true : false
    );

    const toggleDarkMode = (checked) => {
        setColorTheme(colorTheme);
        setDarkSide(checked);
    };

    return (
        <>
            <DarkModeSwitch
                checked={darkSide}
                onChange={toggleDarkMode}
                size={30}
            />
        </>
    );
};