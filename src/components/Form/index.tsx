import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

export interface FormProps {
  children?: ReactNode;
  label: string;
  message?: string;
  isError?: boolean;
  required?: boolean;
}

export const Form: FC<FormProps> = ({
  children,
  label,
  message,
  isError = false,
  required = false,
}) => {
  return (
    <FormControl isInvalid={isError} isRequired={required} mb={2}>
      <FormLabel>{label}</FormLabel>
      {children}
      {<FormErrorMessage fontSize={12}>{message}</FormErrorMessage>}
    </FormControl>
  );
};
