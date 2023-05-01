import React from 'react'
import './MiceTable.css'

export default function MiceTable( {product} ) {
  return (
    <table className="table w-75 mx-auto fs-5 text-center">
  <thead>
    <tr>
      <th>Karakteristika</th>
      <th>Vrednost</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Kategorija</td>
      <td>Miš</td>
    </tr>
    <tr>
      <td>Broj tastera</td>
      <td>{product.buttons}</td>
    </tr>
    <tr>
      <td>Osvetljenje</td>
      <td>{product.lighting}</td>
    </tr>
    <tr>
      <td>Platforma</td>
      <td>{product.platform}</td>
    </tr>
    <tr>
      <td>Proizvođač</td>
      <td>{product.manufacturer}</td>
    </tr>
    <tr>
      <td>Tip</td>
      <td>{product.type}</td>
    </tr>
  </tbody>
</table>
  )
}
