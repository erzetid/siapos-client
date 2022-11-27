import { Select, SelectProps } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

import { Form, FormProps } from '..';

interface FormSelectProps extends FormProps, SelectProps {
  onChangeText(t: string): void;
  children?: ReactNode;
}

const FormSelect: FC<FormSelectProps> = ({
  label,
  message,
  isError,
  children,
  required = false,
  onChangeText,
  ...rest
}) => {
  return (
    <Form label={label} message={message} required={required} isError={isError}>
      <Select onChange={(e) => onChangeText(e.target.value)} {...rest}>
        {children}
      </Select>
    </Form>
  );
};

export default FormSelect;
