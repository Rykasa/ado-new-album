import * as C from './styles';
import {  Youtube ,Player, DefaultUi } from '@vime/react';
import { FaLink, FaTwitter, FaYoutube } from 'react-icons/fa';

import singerAvatarUrl from '../../assets/ado-profile.jpg';

import '@vime/core/themes/default.css';
import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface VideoType{
  videoSlug: string | undefined;
}

interface getSingleMusicVideoResponse{
  available_at: string;
  description: string;
  slug: string;
  title: string;
  video_id: string;
  singer: {
    name: string;
    avatar_url: string;
    twitter: string;
    youtube: string;
  }
  feat: {
    name: string;
    twitter: string;
    youtube: string;
  }
}


export function Video({videoSlug}: VideoType){
  const [video, setVideo] = useState<getSingleMusicVideoResponse | null>(null)
  const navigate = useNavigate()

  async function getSingleMusicVideo(){
    const result = await api.get<getSingleMusicVideoResponse>(`/video/${videoSlug}`)
    const { data } = result
    setVideo(data)
    
    if(data === null){
      navigate('/video/1')
    }
  }

  useEffect(() =>{
    const hasToken = localStorage.getItem('@adoplaylist:token')
    if(!hasToken){
      navigate('/')
    }
  }, [])

  useEffect(() =>{
    setVideo(null)
    getSingleMusicVideo()
  }, [videoSlug])

  if(!video){
    return (
      <C.Loader>
        <C.LoaderIcon />
      </C.Loader>
    )
  }

  return(
    <C.Container>
      <C.VideoContainer>
        <C.Video>
          <Player>
            <Youtube videoId={video.video_id}/> 
            <DefaultUi />
          </Player>
        </C.Video>
      </C.VideoContainer>
      <C.InfoWrapper>
        <C.InfoHeader>
          <C.MusicVideoInfo>
            <C.MusicVideoTitle>{video.title}</C.MusicVideoTitle>
            <C.MusicVideoDescription>{video.description}</C.MusicVideoDescription>
            <C.SingerInfo>
              <C.SingerImage src={singerAvatarUrl} alt={video.singer.name} />
              <C.SingerSocial>
                <C.SingerName>{video.singer.name}</C.SingerName>
                <C.SingerSocialLinks>
                  <C.SocialLink href={video.singer.twitter} target="_blank">
                    <FaTwitter />
                  </C.SocialLink>
                  <C.SocialLink href={video.singer.youtube} target="_blank">
                    <FaYoutube />
                  </C.SocialLink>
                </C.SingerSocialLinks>
              </C.SingerSocial>
            </C.SingerInfo>
            {video.feat && (
              <C.FeatDiv>
                <C.FeatName>feat. <strong>{video.feat.name}</strong></C.FeatName>
                <C.FeatSocial>
                  <C.SocialLink href={video.feat.twitter} target="_blank">
                    <FaTwitter />
                  </C.SocialLink>
                  <C.SocialLink href={video.feat.youtube} target="_blank">
                    <FaYoutube />
                  </C.SocialLink>
                </C.FeatSocial>
              </C.FeatDiv>
            )}
          </C.MusicVideoInfo>
          <C.ButtonsWrap>
            <C.Button href={`https://www.youtube.com/watch?v=${video.video_id}`} target="_blank"> <FaYoutube size={24} /> Watch on Youtube</C.Button>
            <C.Button href="https://www.onepiece-film.jp/uta/" target="_blank"> <FaLink  size={20} /> Official site</C.Button>
          </C.ButtonsWrap>
        </C.InfoHeader>
      </C.InfoWrapper>
    </C.Container>
  )
}