import { styled } from "styled-components";

const Wrapper = styled.article`
    font-family: 'Bitter', serif;
`;

const Word = styled.h1`
    font-size: 600;
    margin: 0;
`;

const DefinitionList = styled.ol`
    padding: 0 16px;
`;

const Definition = styled.li``;

const Entry = ({word, definitions, wordClass}) => {
    return (
        <Wrapper>
            <Word>{word}</Word>
            <DefinitionList>
                {definitions.map(definition => (
                    <Definition>{definition}</Definition>
                ))}
            </DefinitionList>
        </Wrapper>
    );
}

export default Entry;