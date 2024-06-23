import React from 'react';
import PropTypes from 'prop-types';

const buttonStyle = (largura, altura, cor) => ({
  width: largura,
  height: altura,
  backgroundColor: cor,
  borderRadius: '15px',
  fontWeight: '500',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.1em',
  border: 'none',
  padding: '10px',
  cursor: 'pointer',
  color: "white",
  marginTop: "5%"
});

const BtnNav = ({ largura, cor, svg, texto, altura }) => {
  return (
    <button style={buttonStyle(largura, altura, cor)}>
      {svg}
      <span>{texto}</span>
    </button>
  );
};

BtnNav.propTypes = {
  largura: PropTypes.string.isRequired,
  cor: PropTypes.string.isRequired,
  svg: PropTypes.element.isRequired,
  texto: PropTypes.string.isRequired,
  altura: PropTypes.string.isRequired,
};

export default BtnNav;
