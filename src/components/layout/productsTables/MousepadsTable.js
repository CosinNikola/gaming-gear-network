import React from 'react'
import './MousepadsTable.css'

export default function MousepadsTable({ product }) {
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
      <td>Podloga za miš</td>
    </tr>
    <tr>
      <td>Debljina</td>
      <td>{product.thickness}</td>
    </tr>
    <tr>
      <td>Dimenzije</td>
      <td>{product.dimensions}</td>
    </tr>
    <tr>
      <td>Proizvođač</td>
      <td>{product.manufacturer}</td>
    </tr>
  </tbody>
</table>
  )
}
