import React from 'react';
import { MenuWrapper } from './styles/MenuWrapper';
import Logo from '../../../theme/Logo'

export default function Menu() {
  const links = [
    {
      text: 'Home',
      url: '/',
    },
    {
      text: 'Perguntas frequentes',
      url: '/',
    },
    {
      text: 'Sobre',
      url: '/',
    }
  ]
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>

      <MenuWrapper.CentralSide>
        {links.map(link => <a href={link.url}>{link.text}</a>)}
      </MenuWrapper.CentralSide>
      
      <MenuWrapper.RightSide>
        <button>Entrar</button>
        <button>Cadastrar</button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}