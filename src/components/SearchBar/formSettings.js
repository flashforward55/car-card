import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from './validationSchema';
import { initialValues } from './initialValues';

export const formSettings = {
  defaultValues: {
    ...initialValues,
  },
  mode: 'onChange',
  resolver: yupResolver(validationSchema),
};
