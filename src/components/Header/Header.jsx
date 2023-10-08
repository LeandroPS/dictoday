import { styled } from "styled-components";
import Container from "../Container";

const Wrapper = styled.header`
    padding: 16px 0;
`;

const Grid = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Title = styled.h1`
    font-size: 20px;
    margin: 0;
`;

const Header = ({ appName }) => (
    <Wrapper>
        <Container>
            <Grid>
                <Title>{appName}</Title>
            </Grid>
        </Container>
    </Wrapper>
);


export default Header;