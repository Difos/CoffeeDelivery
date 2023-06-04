import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 10rem 1rem 10rem;

  img {
    width: 5rem;
    height: 5rem;
  }

  nav {
    gap: 6.5rem;
    display: flex;

    .location {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 130%;

      background-color: ${(props) => props.theme['purple-light']};

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 8px;
      gap: 4px;

      width: 143px;
      height: 48px;
      color: ${(props) => props.theme['purple-dark']};
      border-radius: 6px;
    }

    .locationLogo {
      color: ${(props) => props.theme['purple-dark']};
    }

    .cart {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 8px;
      gap: 4px;

      width: 48px;
      height: 48px;

      /* Brand/Yellow Light */

      background: #f1e9c9;
      border-radius: 6px;

      /* Inside auto layout */

      flex: none;
      order: 1;
      flex-grow: 0;

      span {
        position: absolute;
        font-size: 9px;
        justify-content: center;
        display: flex;
        flex-direction: column;
        width: 15px;
        height: 15px;
        padding-left: 5px;
        border-radius: 50%;
        background-color: ${(props) => props.theme['yellow-dark']};
        color: ${(props) => props.theme.white};

        margin-top: -50px;
        margin-left: 35px;
      }
    }

    .cartLogo {
      color: ${(props) => props.theme['yellow-dark']};
    }

    a {
      width: 3rem;
      height: 3rem;

      justify-content: center;

      text-decoration: none;
      color: ${(props) => props.theme['gray-100']};
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      &.active {
        color: ${(props) => props.theme['purple-dark']};
      }

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['purple-dark']};
      }
    }
  }
`
