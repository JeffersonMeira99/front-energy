import { Box, Table, Input, HStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import useSimuladorStore from '../store/simuladorListagem.store';

const LeadSimular: React.FC = () => {
    const { simulacoes, listarSimulacoes } = useSimuladorStore();

    const [filters, setFilters] = useState({
        nomeCompleto: '',
        email: '',
        codigoDaUnidadeConsumidora: '',
    });

    useEffect(() => {
        listarSimulacoes(filters);
    }, [filters, listarSimulacoes]);

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    return (
        <Box p="4" borderWidth={1} borderRadius="lg" boxShadow="md">
            <HStack mb="6">
                <Input
                    placeholder="Nome Completo"
                    name="nomeCompleto"
                    value={filters.nomeCompleto}
                    onChange={handleInputChange}
                />
                <Input
                    placeholder="Email"
                    name="email"
                    value={filters.email}
                    onChange={handleInputChange}
                />
                <Input
                    placeholder="Código da Unidade"
                    name="codigoDaUnidadeConsumidora"
                    value={filters.codigoDaUnidadeConsumidora}
                    onChange={handleInputChange}
                />
            </HStack>

            <Table.Root size="sm" variant="outline" showColumnBorder>
                <Table.Header>
                    <Table.Row bg="bg.subtle">
                        <Table.ColumnHeader>Nome Completo</Table.ColumnHeader>
                        <Table.ColumnHeader>Email</Table.ColumnHeader>
                        <Table.ColumnHeader>
                            Código da Unidade
                        </Table.ColumnHeader>
                        <Table.ColumnHeader>
                            Consumo Fora Ponta
                        </Table.ColumnHeader>
                        <Table.ColumnHeader>Mês do Consumo</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {simulacoes.map(simulacao => (
                        <Table.Row key={simulacao.id}>
                            <Table.Cell>{simulacao.nomeCompleto}</Table.Cell>
                            <Table.Cell>{simulacao.email}</Table.Cell>
                            <Table.Cell>
                                {simulacao.unidades[0]
                                    ?.codigoDaUnidadeConsumidora || '-'}
                            </Table.Cell>
                            <Table.Cell>
                                {simulacao.unidades[0]
                                    ?.historicoDeConsumoEmKWH[0]
                                    ?.consumoForaPontaEmKWH || '-'}
                            </Table.Cell>
                            <Table.Cell>
                                {simulacao.unidades[0]
                                    ?.historicoDeConsumoEmKWH[0]?.mesDoConsumo
                                    ? new Date(
                                          simulacao.unidades[0].historicoDeConsumoEmKWH[0].mesDoConsumo,
                                      ).toLocaleDateString()
                                    : '-'}
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        </Box>
    );
};

export default LeadSimular;
