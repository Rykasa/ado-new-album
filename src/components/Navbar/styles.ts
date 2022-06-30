import styled from "styled-components";

export const Nav = styled.nav`
  height: 4.5rem;
  background: var(--primary-color-dark);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
`;

export const NavCenter = styled.div`
  width: 100%;
  padding: 2rem;
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  background: linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, 0.3));

  @media (max-width: 900px){
    padding: 1rem;
    font-size: 1rem;
  }
`;

export const NavTitle = styled.strong`
  font-size: 2rem;
  color: #fff;
  letter-spacing: .1rem;
  
  @media (max-width: 900px){
    font-size: 1.75rem;
  }
`;

export const NavText = styled.span`
  font-size: 1.75rem;
  color: #fff;
  letter-spacing: .1rem;
  font-weight: bold;

  @media (max-width: 900px){
    font-size: 1.5rem;
  }
`;

export const Menu = styled.button`
  background: none;
  width: 2rem;
  height: 2rem;
  font-size: 1.75rem;
  display: none;
  justify-content: center;
  align-items: center;
  border: .0625rem solid transparent;
  color: #F9ABBB;
  cursor: pointer;
  transition: all .3s ease-in-out;

  &:hover{
    color: var(--primary-color);
  }

  @media (max-width: 900px){
    display: flex;
  }
`;
