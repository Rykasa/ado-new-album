import { useParams } from 'react-router-dom'
import { Navbar } from '../../components/Navbar'
import { Sidebar } from '../../components/Sidebar'
import { Video } from '../../components/Video'
import * as C from './styles'

export function MVEvent(){
  const { slug } = useParams<{ slug: string }>()
  
  return(
    <>
      <Navbar />
      <C.Content>
        <Video videoSlug={slug} />
        <Sidebar />
      </C.Content>
    </>
  )
}