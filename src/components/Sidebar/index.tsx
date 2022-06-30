import { useGlobalContext } from '../../hooks/useGlobalContext'
import { MusicVideo } from '../MusicVideo'
import * as C from './styles'

export function Sidebar(){
  const { isMenuOpen } = useGlobalContext()
  return(
    <C.Aside isMenuOpen={isMenuOpen}>
      <C.AsideCenter className="center">
        <C.AsideHeading>Ado Full Album</C.AsideHeading>
        <C.MusicVideoWrapper>
          <MusicVideo />
          <MusicVideo />
          <MusicVideo />
          <MusicVideo />
          <MusicVideo />
        </C.MusicVideoWrapper>
      </C.AsideCenter>
    </C.Aside>
  )
}