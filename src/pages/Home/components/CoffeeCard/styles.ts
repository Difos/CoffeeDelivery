import styled from 'styled-components'

export const BasedCoffeCard = styled.div`
  background: ${(props) => props.theme.white};

  height: 19.375rem;
  /* Base/Card */

  background: ${(props) => props.theme['gray-100']};
  border-radius: 6px 36px;

  text-align: center;
`

export const CoffeeCard = styled(BasedCoffeCard)`
  /* padding: 1rem 10rem 1rem 10rem; */

  width: 16rem;
  .imgContainer {
    text-align: center;
    display: block;
  }

  img {
    margin-top: -1rem;
    padding: 0 auto;
  }

  .CoffeTagContainer {
    display: flex;
    flex-direction: row;

    margin: 0 3.125rem;
  }

  .titleCoffee {
    height: 26px;

    /* Title/Title S */

    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
    /* identical to box height, or 26px */

    /* Base/Subtitle */
    color: ${(prop) => prop.theme.black};
  }

  .CoffeeSubject {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;

    text-align: center;
    /* Base/Label */

    color: #8d8686;

    margin-top: 8px;
  }

  .lblAmountCoffee {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 130%;
    /* or 18px */

    text-align: right;

    /* Base/Text */

    color: ${(prop) => prop.theme['gray-500']};
  }

  .amountContainer {
    margin-top: 33px;
  }
`

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  text-align: center;
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-500']};

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`

export const CoffeAmout = styled(BaseInput)`
  width: 4rem;
`
export const CoffeTag = styled.span`
  display: flex;
  flex-direction: space-between;
  justify-content: center;
  align-items: center;

  width: 81px;
  height: 21px;

  margin: 16px 0px 16px;

  /* Brand/Yellow Light */

  background: ${(prop) => prop.theme['yellow-light']};
  border-radius: 6.25rem;

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 130%;
    /* identical to box height, or 13px */

    text-transform: uppercase;

    /* Brand / Yellow Dark */

    color: ${(prop) => prop.theme['yellow-dark']};
  }
`

export const CartButton = styled.button`
  padding: 8px;
  gap: 8px;
  border: 0;
  width: 38px;
  height: 38px;
  justify-content: center;

  cursor: pointer;
  /* Brand/Purple Dark */

  background: ${(prop) => prop.theme['purple-dark']};
  border-radius: 6px;
  /* Inside auto layout */

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme.purple};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }

  &:hover {
    background: ${(props) => props.theme.purple};
  }
`
