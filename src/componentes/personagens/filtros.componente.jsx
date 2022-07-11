import "./filtros.css";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCharactersStart, filterCharactersStart } from '../../actions/index';
import { useState } from "react";


const Filtros = ({characters,filterCharactersStart,fetchCharactersStart}) => {
  const [searchText, setSearchText] = useState("");

  function changeSearchText(event) {
    setSearchText(event.target.value);
  }

  function filterCharacters() {
    if (!searchText) {
      fetchCharactersStart();
    } else {
      console.log({searchText})
      filterCharactersStart(searchText);
    }
  }
  return (
  <>
  
    <div className="filtros">
      <label for="nome">Filtrar por nome:</label>
      <input
        type="text"
        value={searchText}
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nome"
        onChange={changeSearchText}
      />
    </div>
     <button type="button" onClick={filterCharacters} className={"primary"}>Filtrar</button>
     </>
  );
};

const mapStateToProps = (state) => ({
  characters: state.characters,
})


const mapDispatchToProps = dispatch => bindActionCreators({
  fetchCharactersStart, filterCharactersStart,
}, dispatch);


export default connect(mapStateToProps,mapDispatchToProps)(Filtros);
