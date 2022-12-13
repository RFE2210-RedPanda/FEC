import React from 'react';
import styled from 'styled-components';

const DataContainer = styled.div`
position:relative ;
width: 75%;
max-width: 900px;
margin: 0 auto;

`

const Description = ({ productData }) => {

  return (
   <DataContainer>
    <h3>{productData.slogan}</h3>
    <p>{productData.description}</p>
   </DataContainer>
  )
}

export default Description;