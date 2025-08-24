import React from 'react';
import logo from '../prepx-logo.png';

import styled from 'styled-components';

const Img = styled.img`
  width: 100px;
  filter: ${({ theme }) => theme.logoFilter};
  transition: filter 0.3s;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.14);
`;

export default function Logo() {
  return <Img src={logo} alt="PrepX Logo" />;
}
