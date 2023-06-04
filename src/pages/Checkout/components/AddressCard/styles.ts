import styled from 'styled-components'
import { MapPin } from 'phosphor-react'

export const AddressCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 32px;

  width: 640px;

  /* Base/Card */

  background: ${(prop) => prop.theme['gray-100']};
  border-radius: 6px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

  .Controls {
    display: flex;
    flex-direction: row;
    gap: 2px;
  }

  .TextControls {
    display: flex;
    flex-direction: column;
    gap: 12px;

    span:first-child {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      /* identical to box height, or 21px */

      display: flex;
      align-items: center;

      /* Base/Subtitle */

      color: #403937;

      /* Inside auto layout */

      flex: none;
      order: 0;
      align-self: stretch;
      flex-grow: 0;
    }

    span:nth-child(2) {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
      /* or 18px */

      display: flex;
      align-items: center;

      /* Base/Text */

      color: #574f4d;

      /* Inside auto layout */

      flex: none;
      order: 1;
      align-self: stretch;
      flex-grow: 0;
    }
  }

  .Address {
    display: flex;
    align-items: center;
    align-items: flex-start;

    margin-top: 1rem;
    img {
      width: 64px;
      height: 64px;
      padding: 0 auto;
    }
  }
`

export const Map = styled(MapPin)`
  color: ${(prop) => prop.theme['yellow-dark']};
`
export const FormAddress = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  width: 560px;
  height: 216px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;

  .fieldset-wrapper {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .col-2 {
    display: flex;
    gap: 20px;
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
  }
`

const BaseInput = styled.input`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  gap: 4px;

  height: 42px;

  /* Base/Input */

  background: #eeeded;
  /* Base/Button */

  border: 1px solid #e6e5e5;
  border-radius: 4px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`

export const TelephoneInput = styled(BaseInput)`
  width: 200px;
`

export const StreetInput = styled(BaseInput)`
  width: 100%;
`
export const NumberInput = styled(BaseInput)`
  width: 200px;
`

export const ComplementInput = styled(BaseInput)`
  width: 352px;
`
export const NeighborhoodInput = styled(BaseInput)`
  width: 200px;
`
export const CityInput = styled(BaseInput)`
  width: 276px;
`
export const StateInput = styled(BaseInput)`
  width: 57px;
`
