import { Box, Table, Text } from 'gestalt';
import styled from 'styled-components';

const Image = styled.div`
    background-image: url(${(props) => props.bgurl});
    &:hover {
         {
            opacity: 0.3;
        }
    }
    height: 200px;
    width: 300px;
    background-size: cover;
    border-radius: 4px;
    background-position: center center;
    transition: opacity 0.1s linear;
    @media screen and (max-width: 1040px) {
        height: 100px;
        width: 140px;
        background-size: cover;
        flex-direction: column;
        
        background-position: center center;
    }
`;
const Box1 = styled.div`
    width:${(props) => props.size};
    @media screen and (max-width: 1040px) {
        width:140px;
    }
`;
const Box2 = styled.div`
    width:${(props) => props.size};
    display:flex;
    justify-content:center;
    @media screen and (max-width: 1040px) {
        width:85px;
    }
`;

function RankTable({ url, menu, rank }) {
    return (
        <>
            <Table.Row>
                <Table.Cell>
                    <Box1 size={'300px'}>
                        <Image bgurl={(url)} />
                    </Box1>
                </Table.Cell>
                <Table.Cell>
                    <Box2 size={100}>
                        <Text>{menu}</Text>
                    </Box2>
                </Table.Cell>
                <Table.Cell>
                    <Box2 size={100}>
                        <Text>{rank}</Text>
                    </Box2>
                </Table.Cell>
            </Table.Row>
        </>
    );
}

export default RankTable;
