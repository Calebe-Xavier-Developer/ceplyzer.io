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
  height: auto;
  border-radius: 15px;
  padding: 15px;
  background: linear-gradient(21deg, #72ffc5, #72e5ff, #ff72fb);
  font-size: 20px;
  color: #fff;
`;

export const DivInputs = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: auto;
  font-size: 20px;
  color: #fff;

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
  color: #fff;
`;

export const InputSearch = styled.input`
  width: 50%;
  border: none;
  padding: 5px;
  margin-top: 10px;
  border-radius: 4px;
  outline: none;
  font-size: 12px;
  

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
