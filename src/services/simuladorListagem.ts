import { AxiosError } from 'axios';
import { api } from '../util/api';
import { simuladorListagem } from '../types/simuladorListagem';

export class GetSimulador {
    static async listarSimulacoes(filters: {
        codigoDaUnidadeConsumidora?: string;
        nomeCompleto?: string;
        email?: string;
    }): Promise<simuladorListagem[]> {
        try {
            const { data } = await api.get<simuladorListagem[]>('/energy', {
                params: filters,
            });
            return data;
        } catch (error) {
            if (error instanceof AxiosError) {
                throw new Error(
                    error.response?.data || 'Erro ao listar simulações',
                );
            }
            throw new Error('Erro desconhecido ao listar simulações');
        }
    }
}
