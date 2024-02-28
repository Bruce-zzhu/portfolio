'use client';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';

import { logo } from '@/assets';
import Link from 'next/link';
import { navLinks } from '@/constants';
import { link } from 'fs';
import { useState } from 'react';

const drawerWidth = 240;

const Logo = () => {
  return (
    <Link href='/'>
      <Image src={logo} alt='logo' width={60} height={60} />
    </Link>
  );
};

export const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('Home');

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component='nav' className='bg-primary'>
        <Toolbar className='flex justify-between'>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Logo />
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <ul className='list-none hidden sm:flex gap-10'>
              {navLinks.map((item) => (
                <li
                  key={item.id}
                  className={`${
                    active === item.title ? 'text-white' : 'text-secondary'
                  } hover:text-white cursor-pointer`}
                >
                  <Link key={item.id} href={`/#${item.id}`}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Box sx={{ my: 2 }}>
              <Logo />
            </Box>
            <Divider />
            <List>
              {navLinks.map((item) => (
                <ListItem key={item.id} disablePadding>
                  <ListItemButton sx={{ textAlign: 'center' }}>
                    <ListItemText primary={item.title} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </nav>
    </Box>
  );
};
