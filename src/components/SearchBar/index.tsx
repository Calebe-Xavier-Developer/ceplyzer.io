import React, { useState } from 'react';
import { getAddressData } from '../../api/getAddressService';

import { DivInputs, InputSearch, LabelInput, NavSearchBar, Paragraph } from './style';

interface adressState {
  city: string,
  state: string,
  cep: string,
  neighborhood: string,
  street: string,
};

interface requestFriendly {
  data: {
    city: string,
    state: string,
    cep: string,
    neighborhood: string,
    street: string,
  },
};

const SearchBar: React.FC = () => {
  const [inputCepWritten, setInputCepWritten] = useState('');
  const [isDisplay, setIsDisplay] = useState(false);
  const [addressData, setAddressData] = useState<adressState>();

  const changeInputCep = (e: any) => {
    setIsDisplay(false);
    setAddressData(undefined);
    setInputCepWritten(e.currentTarget.value);
  };

  const searchAddress = async (e: any) => {
    if (e.key === 'Enter') {
      const verifyOnlyNumber = inputCepWritten.match(/\D/gim);
      if (!verifyOnlyNumber) {
        try {
          const result: requestFriendly = await getAddressData(parseInt(inputCepWritten));
          setAddressData(result.data);
          if (result) {
            setIsDisplay(true);
            setInputCepWritten('');
          };
          return result;
        } catch (error) {
          setIsDisplay(true);
          setInputCepWritten('');
          return error;
        }
      } else {
        alert('Digite apenas numeros');
      }
    }
  };

  return (
    <NavSearchBar>
      Descubra seu endereço pelo cep
      <DivInputs>
        <InputSearch
          type="text"
          placeholder="Digite seu CEP"
          maxLength={8}
          value={inputCepWritten}
          onChange={e => changeInputCep(e)}
          onKeyPress={e => searchAddress(e)}
        />
        <Paragraph isDisplay={isDisplay}>
           <LabelInput>Seu endereço:</LabelInput>
          {addressData ?
            `${addressData?.city}, ${addressData?.state}, ${addressData?.neighborhood}, ${addressData?.street} - CEP: ${addressData?.cep}`
            : 'O seu cep está errado!'
          }
        </Paragraph>
      </DivInputs>
    </NavSearchBar>
  )
}

export default SearchBar;
