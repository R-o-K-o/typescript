import {FC} from "react";
import {SubmitHandler, useForm} from "react-hook-form";

import {ICar} from "../../interfaces";
import {useAppDispatch} from "../../hooks";
import {carActions} from "../../redux";

export const CarForm: FC = () => {
    const {handleSubmit, register, reset} = useForm<ICar>();
    const dispatch = useAppDispatch();

    const formSubmit: SubmitHandler<ICar> = async (car) => {
        await dispatch(carActions.create({car}));
        reset();
    };

    return (
        <form onSubmit={handleSubmit(formSubmit)}>
            <input type="text" placeholder={'model'} {...register('model')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <button>save</button>
        </form>
    );
};