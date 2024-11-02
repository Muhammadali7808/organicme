import { Box, Container, IconButton, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import LogoHeader from '../../assets/img/img_header.svg';
import styled from '@emotion/styled';
import { IconSearch } from '../../assets/icon/icon_search';
import { IconKorzinka } from '../../assets/icon/icon_korzinka';
import { Link } from 'react-router-dom';

export const Header = () => {
  const LinkData = styled.p`
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 20px;
    color: #274c5b;
    text-decoration: none;
  `
  return (
    <Box pt={'69px'} pb={'69px'}>
      <Container maxWidth='xl'>
        <Stack direction={'row'} justifyContent={'space-between'}>
          <Stack alignItems={"center"} gap={"150px"} direction={"row"}>
            <Stack width={"198px"}>
              <img src={LogoHeader} alt="logo" />
            </Stack>
            <nav style={{
              display:'flex',
              gap:'30px',
              alignItems:'center'
            }} className="nav">
              <Link style={{
                textDecoration:'none',
                fontWeight:'700',
                fontSize:'20px',
                color:'#274c5b'
              }} to="/">Home</Link>
              <Link style={{
                textDecoration:'none',
                fontWeight:'700',
                fontSize:'20px',
                color:'#274c5b'
              }} to="/about">About</Link>
              <LinkData>Pages</LinkData>
              <Link style={{
                textDecoration:'none',
                fontWeight:'700',
                fontSize:'20px',
                color:'#274c5b'
              }} to="/shop">Shop</Link>
              <LinkData>Projects</LinkData>
              <Link style={{
                textDecoration:'none',
                fontWeight:'700',
                fontSize:'20px',
                color:'#274c5b'
              }} to="/news">News</Link>
            </nav>
          </Stack>
          <Stack direction={'row'} gap={'18px'} alignItems={'center'}>
            <Stack direction={'row'} gap={'30px'} borderRadius={'33px'} border={'1px solid #f1efef'} pt={'5px'} pb={'5px'} pr={'6px'} pl={'26px'}>
              <input style={{
                border: 'none',
                bgcolor: '#FAFAFA',
                outline: 'none'

              }} />
              <IconButton style={{
                borderRadius: '50%',
                backgroundColor: '#7eb693',
                width: '57px',
                height: '57px'
              }}>
                <IconSearch />
              </IconButton>
            </Stack>
            <Stack direction={'row'} border={'1px solid #e0e0e0'} borderRadius={'33px'} pt={'0px'} pb={'0px'} pr={'23px'} pl={'6px'}>
              <IconButton>
                <IconKorzinka />
              </IconButton>
              <LinkData>Cart (0)</LinkData>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

