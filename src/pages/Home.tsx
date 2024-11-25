import React from 'react';
import { Tabs, Box } from '@chakra-ui/react';
import FormSimular from '../components/FormSimular';
import LeadSimular from '../components/Lead';

const Home: React.FC = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="70vh"
        >
            <Tabs.Root
                defaultValue="members"
                variant="plain"
                width="80%"
                maxWidth="800px"
            >
                <Tabs.List
                    bg="bg.muted"
                    rounded="lg"
                    p="1"
                    display="flex"
                    justifyContent="space-around"
                >
                    <Tabs.Trigger value="members">
                        Simulador Formulario
                    </Tabs.Trigger>
                    <Tabs.Trigger value="lead">Consulta </Tabs.Trigger>
                    <Tabs.Indicator rounded="lg" />
                </Tabs.List>
                <Tabs.Content value="members">
                    <FormSimular />
                </Tabs.Content>
                <Tabs.Content value="lead">
                    <LeadSimular />
                </Tabs.Content>
            </Tabs.Root>
        </Box>
    );
};

export default Home;
