import styled from 'styled-components'

export const BannerContainer = styled.div`
  max-width: 88rem;

  margin: 5rem auto;
  padding: 1rem 10rem 1rem 10rem;

  background: ${(props) => props.theme.white};
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  img {
    position: absolute;
    width: 476px;
    height: 360px;
    left: calc(50% - 476px / 2 + 322px);
  }

  section {
    h1 span {
      color: #00bfa6;
      font-weight: bold;
    }

    p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 130%;

      /* or 26px */
      /* or 62px */
    }

    p:nth-child(-n + 2) {
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 800;
      font-size: 48px;
      line-height: 130%;
      color: ${(props) => props.theme.black};
    }

    .wrapperMenu p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
    }

    .wrapperMenu div {
      display: flex;
      gap: 1rem;
      align-items: center;
      padding-bottom: 12px;
    }

    .wrapperMenu {
      padding-top: 40px;
    }

    .shoppingCart {
      border-radius: 50%;
      background-color: ${(props) => props.theme['yellow-dark']};
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 8px;
      gap: 8px;

      width: 32px;
      height: 32px;

      .shoppingCartLogo {
        color: white;
      }
    }

    .cube {
      border-radius: 50%;
      background-color: ${(props) => props.theme.black};
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 8px;
      gap: 8px;

      width: 32px;
      height: 32px;

      .cubeLogo {
        color: white;
      }
    }
    .timer {
      border-radius: 50%;
      background-color: ${(props) => props.theme.yellow};
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 8px;
      gap: 8px;

      width: 32px;
      height: 32px;

      .timerLogo {
        color: white;
      }
    }
    .coffee {
      border-radius: 50%;
      background-color: ${(props) => props.theme.purple};
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 8px;
      gap: 8px;

      width: 32px;
      height: 32px;

      .coffeeLogo {
        color: white;
      }
    }
  }
`
