import React from 'react';

import { 
    Container, 
    Retweeted, 
    RocketseatIcon, 
    Body, 
    Content, 
    Avatar, 
    Header, 
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon
    } from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
        <Retweeted>
            <RocketseatIcon />
            Você retweetou
        </Retweeted>
        <Body>
            <Avatar/>

            <Content>
                <Header>
                    <strong>Juan Alencar</strong>
                    <span>@juandmalencar</span>
                    <Dot />
                    <time>27 de jun</time>
                </Header>

                <Description>Ré de foguete é a queda</Description>

                <ImageContent />

                <Icons>
                    <Status>
                        <CommentIcon/>
                        18
                    </Status>

                    <Status>
                        <RetweetIcon/>
                        18
                    </Status>

                    <Status>
                        <LikeIcon/>
                        998
                    </Status>
                </Icons>
            </Content>
        </Body>
    </Container>
  );
}

export default Tweet;