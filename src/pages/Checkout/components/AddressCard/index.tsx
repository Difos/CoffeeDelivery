import {
  AddressCardContainer,
  TelephoneInput,
  StreetInput,
  NumberInput,
  ComplementInput,
  NeighborhoodInput,
  CityInput,
  StateInput,
  FormAddress,
  Map,
} from './styles'

interface IAddress {
  telephone: string
  street: string
  numberStreet: number
  complement: string
  neighbourhood: string
  city: string
  state: string
}

interface AddressCardProps {
  address: IAddress
  onAddressChange: (updatedAddress: IAddress) => void
}

export function AddressCard({ address, onAddressChange }: AddressCardProps) {
  const handleInputChange = (event: any) => {
    const { name, value } = event.target
    onAddressChange({ ...address, [name]: value })
  }

  return (
    <AddressCardContainer>
      <div className="Address">
        <Map size={24}></Map>
        <div className="Controls">
          <div className="TextControls">
            <span>Endereço de Entrega</span>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </div>
      </div>

      <FormAddress>
        <div className="fieldset-wrapper">
          <div className="input-wrapper">
            <TelephoneInput
              name="telephone"
              placeholder="Telefone"
              value={address.telephone}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-wrapper">
            <StreetInput
              name="street"
              placeholder="Rua"
              value={address.street}
              onChange={handleInputChange}
            />
          </div>

          <div className="col-2">
            <div className="input-wrapper">
              <NumberInput
                name="numberStreet"
                placeholder="Número"
                value={address.numberStreet}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-wrapper">
              <ComplementInput
                name="complement"
                placeholder="Complemento"
                value={address.complement}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="col-2">
            <div className="input-wrapper">
              <NeighborhoodInput
                name="neighbourhood"
                placeholder="Bairro"
                value={address.neighbourhood}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-wrapper">
              <CityInput
                name="city"
                placeholder="Cidade"
                value={address.city}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-wrapper">
              <StateInput
                name="state"
                placeholder="Estado"
                value={address.state}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      </FormAddress>
    </AddressCardContainer>
  )
}
