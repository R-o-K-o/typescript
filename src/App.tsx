import {FC} from "react";

import {CarForm, Cars} from "./components";

export const App: FC = () => {
    return (
        <div>
            <CarForm/>
            <Cars/>
        </div>
    );
};