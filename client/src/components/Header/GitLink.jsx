import styled from 'styled-components';
import github from './images/github_32.png';
import gitlab from './images/gitlab_32.png';

const Div = styled.div`
    list-style: none;
    display: flex;
    color: black;
    padding: 8px 12px;
    a {
        margin-left: 12px;
    }

    @media screen and (max-width: 980px) {
        padding-left: 0px;
        justify-content: center;
        width: 100%;
        margin-top: 4px;

        img {
            padding: 0px 12px;
        }
    }
`;
const GitLink = () => {
    return (
        <Div>
            <a href="https://github.com/">
                <img src={github} alt="github" />
            </a>
            <a href="https://gitlab.com/">
                <img src={gitlab} alt="gitlab" />
            </a>
        </Div>
    );
};

export default GitLink;
