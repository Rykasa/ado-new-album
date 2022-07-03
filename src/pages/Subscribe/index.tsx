import { AxiosError } from 'axios'
import { FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ErrorMessage } from '../../components/ErrorMessage'
import { api } from '../../services/api'
import * as C from './styles'

interface CreateSubscriberResponse{
  token: string;
}

export function Subscribe(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [haveError, setHaveError] = useState(false)
  const [message, setMessage] = useState('')

  const navigate = useNavigate()

  async function handleCreateSubscriber(e: FormEvent){
    e.preventDefault()

    if(name.trim() === '' || email.trim() === ''){
      setHaveError(true)
      setMessage('Name or Email fields cannot be empty')
      return;
    }

    try{
      const result = await api.post<CreateSubscriberResponse>('/createSubscriber', {
        name,
        email
      })

      setHaveError(false)
      setMessage('')

      const { data } = result
      localStorage.setItem('@adoplaylist:token', data.token)

      navigate('/video/1')
    }catch(error){
      if(error instanceof AxiosError && error.response){
        if(error.response.statusText === 'Internal Server Error'){
          setHaveError(true)
          setMessage('Invalid Email')
        }else{
          setHaveError(true)
          setMessage('This Email Address is already in use')
        }
      }
    }
  }

  useEffect(() =>{
    const hasToken = localStorage.getItem('@adoplaylist:token')
    if(hasToken){
      navigate('/video/1')
    }
  }, [])

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
            <C.Form onSubmit={handleCreateSubscriber}>
              { haveError && <ErrorMessage message={message} /> } 
              <C.Input 
                type="text"  
                placeholder="Your name" 
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <C.Input 
                type="email"  
                placeholder="Your email" 
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <C.Button type='submit'>Subscribe</C.Button>
            </C.Form>
          </C.FormContent>
        </C.FormWrapper>
      </C.CenterDiv>
    </C.Container>
  )
}