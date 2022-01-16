import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Box } from 'gestalt';

const Box1 = styled.div`
    margin: 0 auto;
    padding: 30px;
    @media screen and (max-width: 1040px) {
        padding:0px;
    }
`;
const Box2 = styled.div`
    marginTop: 50px;
    @media screen and (max-width: 1040px) {
        marginTop: 0px;
    }
`;
const Box3 = styled.div`
    
    @media screen and (max-width: 1040px) {
        margin-top: 20px;
        font-weight: bold;

    }
`;
const Image = styled.div`
    background-image: url(${(props) => props.bgurl});
    &:hover {
         {
            opacity: 0.3;
        }
    }
    height: 300px;
    width: 300px;
    background-size: cover;
    border-radius: 4px;
    background-position: center center;
    transition: opacity 0.1s linear;
    @media screen and (max-width: 1040px) {
        height: 310px;
        width: 310px;
        background-size: cover;
        flex-direction: column;
    }
`;

const Button = styled.button`
    width: 300px;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    transition: opacity 0.1s linear;
    position: relative;
    &:hover {
        transition: all 0.3s ease-in-out;
        background-color: #fec478;
        color: #fff;
    }
    @media screen and (max-width: 1040px) {
        height: 22px;
        width: 100px;
    }
`;
const Text = styled.h2`
    color: ${(props) => props.color};
    display: inline;
    @media screen and (max-width: 1040px) {
        font-size: large;
    }
`;
function WorldCupView({ worldcupWin, winRank }) {
    const navigate = useHistory();
    const nextpage = () => {
        navigate.push('/rank');
    };

    return (
        <>
            {worldcupWin.length > 0 ? <Image bgurl={worldcupWin[1]} /> : <div>라운드 선택중</div>}
            {worldcupWin.length > 0 ? (
                <Box1>
                    <Box3>
                        <Text>선택하신 메뉴 </Text>
                        <Text color={'#fec478'}>{worldcupWin[0]}</Text>
                        <Text>(은)는</Text>
                        <br />
                        <Text>현재</Text>
                        <Text color={'#fec478'}>{winRank}</Text>
                        <Text color={'#fec478'}>{worldcupWin[2]}</Text>
                        <Text>등 입니다</Text>
                    </Box3>
                    <Box3>
                        <Box2>
                            <Button onClick={nextpage}>Ranking 보기</Button>
                        </Box2>
                    </Box3>
                </Box1>
            ) : (
                <div></div>
            )}
        </>
    );
}

export default WorldCupView;
