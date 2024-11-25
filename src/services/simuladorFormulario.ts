import { AxiosError } from 'axios';
import { Simulador } from '../types/simulador';
import { api } from '../util/api';

export class PostSimulador {
    static simulador = async (forms: Simulador): Promise<Simulador> => {
        try {
            const { data } = await api.post<Simulador>('/energy', forms);

            return data;
        } catch (error) {
            if (error instanceof AxiosError) {
                throw new Error(error.response?.data);
            }
            throw new Error('Erro ao realizar foumulario');
        }
    };
}
