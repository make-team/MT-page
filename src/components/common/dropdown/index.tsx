import styled from "styled-components";

import { FIELD } from "constant/checkItems";
interface PropTypes {
  name: string;
  list: typeof FIELD;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

function Dropdown({ list, name, onChange }: PropTypes) {
  return (
    <Wrapper>
      <label htmlFor="dropdown"></label>
      <select id="dropdown" onChange={onChange} name={name}>
        <>
          {Object.entries(list).map((item) => (
            <option key={item[0]} value={item[0]}>
              {item[1]}
            </option>
          ))}
        </>
      </select>
    </Wrapper>
  );
}

export default Dropdown;

const Wrapper = styled.form``;
