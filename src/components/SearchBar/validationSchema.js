import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  brand: yup
    .object()
    .shape({
      label: yup.string(),
      value: yup.string(),
    })
    .nullable(),
  price: yup
    .object()
    .shape({
      label: yup.string(),
      value: yup.string(),
    })
    .nullable(),
  mileageFrom: yup
    .string()
    .transform((value, initialValue) => (initialValue === '' ? null : value))
    .nullable(),
  mileageTo: yup
    .string()
    .transform((value, initialValue) => (initialValue === '' ? null : value))
    .nullable(),
});
