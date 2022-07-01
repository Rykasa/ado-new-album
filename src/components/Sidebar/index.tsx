import { useEffect, useState } from 'react'
import { useGlobalContext } from '../../hooks/useGlobalContext'
import { api } from '../../services/api'
import { MusicVideo } from '../MusicVideo'
import * as C from './styles'

interface MusicVideo{
  _id: string;
  available_at: Date;
  title: string;
  slug: string;
}

export function Sidebar(){
  const { isMenuOpen } = useGlobalContext()
  const [videos, setVideos] = useState<MusicVideo[]>([])
  
  async function getAllVideos(){
    const {data} = await api.get<MusicVideo[]>('/videos')
    setVideos(data)
  }

  useEffect(() =>{
    getAllVideos()
  }, [])

  return(
    <C.Aside isMenuOpen={isMenuOpen}>
      <C.AsideCenter className="center">
        <C.AsideHeading>Ado Full Album</C.AsideHeading>
        <C.MusicVideoWrapper>
          {videos.map((video) =>{
            return(
              <MusicVideo key={video._id} {...video} />
            )
          })}
          
        </C.MusicVideoWrapper>
      </C.AsideCenter>
    </C.Aside>
  )
}