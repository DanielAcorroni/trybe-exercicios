import React, { Component } from 'react'

export default class InputHouseType extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <div onChange={ handleChange }>
        <label htmlFor="radio-apartament">
          <input type="radio" name="houseType" id="radio-apartament" value='apartamento' />
          Apartamento
        </label>
        <label htmlFor="radio-house">
          <input type="radio" name="houseType" id="radio-house" value='casa' />
          Casa
        </label>
      </div>
    )
  }
}
