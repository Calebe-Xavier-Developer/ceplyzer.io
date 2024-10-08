import styled from "styled-components";

interface Props {
  isDisplay: boolean,
};

export const NavSearchBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  min-height: 150px;
  height: auto;
  border-radius: 15px;
  padding: 15px;
  background: linear-gradient(21deg, #00db82, #12d4ff, #f302eb);
  font-size: 20px;
  color: #000000;
`;

export const DivInputs = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: auto;
  font-size: 20px;
  color: #000000;

  p{
    padding-top: 18px;
    height: 100%;
  }
`;

export const LabelInput = styled.label`
  width: 100%;
  text-align: left;
  font-size: 12px;
  font-weight: normal;
  color: #000000;
`;

export const InputSearch = styled.input`
  width: 50%;
  height: 40px;
  border: none;
  padding: 10px;
  margin-top: 10px;
  border-radius: 4px;
  outline: none;
  font-size: 16px;
  

  &:focus{
    border: 1px solid blue;
  }

  &[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
  }
`;

export const Paragraph = styled.p<Props>`
  display: ${props => (props.isDisplay ? 'flex' : 'none')};
  flex-direction: column;
`;
