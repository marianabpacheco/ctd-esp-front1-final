export function fetchCharactersStart() {
  return {
    type: 'FETCH_CHARACTERS_START',
  };
}

export function filterCharactersStart(searchText) {
    return {
      type: 'FILTER_CHARACTERS_START',
      payload: searchText,
    };
  }

  export function fetchCharactersSuccess(characters) {
    return {
      type: 'FETCH_CHARACTERS_SUCCESS',
      payload: characters,
    };
  }

  export function fetchCharactersError(characters) {
    return {
      type: 'FETCH_CHARACTERS_ERROR',
      payload:characters,
    };
  }