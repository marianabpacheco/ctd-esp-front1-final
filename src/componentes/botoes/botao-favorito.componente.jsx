import "./botao-favorito.css";
import star from "../../imagens/star.png";
import starFilled from "../../imagens/star-filled.png";
import { useState } from 'react'
/**
 * Botão que indica se um elemento é favorito ou não, e dá a possibilidade de marcá-lo/desmarcá-lo
 *
 * Terá que tipar as propriedades se utilizar este componente
 *
 *
 * @returns Elemento JSX
 */
const BotaoFavorito = ({ isFavorito, onClick }) => {

  const src = isFavorito ? starFilled : star;

  

return (
  <div className="botao-favorito" >
    <img src={src} alt={"favorito"} />
  </div>
);
};

export default BotaoFavorito;
