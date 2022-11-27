import { Input, InputProps } from '@chakra-ui/react';
import { FC } from 'react';

import { Form, FormProps } from '..';

interface FormInputProps extends InputProps, FormProps {
  onChangeText(t: string): void;
}
const FormInput: FC<FormInputProps> = ({
  label,
  message,
  isError,
  required = false,
  onChangeText,
  ...rest
}) => {
  return (
    <Form label={label} message={message} required={required} isError={isError}>
      <Input
        type="text"
        {...rest}
        onChange={(e) => onChangeText(e.target.value)}
      />
    </Form>
  );
};

export default FormInput;
