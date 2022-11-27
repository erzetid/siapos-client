import { Textarea, TextareaProps } from '@chakra-ui/react';
import { FC } from 'react';
import { FormProps, Form } from '..';

interface FormTextAreaProps extends TextareaProps, FormProps {
  onChangeText(t: string): void;
}

const FormTextArea: FC<FormTextAreaProps> = ({
  label,
  message,
  isError,
  required = false,
  onChangeText,
  ...rest
}) => {
  return (
    <Form label={label} message={message} required={required} isError={isError}>
      <Textarea {...rest} onChange={(e) => onChangeText(e.target.value)} />
    </Form>
  );
};

export default FormTextArea;
