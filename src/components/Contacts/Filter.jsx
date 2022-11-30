import { nanoid } from 'nanoid';
const filterId = nanoid(5);

export const Filter = ({ filter, onChange }) => {
  return (
    <>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input
        type="text"
        placeholder="🔍"
        id={filterId}
        value={filter}
        onChange={onChange}
      />
    </>
  );
};
