import { Navbar } from '../../components/Navbar'
import { Sidebar } from '../../components/Sidebar'
import { Video } from '../../components/Video'
import * as C from './styles'

export function MVEvent(){
  return(
    <>
      <Navbar />
      <C.Content>
        <Video />
        <Sidebar />
      </C.Content>
    </>
  )
}