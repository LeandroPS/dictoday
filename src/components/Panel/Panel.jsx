import Container from "../Container";
import Header from "../Header";
import { styled } from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.backgroundColor};
    width: 100vw;
    height: 100vh;
`;

const ContentContainer = styled(Container)`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
`;

const Panel = ({children, title, logo, backgroundColor}) => (
    <Wrapper backgroundColor={backgroundColor}>
        <Header title={title} logo={logo} />
        <ContentContainer>
            {children}
        </ContentContainer>
    </Wrapper>
);

export default Panel;