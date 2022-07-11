import "./paginacao.css";
import { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  nextPageCharacters,previousPageCharacters
} from "../../actions/index";


/**
 * Componente que contém os botões para paginar
 *
 * Você deve adicionar as propriedades necessárias para que funcione corretamente
 *
 *
 * @returns Elemento JSX
 */
const Paginacao = ({nextPageCharacters,previousPageCharacters}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const newPage = () => nextPageCharacters(currentPage);

  function changeNextPage() {
    setCurrentPage(page=> Math.min(page+1, 42));
    newPage();
    console.log({currentPage})
  }

  const previousPage = () => previousPageCharacters(currentPage);

  function changePreviousPage() {
    setCurrentPage(page => Math.max(page - 1, 1));
    previousPage();
    console.log({currentPage});

  }


  return (
    <div className="paginacao">
      <button onClick={changePreviousPage} disabled={false} className={"primary"}>
        Anterior
      </button>
      <button onClick={changeNextPage} disabled={false} className={"primary"}>
        Próximo
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  characters: state.characters,
})


const mapDispatchToProps = dispatch => bindActionCreators({
  nextPageCharacters, previousPageCharacters,
}, dispatch);


export default connect(mapStateToProps,mapDispatchToProps)(Paginacao);
