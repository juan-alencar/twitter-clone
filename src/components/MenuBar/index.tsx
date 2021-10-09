import React from 'react';

import Button from '../Button';

import { 
    Container, 
    TopSide, 
    Logo, 
    MenuButton, 
    HomeIcon,
    BellIcon, 
    EmailIcon, 
    FavoriteIcon, 
    ProfileIcon} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
        <TopSide>
            <Logo />

            <MenuButton>
                <HomeIcon/>
                <span>Página Inicial</span>
            </MenuButton>

            <MenuButton>
                <BellIcon/>
                <span>Notificações</span>
            </MenuButton>

            <MenuButton>
                <EmailIcon/>
                <span>Mensagens</span>
            </MenuButton>

            <MenuButton>
                <FavoriteIcon/>
                <span>Favoritados</span>
            </MenuButton>
            
            <MenuButton>
                <ProfileIcon/>
                <span>Perfil</span>
            </MenuButton>

            <Button>
                <span>Tweetar</span>
            </Button>
        </TopSide>
    </Container>
  );
}

export default MenuBar;