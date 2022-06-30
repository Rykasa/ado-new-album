import styled from 'styled-components'

export const container = styled.a`
  cursor: pointer;
  display: block;

  & + & {
      margin-top: 2rem;
  }

  &:last-of-type{
    padding-bottom: 2rem;
  }
`;

export const date = styled.span`
  font-size: 1rem;
  line-height: 1.625rem;
  color: #8D8D99;
  margin-bottom: .5rem;
  display: block;
`;

export const MVContainer = styled.div`
  border: .0625rem solid #8D8D99;
  border-radius: .25rem;
  padding: 1rem;
  /* background-color: var(--primary-color);
  border-color: var(--primary-color); selected */
  position: relative;

  &:before{
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: -1rem;
    top: 50%;
    border-left: 0 solid transparent;
    border-bottom: 1.25rem solid transparent;
    border-top: 0 solid transparent;
    border-right: 1.25rem solid transparent;
    transform: rotate(45deg) translateY(-65%);
    /* border-color: var(--primary-color); */
  }
`;


export const MVHeader = styled.header`
  display: flex;
  align-items: center;
  gap: .5rem;
  margin-bottom: 1rem;
  font-size: .875rem;
  line-height: 1.375rem;
  color: #F9ABBB; //released
  /* color: #B75C4F; coming*/
  /* color: #fff; selected*/
  font-weight: 600;
`;

export const MVDesc = styled.span`
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.625rem;
  color: #fff;
`;