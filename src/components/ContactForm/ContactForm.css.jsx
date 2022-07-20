import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 10px 10px 10px 0px;
`;

export const Label = styled.label`
  display: flex;
  width: 250px;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 10px 10px 0px;
`;

export const Button = styled.button`
  width: 150px;
  color: black;
  font-size: 1em;
  margin-top: 15px;
  padding: 0.25em 1em;
  border: 2px solid orange;
  border-radius: 3px;

  margin-left: auto;
  margin-right: auto;
`;
