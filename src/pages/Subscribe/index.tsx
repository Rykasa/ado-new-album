import * as C from './styles'

export function Subscribe(){
  return(
    <C.Container>
      <C.CenterDiv>
        <C.InfoWrapper>
          <C.Title>Ado</C.Title>
          <C.AlbumTitle>
            <span>New Album</span>
            <strong>『ウタの歌 ONE PIECE FILM RED』</strong>
          </C.AlbumTitle>
          <C.ReleaseText>10.8.2022 Release</C.ReleaseText>
        </C.InfoWrapper>
        <C.FormWrapper>
          <C.FormText>Subscribe to follow the new releases</C.FormText>
          <C.FormContent>
            <C.Form>
              <C.Input type="text"  placeholder="Your name" />
              <C.Input type="email"  placeholder="Your email" />
              <C.Button type='submit'>Subscribe</C.Button>
            </C.Form>
          </C.FormContent>
        </C.FormWrapper>
      </C.CenterDiv>
    </C.Container>
  )
}