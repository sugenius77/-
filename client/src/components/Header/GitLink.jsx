import styled from 'styled-components';

const Div = styled.div`
    list-style: none;
    display: flex;
    color: black;
    padding: 8px 12px;
    a {
        margin-left: 12px;
    }

    @media screen and (max-width: 1040px) {
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
                <img src={`${process.env.PUBLIC_URL}/header/github_32.png`} alt="github" />
            </a>
            <a href="https://kdt-gitlab.elice.io/003-part3-deliveryservice/team9">
                <img src={`${process.env.PUBLIC_URL}/header/gitlab_32.png`} alt="gitlab" />
            </a>
        </Div>
    );
};

export default GitLink;
