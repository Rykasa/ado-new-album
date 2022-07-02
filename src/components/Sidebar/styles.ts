import styled from "styled-components";

export const Aside = styled.aside<{ isMenuOpen: boolean }>`
  min-height: calc(100vh - 4.5rem);
  max-height: 712px;
  width: 21.75rem;
  background-color: var(--dark-color);  
  margin-left: auto;
  overflow-y: scroll;

  ::-webkit-scrollbar{
    display: none;
  }

  @media (max-width: 900px){
    transition: top .5s linear;

    position: absolute;
    width: 100%;
    height: fit-content;
    top: 4.5rem;
    top: ${({isMenuOpen}) => isMenuOpen ? '4.5rem' :  '-150%'};
    left: 0;
    z-index: 50;
    /* display: ${({isMenuOpen}) => isMenuOpen ? 'block' : 'none'}; */
  }
`;

export const AsideCenter = styled.div`
  padding: 1.5rem;
  width: 100%;
  height: 100%;
`;

export const AsideHeading = styled.span`
  color: #fff;
  padding-bottom: 1.5rem;
  display: block;
  border-bottom: .0625rem solid var(--light-gray);
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 2.125rem;
`;

export const MusicVideoWrapper = styled.div`
  padding-top: 1.5rem;
`;