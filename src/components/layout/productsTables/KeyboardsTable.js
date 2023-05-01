import React from 'react'
import './KeyboardsTable.css'

export default function KeyboardsTable({ product }) {
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
        <td>Tastatura</td>
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
        <td>Tip tastature</td>
        <td>{product.keyboard_type}</td>
      </tr>
      <tr>
        <td>Vrsta tastature</td>
        <td>{product.switches_type}</td>
      </tr>
      <tr>
        <td>Vrsta tastera</td>
        <td>{product.switches}</td>
      </tr>
    </tbody>
  </table>
  )
}
