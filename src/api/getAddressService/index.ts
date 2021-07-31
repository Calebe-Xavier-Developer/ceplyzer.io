import api from '../api';

export const getAddressData = async (cep: number) => {
  const result = api.get(`cep/v2/${cep}`);
  return result;
};