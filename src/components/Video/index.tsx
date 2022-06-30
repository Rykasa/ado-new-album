import * as C from './styles'
import {  Youtube ,Player, DefaultUi } from '@vime/react'
// import Youtube from 'react-youtube'
import { FaLink, FaTwitter, FaYoutube } from 'react-icons/fa'

import '@vime/core/themes/default.css';

export function Video(){
  return(
    <C.Container>
      <C.VideoContainer>
        <C.Video>
          <Player>
            <Youtube videoId="sk1Z-Hqwwog" /> 
            <DefaultUi />
          </Player>
        </C.Video>
      </C.VideoContainer>
      <C.InfoWrapper>
        <C.InfoHeader>
          <C.MusicVideoInfo>
            <C.MusicVideoTitle>私は最強 - ウタ from ONE PIECE FILM RED</C.MusicVideoTitle>
            <C.MusicVideoDescription>いつかの夢が  私の心臓</C.MusicVideoDescription>
            <C.SingerInfo>
              <C.SingerImage src="https://yt3.ggpht.com/nt3XgEI74R1VvNmQN22CLrSuEE838KKN5e9XpHpzcRvGIbAOVtTdYr_zR35YHiuYufEKaP3osg=s88-c-k-c0x00ffffff-no-rj" alt="Ado" />
              <C.SingerSocial>
                <C.SingerName>Ado</C.SingerName>
                <C.SingerSocialLinks>
                  <C.SocialLink href="https://twitter.com/ado1024imokenp" target="_blank">
                    <FaTwitter />
                  </C.SocialLink>
                  <C.SocialLink href="https://www.youtube.com/c/Ado1024" target="_blank">
                    <FaYoutube />
                  </C.SocialLink>
                </C.SingerSocialLinks>
              </C.SingerSocial>
            </C.SingerInfo>
            <C.FeatDiv>
              <C.FeatName>feat. <strong>Vaundy</strong></C.FeatName>
              <C.FeatSocial>
                <C.SocialLink href="https://twitter.com/vaundy_engawa" target="_blank">
                  <FaTwitter />
                </C.SocialLink>
                <C.SocialLink href="https://www.youtube.com/c/Vaundy" target="_blank">
                  <FaYoutube />
                </C.SocialLink>
              </C.FeatSocial>
            </C.FeatDiv>
          </C.MusicVideoInfo>
          <C.ButtonsWrap>
            <C.Button href="https://www.youtube.com/watch?v=sk1Z-Hqwwog" target="_blank"> <FaYoutube size={24} /> Watch on Youtube</C.Button>
            <C.Button href="https://www.onepiece-film.jp/uta/" target="_blank"> <FaLink  size={20} /> Official site</C.Button>
          </C.ButtonsWrap>
        </C.InfoHeader>
      </C.InfoWrapper>
    </C.Container>
  )
}