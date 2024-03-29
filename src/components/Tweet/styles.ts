import styled, { css } from "styled-components";

import { Comment, Retweet, Heart } from "../../styles/Icons"


const iconCSS = css`
    width: 25px;
    height: 25px;
    margin-right: 2px;
    cursor: pointer;
    fill: var(--gray);
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 14px 16px; 
    border-bottom : 1px solid var(--outline);
    max-width: 100%;
`;

export const Retweeted = styled.div`
    display: flex;
    align-items: center;
    font-size: 13px;
    color: var(--gray);
`;

export const RocketseatIcon = styled(Retweet)`
    ${iconCSS}
    width: 16px;
    height: 16px;

    margin-left: 35px;
    margin-right: 9px;
`;

export const Body = styled.div`
    display: flex;
    margin-top: 3px;
    position: relative;
`;

export const Avatar = styled.img`
    width: 49px;
    height: 49px;
    border-radius: 50%;
    flex-shrink: 0;
    background: var(--gray);

    position: absolute;
    top: 0;
    left: 0;

`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 2px;
    margin-left: 60px;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    font-size: 15px;
    white-space: nowrap; //faz com que o texto nao quebre a linha
> strong{
    margin-right: 5px;
}
> span, time{
    color: var(--gray)
}
> span, strong {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
`;

export const Dot = styled.div`
    background: var(--gray);
    height: 3px;
    width: 3px;
    border-radius: 50%;
    margin: 0 10px;
`;

export const Description = styled.p`
    font-size: 14px;
    margin-top: 4px;
`;

export const ImageContent = styled.div`
    margin-top: 12px;
    width: 100%;
    height: min(285px, max(175px, 41vw));
    background: var(--outline);
    border-radius: 14px;
    cursor: pointer;

    &:hover{
        opacity: 0.7;
    }
`;
export const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 11px auto 0;
    width: 100%; /** Mobile */
    margin-top: 8px;

    @media (min-width: 330px) {
        width: 63%;
    }
`;



export const Status = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    color: var(--gray);

    &:nth-child(2){
        color: var(--retweet);
    }

    &:nth-child(3){
        color: var(--like);
    }

`;
export const CommentIcon = styled(Comment)`${iconCSS}`;
export const RetweetIcon = styled(Retweet)`
    ${iconCSS}
    fill: var(--retweet);
    `;
export const LikeIcon = styled(Heart)`
    ${iconCSS}
    fill: var(--like);
`;