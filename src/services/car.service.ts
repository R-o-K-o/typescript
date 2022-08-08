import {axiosService, Response} from "./axios.service";
import {urls} from "../constants";
import {ICar} from "../interfaces";

export const carService = {
    getAll: (): Response<ICar[]> => axiosService.get(urls.cars),
    getById: (id: string): Response<ICar> => axiosService.get(`${urls.cars}/${id}`),
    create: (car: ICar): Response<ICar> => axiosService.post(urls.cars, car),
    updateById: (id: string, car: ICar): Response<ICar> => axiosService.put(`${urls.cars}/${id}`, car),
    deleteById: (id: string): Response<void> => axiosService.delete(`${urls.cars}/${id}`)
};