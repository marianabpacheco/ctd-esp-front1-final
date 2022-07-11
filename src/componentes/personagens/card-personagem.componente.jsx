import BotaoFavorito from "../botoes/botao-favorito.componente";
import "./card-personagem.css";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCharactersStart, filterCharactersStart } from '../../actions/index';
import { useEffect } from "react";

/**
 * Card para cada personagem dentro da grade de personagem.
 *
 * Você precisará adicionar as propriedades necessárias para exibir os dados dos personagens
 *
 *
 * @returns Elemento JSX
 */
function CardPersonagem({ characters, fetchCharactersStart, filterCharactersStart }) {
  useEffect(() => fetchCharactersStart(), [fetchCharactersStart]);
  return (
    <>{
      characters.isFetching ? (
        <span>Carregando...</span>
      ) : (
        <>
          {
            characters.characters.map(character => (
              <div className="card-personagem" key={character.id}>
                <img
                  src={character.image}
                  alt={character.name}
                />
                <div className="card-personagem-body">
                  <span>{character.name}</span>
                  {/* <BotaoFavorito isFavorito={false} /> */}
                </div>

              </div>
            ))}
        </>)}
    </>
  );
}

const mapStateToProps = (state) => ({
  characters: state.characters,
})


const mapDispatchToProps = dispatch => bindActionCreators({
  fetchCharactersStart, filterCharactersStart,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CardPersonagem);
