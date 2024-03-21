import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/system';

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#d7343485',
});

const Navbar = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <div style={{ marginLeft: 'auto' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', marginRight: 20 }}>
            Home
          </Link>
          <Link to="/employee-form" style={{ color: 'white', textDecoration: 'none' }}>
            Employee Form
          </Link>
        </div>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
