import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { GetSimulador } from '../services/simuladorListagem';
import { simuladorListagem } from '../types/simuladorListagem';

export interface SimuladorState {
    simulacoes: simuladorListagem[];
    listarSimulacoes: (filters?: {
        nomeCompleto?: string;
        email?: string;
        codigoDaUnidadeConsumidora?: string;
    }) => Promise<void>;
}

const useSimuladorStore = create<SimuladorState>()(
    devtools(set => ({
        simulacoes: [],

        listarSimulacoes: async (filters = {}) => {
            try {
                const simulacoes = await GetSimulador.listarSimulacoes(filters);
                set({ simulacoes });
            } catch (error) {
                console.error('Erro ao listar simulações:', error);
            }
        },
    })),
);
export default useSimuladorStore;
