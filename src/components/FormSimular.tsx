import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Input, Button, Box, Alert } from '@chakra-ui/react';

import InputMask from 'react-input-mask';
import { useAuthStore } from '../store/simulador.store';

interface FormData {
    nomeCompleto: string;
    email: string;
    telefone: string;
    codigoDaUnidadeConsumidora: string;
    modeloFasico: string;
    enquadramento: string;
    consumoForaPontaEmKWH: number;
    mesDoConsumo: string;
}

const FormSimular: React.FC = () => {
    const [form, setForm] = useState<FormData>({
        nomeCompleto: '',
        email: '',
        telefone: '',
        codigoDaUnidadeConsumidora: '',
        modeloFasico: '',
        enquadramento: '',
        consumoForaPontaEmKWH: 0,
        mesDoConsumo: '',
    });

    const [alert, setAlert] = useState<{
        status: string;
        message: string;
    } | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const registerSimulador = useAuthStore(state => state.registerSimulador);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const informacoesDaFatura = [
            {
                codigoDaUnidadeConsumidora: form.codigoDaUnidadeConsumidora,
                modeloFasico: form.modeloFasico,
                enquadramento: form.enquadramento,
                historicoDeConsumoEmKWH: [
                    {
                        consumoForaPontaEmKWH: form.consumoForaPontaEmKWH,
                        mesDoConsumo: form.mesDoConsumo,
                    },
                ],
            },
        ] as const;

        const simuladorData = {
            ...form,
            informacoesDaFatura,
        };

        try {
            await registerSimulador(simuladorData);
            setAlert({
                status: 'success',
                message: 'Simulação registrada com sucesso!',
            });
            window.location.reload();
        } catch (error) {
            console.error(error);
            setAlert({
                status: 'error',
                message: 'Erro ao registrar simulação.',
            });
        }
    };

    return (
        <Box
            as="form"
            onSubmit={handleSubmit}
            p="4"
            borderWidth={1}
            borderRadius="lg"
            boxShadow="md"
        >
            {alert && (
                <div
                    className={`mb-4 p-4 rounded-md ${
                        alert.status === 'success'
                            ? 'bg-green-100 border border-green-400 text-green-700'
                            : 'bg-red-100 border border-red-400 text-red-700'
                    }`}
                >
                    <strong className="font-bold">
                        {alert.status === 'success' ? 'Sucesso!' : 'Erro!'}
                    </strong>
                    <span className="block sm:inline">{alert.message}</span>
                </div>
            )}
            <Input
                type="text"
                name="nomeCompleto"
                placeholder="Nome Completo"
                value={form.nomeCompleto}
                onChange={handleChange}
                mb="4"
            />
            <Input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                mb="4"
            />
            <InputMask
                mask="(99)99999-9999"
                value={form.telefone}
                onChange={e => handleChange(e)}
            >
                {inputProps => (
                    <Input
                        {...inputProps}
                        type="text"
                        name="telefone"
                        placeholder="Telefone"
                        mb="4"
                    />
                )}
            </InputMask>
            <Input
                type="text"
                name="codigoDaUnidadeConsumidora"
                placeholder="Código da Unidade Consumidora"
                value={form.codigoDaUnidadeConsumidora}
                onChange={handleChange}
                mb="4"
            />
            <Input
                type="text"
                name="modeloFasico"
                placeholder="Monofasico | Bifasico | Trifasico"
                value={form.modeloFasico}
                onChange={handleChange}
                mb="4"
            />
            <Input
                type="text"
                name="enquadramento"
                placeholder="AX | B1 | B2 | B3"
                value={form.enquadramento}
                onChange={handleChange}
                mb="4"
            />
            <Input
                type="text"
                name="consumoForaPontaEmKWH"
                placeholder="Consumo Fora Ponta em KWH"
                value={form.consumoForaPontaEmKWH}
                onChange={handleChange}
                mb="4"
            />

            <InputMask
                mask="9999-99"
                value={form.mesDoConsumo}
                onChange={e => handleChange(e)}
            >
                {(inputProps: any) => (
                    <Input
                        {...inputProps}
                        type="text"
                        name="mesDoConsumo"
                        placeholder="YYYY-MM"
                        mb="4"
                    />
                )}
            </InputMask>

            <Button type="submit" colorScheme="blue" width="full" mt="4">
                Enviar
            </Button>
        </Box>
    );
};

export default FormSimular;
