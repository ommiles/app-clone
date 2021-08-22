import React from 'react';
import Logo from '../Assets/App_logo_PNG1.png'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

export const Header = () => {
  return (
    <div className='header' >
      <IconButton>
        <PersonIcon fontSize='large' />
      </IconButton>

      <img alt='App Logo' src={Logo} className='header__logo' />

      <IconButton>
        <ForumIcon fontSize='large' />
      </IconButton>
    </div>
  );
};
