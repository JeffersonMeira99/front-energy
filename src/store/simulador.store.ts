import { StateCreator, create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { Simulador } from '../types/simulador';
import { PostSimulador } from '../services/simuladorFormulario';

export interface SimuladorState {
    registerSimulador: (data: Simulador) => Promise<void>;
}

const storeApi: StateCreator<SimuladorState> = set => ({
    registerSimulador: async (data: Simulador) => {
        try {
            await PostSimulador.simulador(data);
        } catch (error) {
            throw new Error(`${error}`);
        }
    },
});

export const useAuthStore = create<SimuladorState>()(
    devtools(persist(storeApi, { name: 'auth-storage' })),
);
