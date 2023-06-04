import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 88rem;
  /* height: calc(100vh - 10rem); */
  margin: 5rem auto;
  padding: 2.5rem;

  background: ${(props) => props.theme.white};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`

export const TitleContainer = styled.div`
  .wrapperTitle {
  }

  .title {
    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: 700;
    font-size: 10rem;
    line-height: 180px;
    color: ${(props) => props.theme.white};
    max-width: 88rem;
    font-size: 160px;
    margin: 5rem auto;
    display: flex;
    flex-direction: column;
    margin-bottom: -70px;
  }

  .subtitle {
    max-width: 88rem;
    font-size: 5rem;
    margin: 5rem auto;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    line-height: 94px;
    color: ${(props) => props.theme.white};
    display: flex;
    flex-direction: column;
  }
`
