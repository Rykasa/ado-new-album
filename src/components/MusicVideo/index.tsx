import { format, isPast, parseISO } from 'date-fns';
import { FaLock, FaRegCheckCircle } from 'react-icons/fa'
import { useParams } from 'react-router-dom';
import * as C from './styles' 

interface MusicVideoProps{
  available_at: Date;
  title: string;
  slug: string;
}

export function MusicVideo({ available_at, title, slug: props_slug }: MusicVideoProps){
  const { slug } = useParams<{ slug: string }>()

  const isVideoReleased = isPast(parseISO(available_at.toString()))
  const availableDateFormatted = format(new Date(available_at), "dd MMM yyyy")

  const isActiveVideo = slug === props_slug
  return(
    <C.container to={`/video/${props_slug}`} isVideoReleased={isVideoReleased}>
      <C.date>
        {availableDateFormatted}
      </C.date>
      <C.MVContainer isActiveVideo={isActiveVideo}>
        {isVideoReleased ? (
          <C.MVHeader isVideoReleased={isVideoReleased} isActiveVideo={isActiveVideo}>
            <FaRegCheckCircle size={20} />
            Released
          </C.MVHeader>
        ) : (
          <C.MVHeader isVideoReleased={isVideoReleased} isActiveVideo={isActiveVideo}>
            <FaLock size={20} />
            Cooming soon
          </C.MVHeader>
        )}
        <C.MVDesc>
          {title}
        </C.MVDesc>
      </C.MVContainer>
    </C.container>
  )
}