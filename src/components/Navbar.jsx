import React from 'react'
import styled from 'styled-components'
import { links } from '../data'

const Container = styled.nav`
  position: sticky;
  top: 0px;
  height: 70px;
  background-color: black;
  opacity: 0.75;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px 0px 30px;
  margin-bottom: -70px;
  z-index: 5;
`
const Logo = styled.span`
  color: white;
  font-family: 'MonteCarlo', cursive;
  font-size: 2.5rem;
`
const Menu = styled.ul`
  display: flex;
  list-style: none;
`
const MenuItem = styled.li`
  white-space: nowrap;
`
const MenuItemLink = styled.a`
  font-size: 0.85rem;
  text-decoration: none;
  color: rgb(255, 255, 255);
  text-align: center;
  padding: 10px;
  margin: 0px 5px;
  border-style: solid;
  border-width: 0px 0px 1px 0px;
  border-color: transparent;
  transition: 250ms;
`

const Navbar = () => {
  return (
    <Container>
      <Logo />
      <Menu>
        {links.map((link) => {
          return (
            <MenuItem key={link.id}>
              <MenuItemLink href={link.url}>{link.text}</MenuItemLink>
            </MenuItem>
          )
        })}
      </Menu>
    </Container>
  )
}

export default Navbar
