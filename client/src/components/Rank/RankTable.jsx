import { Box, Table, Text } from 'gestalt';

function RankTable({ url, menu, rank }) {
    return (
        <>
            <Table.Row>
                <Table.Cell>
                    <Box width={'300px'}>
                        <div style={{ backgroundSize: 'cover', backgroundImage: `url(${url})`, width: '300px', height: '200px' }}></div>
                    </Box>
                </Table.Cell>
                <Table.Cell>
                    <div style={{ width: '100px', display: 'flex', justifyContent: 'center' }}>
                        <Text>{menu}</Text>
                    </div>
                </Table.Cell>
                <Table.Cell>
                    <div style={{ width: '100px', display: 'flex', justifyContent: 'center' }}>
                        <Text>{rank}</Text>
                    </div>
                </Table.Cell>
            </Table.Row>
        </>
    );
}

export default RankTable;
