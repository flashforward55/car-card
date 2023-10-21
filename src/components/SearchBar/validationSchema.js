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
    .number()
    .transform((value, initialValue) => (initialValue === '' ? null : value))
    .nullable(),
  mileageTo: yup
    .number()
    .transform((value, initialValue) => (initialValue === '' ? null : value))
    .nullable(),
});
