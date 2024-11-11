// formUtils.ts

import { UseFormRegister, FieldValues, Path } from 'react-hook-form';

export function createFormInput<T extends FieldValues>(
  label: string,
  placeholder: string,
  register: UseFormRegister<T>,
  name: keyof T,
  requiredMessage: string,
  error?: string
) {
  return {
    register: (
      <input
        type='text'
        {...register(name as Path<T>, { required: requiredMessage })}
        placeholder={placeholder}
      />
    ),
    label,
    error,
  };
}
