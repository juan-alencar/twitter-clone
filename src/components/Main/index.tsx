import React from 'react';

import { 
    Container, 
    Header, 
    BackIcon, 
    ProfileInfo, 
    BottomMenu,
    BottomDiv, 
    HomeIcon, 
    SearchIcon,
    BellIcon,
    EmailIcon } from './styles'

import ProfilePage from '../ProfilePage'

// import { Container } from './styles';

const Main: React.FC = () => {
  return (
      <Container>
          <Header>
            <button>
                <BackIcon />
            </button>

            <ProfileInfo>
                <strong>Juan Alencar</strong>
                <span>1744 Tweets</span>
            </ProfileInfo>
          </Header>

          <ProfilePage /> 

          <BottomMenu>
            <HomeIcon className="active"/>
            <SearchIcon />
            <BellIcon />
            <EmailIcon />
          </BottomMenu>
          
          <BottomDiv />
      </Container>
  );
}

export default Main;