export type Simulador = {
    nomeCompleto: string;
    email: string;
    telefone: string;
    informacoesDaFatura: ReadonlyArray<{
        codigoDaUnidadeConsumidora: string;
        modeloFasico: string;
        enquadramento: string;
        historicoDeConsumoEmKWH: ReadonlyArray<{
            consumoForaPontaEmKWH: number;
            mesDoConsumo: string;
        }>;
    }>;
};


