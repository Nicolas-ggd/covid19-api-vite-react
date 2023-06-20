import { Header } from "../header/Header";

export const Home = ({ themeClass, isDarkMode }) => {
    return (
        <div className={`w-full h-full bg-grey-50 ${themeClass}`}>
            <Header />
            Home Page
        </div>
    );
};