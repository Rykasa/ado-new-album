import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  background: linear-gradient(var(--dark-color) 60%, 90%, #35191b);
`;

export const CenterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5rem 7rem;
  max-width: 1300px;

  @media (max-width: 1090px){
    flex-direction: column;
    align-items: center;
    padding: 2rem 1.5rem;
  }
`;

export const InfoWrapper = styled.div`
  @media (max-width: 1090px){
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-family: 'Noto serif', serif;
  font-size: 3rem;
  letter-spacing: .1rem;
  color: #fff;
  margin-bottom: 1rem;

  @media (max-width: 1150px){
    font-size: 2.5rem;
  }
`;

export const AlbumTitle = styled.div`
  span{
    display: block;
    font-size: 1rem;
    color: var(--primary-color);
  }
  strong{
    color: var(--primary-color);
    font-size: 2rem;
    margin-left: -1rem;
    display: block;

  }

  @media (max-width: 1150px){
    span{
      font-size: .875rem;
    }

    strong{
      font-size: 1.875rem;
    }
  }

  @media (max-width: 700px){
    strong{
      font-size: 1.5rem;
    }
  }

  @media (max-width: 420px){
    strong{
      font-size: 1.25rem;
    }
    text-align: center;
  }
`;

export const ReleaseText = styled.span`
  color: #fff;
  font-size: 1.25rem;
  letter-spacing: .1rem;

  @media (max-width: 1150px){
    font-size: 1rem;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormContent = styled.div`
  padding: 2rem;
  border-radius: .25rem;
  height: max-content;
  width: max-content;

  @media (max-width: 1090px){
    padding: 1rem;
    width: 100%;
  }
`;

export const FormText = styled.span`
  color: #fff;
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  display: block;
  letter-spacing: .1rem;
  font-weight: bold;


  @media (max-width: 1150px){
    font-size: 1.125rem;
    margin-bottom: 0rem;
    text-align: center;
  }

  @media (max-width: 700px){
    font-size: 1rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`;

export const Input = styled.input`
  height: 3.5rem;
  border-radius: .25rem;
  border: .0625rem solid #8D8D99;
  color: #8D8D99;
  padding: 1rem;
  width: 19rem;
  font-size: 1rem;
  background: var(--dark);

  &:focus{
    outline: none;
  }

  @media (max-width: 1090px){
    width: 100%;
  }
`;

export const Button = styled.button`
  padding: 1rem;
  font-size: .875rem;
  text-transform: uppercase;
  background-color: var(--primary-color);
  border: none;
  border-radius: .25rem;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  transition: background-color .3s linear; 
  width: 19rem;


  &:hover{
    background-color: var(--primary-color-dark)
  }

  @media (max-width: 1090px){
    width: 100%;
  }
`;