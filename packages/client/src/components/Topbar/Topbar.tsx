import { AppBar, Button, Toolbar } from '@material-ui/core';
import DateRange from '@material-ui/icons/DateRange';
import { Flex } from 'components';
import React from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';
import styled from 'styled-components';

interface Props {}

const StyledLogo = styled(RouterLink)<LinkProps>`
  color: white;
  text-decoration: none;
`;

const Topbar = (_props: Props) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button startIcon={<DateRange />} style={{ color: 'white' }}>
          <StyledLogo to="/">
            <span>Calendar</span>
          </StyledLogo>
        </Button>
        <Flex.Grow />
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
