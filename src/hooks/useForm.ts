import { useState } from 'react';

export type IChangeElement =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

export const useForm = <T>(initialState: T) => {
  const [formState, setFormState] = useState<T>(initialState);

  const handleChange = (event: React.ChangeEvent<IChangeElement>): void => {
    const { tagName, name, value } = event.target;
    const parsedValue = tagName === 'SELECT' && value === '' ? null : value;
    setFormState({ ...formState, [name]: parsedValue });
  };

  return { formState, setFormState, handleChange };
};
