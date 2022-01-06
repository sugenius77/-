import styled from 'styled-components';

const Div = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    img {
        top: 50%;
        left: 50%;
        transfrom: translate(-50%, -50%);
    }
    @media screen and (max-width: 1040px) {
        padding: 0;
        padding-top: 10vh;
        img {
            max-width: 50%;
            height: auto;
        }
    }
`;

let LogoDiv = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    clip-path: polygon(0 0, ${({ loadingPercent }) => loadingPercent}% 0, ${({ loadingPercent }) => loadingPercent}% 100%, 0 100%);
    transition: clip-path 0.8s;

    @media screen and (max-width: 1040px) {
        img {
            padding-top: 10vh;
            max-width: 100%;
            height: auto;
        }
    }
`;
const Loading = ({ loadingPercent }) => {
    return (
        <Div>
            <img src={`${process.env.PUBLIC_URL}/loading/logo_mono_512.png`} alt="Loading_0%" />
            <LogoDiv loadingPercent={loadingPercent}>
                <img src={`${process.env.PUBLIC_URL}/loading/logo_512.png`} alt="Loading_100%" />
            </LogoDiv>
        </Div>
    );
};

export default Loading;
