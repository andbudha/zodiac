import { createContext, ReactNode, useState } from 'react';
import { SignType } from '../types/app_types';

type DataContextType = {
  signs: null | SignType[];
  getData: () => Promise<void>;
};
const initialDataContextState = {
  signs: null,
  getData: () => Promise.resolve(),
} as DataContextType;

export const DataContext = createContext(initialDataContextState);
type DataProviderProps = { children: ReactNode };

export const DataProvider = ({ children }: DataProviderProps) => {
  const [signs, setSigns] = useState<null | SignType[]>(null);

  const getData = async () => {
    try {
      let response = await fetch('https://3c760136f0805f82.mokky.dev/zodiac', {
        method: 'GET',
      });
      let data = await response.json();
      if (data) {
        setSigns(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DataContext.Provider value={{ signs, getData }}>
      {children}
    </DataContext.Provider>
  );
};
