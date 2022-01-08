import styled from 'styled-components';
export default function Slide({ img }) {
    return <IMG src={img} />;
}
const IMG = styled.img`
    width: 50vh;
    height: 50vh;
    @media screen and (max-width: 1040px) {
        width: 15vh;
        height: 30vh;
    }
`;
