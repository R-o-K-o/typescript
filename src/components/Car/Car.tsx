import {FC} from "react";

import {ICar} from "../../interfaces";

interface IProps {
    car: ICar
}

export const Car: FC<IProps> = ({car:{id, model, year, price}}) => {
    return (
        <div>
            <div>model : {model}</div>
            <div>year : {year}</div>
            <div>price : {price}</div>
        </div>
    );
};