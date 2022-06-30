import { FaLock, FaRegCheckCircle } from 'react-icons/fa'
import * as C from './styles' 

export function MusicVideo(){
  return(
    <C.container>
      <C.date>
        Jun 22, 2022
      </C.date>
      <C.MVContainer>
        {true ? (
          <C.MVHeader>
            <FaRegCheckCircle size={20} />
            Released
          </C.MVHeader>
        ) : (
          <C.MVHeader>
            <FaLock size={20} />
            Cooming soon
          </C.MVHeader>
        )}
        <C.MVDesc>
          【Ado】私は最強 (ウタ from ONE PIECE FILM RED)
        </C.MVDesc>
      </C.MVContainer>
    </C.container>
  )
}