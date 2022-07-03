import * as C from './styles'

interface ErrorMessageProps{
  message: string;
}

export function ErrorMessage({message}: ErrorMessageProps){
  return(
    <C.Error>{message}</C.Error>
  )
}