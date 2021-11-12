import React from 'react';
import { Table } from 'reactstrap';

const Footer = (props) => {
  return (
    <Table borderless>
      <thead>
        <tr>
          <th>#</th>
          <th>Volta Redonda</th>
          <th>Empresas</th>
          <th>Telefones Utíl</th>        
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>JHC HOME CONSILT</td>
          <td>JHC</td>
          <td>24-999-99999</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>ELEVOLT</td>
          <td>ELEVOLT</td>
          <td>24-9999-9999</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>VIVO</td>
          <td>VIVO FIBRA</td>
          <td>24-9999-9999</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Footer;