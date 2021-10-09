import React from 'react';

import Feed from '../Feed'

import { 
    Container, 
    Banner, 
    Avatar, 
    ProfileData, 
    LocationIcon, 
    CakeIcon, 
    Followage,
    EditButton, } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
        <Banner>
            <Avatar />

        </Banner>

        <ProfileData>
            <EditButton outlined>Editar perfil</EditButton>

            <h1>Juan Alencar</h1>
            <h2>@juandmalencar</h2>

            <p>
                instagram do lindo: <a href="https://instagram.com/juan._alencar">@juan._alencar</a>
            </p>
            <ul>
                <li>
                    <LocationIcon />
                    Patos, Brasil
                </li>
                <li>
                    <CakeIcon />
                    Nascido em 24 de dezembro de 2002
                </li>
            </ul>
            <Followage>
                <span>
                    <strong>94</strong> Seguindo 
                </span>

                <span>
                    <strong>672</strong> Seguidores
                </span>
            </Followage>
        </ProfileData>

        <Feed />
    </Container>
  );
}

export default ProfilePage;