import Mono from '../images/logo_mono_512.png';
import logo from '../images/logo_512.png';
import styled from 'styled-components';

const Div = styled.div`
    padding: 10%;
    position: relative;
    @media screen and (max-width: 640px) {
        padding: 0;
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
    @media screen and (max-width: 640px) {
        img {
            max-width: 100%;
            height: auto;
        }
    }
`;
const Loading = ({ loadingPercent }) => {
    return (
        <Div>
            <img src={Mono} alt="Loading_0%" />
            <LogoDiv loadingPercent={loadingPercent}>
                <img src={logo} alt="Loading_100%" />
            </LogoDiv>
        </Div>
    );
};

export default Loading;
