import React from 'react';
import Link from '../Link';
import { MenuWrapper } from './styles/MenuWrapper';
import Logo from '../../../theme/Logo';
import { Button } from '../Button';
import Text from '../../foundation/Text';
import Sun from '../../../theme/Sun';

// eslint-disable-next-line react/prop-types
export default function Menu({ mode, changeMode, onRegister }) {
  const currentUrlPathname = new URL('http://localhost:3000/').pathname;

  const links = [
    {
      text: 'Home',
      url: '/',
    },
    {
      text: 'Perguntas frequentes',
      url: '/faq',
    },
    {
      text: 'Sobre',
      url: '/about',
    },
  ];

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo mode={mode} />
      </MenuWrapper.LeftSide>

      <MenuWrapper.CentralSide mode={mode}>
        {links.map((link) => (
          <li key={link.url}>
            <Text
              tag="a"
              href="/about"
              variant="smallestException"
              color={currentUrlPathname === link.url ? 'secondary.main' : 'tertiary.main'}
              href={link.url}
              mode={mode}
            >
              {link.text}
            </Text>
          </li>
        ))}
      </MenuWrapper.CentralSide>

      <MenuWrapper.RightSide>
        <Button ghost variant="secondary.main" mode={mode} onClick={changeMode} notStyleFocus>
          <Sun mode={mode} />
        </Button>
        <Button
          ghost
          variant="secondary.main"
          mode={mode}
          href="/app/login"
        >
          Entrar

        </Button>
        <Button variant="primary.main" mode={mode} onClick={onRegister}>Cadastrar</Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}
