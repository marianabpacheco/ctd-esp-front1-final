type Character = {
  id:number,
  name:string,
  image:string;
}

export function fetchCharactersStart() {
  return {
    type: 'FETCH_CHARACTERS_START',
  };
}

export function filterCharactersStart(searchText:string) {
    return {
      type: 'FILTER_CHARACTERS_START',
      payload: searchText,
    };
  }

  export function fetchCharactersSuccess(characters:Character[]) {
    return {
      type: 'FETCH_CHARACTERS_SUCCESS',
      payload: characters,
    };
  }

  export function fetchCharactersError(characters:Character[]) {
    return {
      type: 'FETCH_CHARACTERS_ERROR',
      payload:characters,
    };
  }


 export function nextPageCharacters(page: number) {
    return {
      type: "NEXT_PAGE_CHARACTERS",
      payload: page,
    };
  }
  export function previousPageCharacters(page: number) {
    return {
      type: "PREVIOUS_PAGE_CHARACTERS",
      payload: page,
    };
  }