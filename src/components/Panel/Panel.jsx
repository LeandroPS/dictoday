import Container from "../Container";
import Header from "../Header";
import { styled } from "styled-components";

const Wrapper = styled.div`
    background-color: green;
    width: 100vw;
    height: 100vh;
`;

const Panel = ({children, appName}) => (
    <Wrapper>
        <Header appName={appName} />
        <Container>
            {children}
        </Container>
    </Wrapper>
);

export default Panel;