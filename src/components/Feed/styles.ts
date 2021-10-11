import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`; 

export const Tab = styled.div`
    margin-top: 10px;
    padding: 13px 0 11px;
    font-weight: bold;
    font-size: 15px;
    text-align: center;

    outline: 0;
    cursor: pointer;

    color: var(--twitter);
    border-bottom: 2px solid var(--twitter);

    &:hover {
        background: var(--twitter-dark-hover);
    }
`;

export const Tweets = styled.div`
    display: flex;
    flex-direction: column;
    
    flex-shrink: 0;
`;
