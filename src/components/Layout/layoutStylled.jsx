import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const HeaderCss = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 16px;
  gap: 12px;
  height: 5rem;
  overflow: visible;
  background-color: transparent;
  z-index: 1;
  border-bottom: 1px solid var(--color-cornflower);
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);

 
`;
export const NavigationCss = styled.nav`
    display: flex;

`;

export const NavListcss = styled.ul`
 list-style: none;
    display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 40px;
 
`;

export const NavLinkCss = styled(NavLink)`
     text-decoration: none;
  font-weight: 500;
  font-size: 1.5rem;
  color: #125b9f;
  transition: all 0.3s ease-in-out;
  position: relative;
  margin-left: 30px;

  &:hover,
  &:focus {
    color: #5cabf5;
  }

  &.active:after {
    content: '';
    width: 100%;
    height: 3px;
    background: #eeaeca;
    display: block;
    border-radius: 2px;
    position: absolute;
    bottom: -5px;
    left: 0;
  }
`;