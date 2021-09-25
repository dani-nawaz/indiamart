import styled from 'styled-components/macro'
export const Inner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  margin-bottom: 1rem;
  padding: 1rem;
  color: #000000;

  border-radius: 20px;
  background-color: #fffffe;
  width: 100%;
  @media (max-width: 1000px) {
    flex: column;
  }
`
export const Container = styled.div``
export const Pane = styled.div`
  width: 50%;
  margin: 1rem;
`
export const Img = styled.img`
  width: 100%;
  height: 100%;

  background: linear-gradient(
    to bottom,
    rgba(10, 10, 10, 0) 0,
    #161616 61%,
    #1e1e1e 100%
  );

  opacity: 0.8;

  /* margin: 15px 15px 0; */
`
export const Title = styled.h2`
  color: var(--darkpara);
  font-weight: 700;
`
export const SubTitle = styled.p`
  color: var(--darkpara);
  font-weight: 500;
`
