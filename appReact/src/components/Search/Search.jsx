import { memo } from 'react';

const Search = ({ method }) => {
  const handleGetCharacter = (evt) => {
    evt.preventDefault();
    const character = evt.target.character.value;
    return method(character);
  };

  return (
    <>
      <form onSubmit={handleGetCharacter}>
        <input type="text" placeholder="personaje" name="character" autoFocus />
        <button>buscar</button>
      </form>
    </>
  );
};
export default memo(Search);
