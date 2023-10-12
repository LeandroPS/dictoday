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
    font-weight: 600;
    font-size: 24px;
    margin: 0;
`;

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Logo = styled.img`
    width: 30px;
    margin-right: 12px;
`;

const Header = ({ title, logo }) => (
    <Wrapper>
        <Container>
            <Grid>
                <LogoWrapper>
                    <Logo src={logo} />
                    <Title>{title}</Title>
                </LogoWrapper>
            </Grid>
        </Container>
    </Wrapper>
);


export default Header;