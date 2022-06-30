import { FaBars, FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../../hooks/useGlobalContext';
import *  as C from './styles';

export function Navbar(){
  const { isMenuOpen, openMenu, closeMenu } = useGlobalContext()
  return(
    <C.Nav>
      <C.NavCenter>
        <C.NavTitle>
            Ado
        </C.NavTitle>
        <C.NavText>ウタの歌</C.NavText>
        {isMenuOpen ? (
          <C.Menu 
            type="button"
            onClick={closeMenu}
          >
            <FaTimes />
          </C.Menu>
        ) : (
          <C.Menu 
            type="button"
            onClick={openMenu}
          >
            <FaBars />
          </C.Menu>
        )}
      </C.NavCenter>
    </C.Nav>
  )
}