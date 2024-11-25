export type simuladorListagem = {
    id: number;
    nomeCompleto: string;
    email: string;
    telefone: string;
    unidades: [
        {
            id: number;
            codigoDaUnidadeConsumidora: string;
            modeloFasico: string;
            enquadramento: string;
            historicoDeConsumoEmKWH: [
                {
                    id: number;
                    consumoForaPontaEmKWH: number;
                    mesDoConsumo: string;
                },
            ];
        },
    ];
};
