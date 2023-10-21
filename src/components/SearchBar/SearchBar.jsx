import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { ButtonPrimary } from 'components/Shared/ButtonPrimary/ButtonPrimary';
import {
    StyledForm,
    Label,
    InputHeading,
    selectStyles,
    Fieldset,
    Legend,
    InputWrapper,
    InputLabel,
    LabelText,
    NumberInput,
    ButtonsWrapper,
} from './SearchBar.styled';
import { transformSelectData } from 'helpers/transformSelectData';
import { formSettings } from './formSettings';
import { initialValues } from './initialValues';
import carBrands from './carBrands.json';
import { ButtonSecondary } from 'components/Shared/ButtonSecondary/ButtonSecondary';
const priceList = Array.from({ length: 48 }, (_, index) => {
    const value = (index + 3) * 10;
    return { value, label: value };
});
const brandsList = transformSelectData(carBrands);

export const SearchBar = ({ handleSearch }) => {
    const {
        register,
        handleSubmit,
        control,
        clearErrors,
        setError,
        getValues,
        reset,
    } = useForm(formSettings);

    const [searchState, setState] = useState({ ...initialValues });

    const handleSelectChange = fieldName => {
        const data = getValues(fieldName);

        setState(prevState => ({
            ...prevState,
            [fieldName]: data,
        }));
    };

    const handleInputChange = evt => {
        const fieldName = evt.target.name;
        const value = evt.target.value;

        value ? clearErrors(fieldName) : setError(fieldName);

        setState(prevState => ({
            ...prevState,
            [fieldName]: value,
        }));
    };

    const handleFormReset = async () => {
        reset();
        setState(initialValues);
    };

    return (
        <StyledForm onSubmit={handleSubmit(handleSearch)}>
            <Controller
                name="brand"
                control={control}
                render={({ field }) => (
                    <Label>
                        <InputHeading>Car brand</InputHeading>
                        <Select
                            {...field}
                            placeholder="Enter the text"
                            unstyled
                            styles={selectStyles}
                            options={brandsList}
                            defaultValue={searchState.brand}
                            onChange={selectedOption => {
                                field.onChange(selectedOption);
                                handleSelectChange(field.name);
                            }}
                        />
                    </Label>
                )}
            />

            <Controller
                name="price"
                control={control}
                render={({ field }) => (
                    <Label>
                        <InputHeading>Price/ 1 hour</InputHeading>
                        <Select
                            {...field}
                            placeholder="To $"
                            unstyled
                            styles={selectStyles}
                            options={priceList}
                            defaultValue={searchState.price}
                            onChange={selectedOption => {
                                field.onChange(selectedOption);
                                handleSelectChange(field.name);
                            }}
                        />
                    </Label>
                )}
            />

            <Fieldset>
                <Legend>Сar mileage / km</Legend>
                <InputWrapper>
                    <InputLabel>
                        <LabelText>From</LabelText>
                        <NumberInput
                            type="number"
                            name="mileageFrom"
                            autocomplete="off"
                            {...register('mileageFrom')}
                            value={searchState.mileageFrom}
                            onChange={handleInputChange}
                        />
                    </InputLabel>

                    <InputLabel>
                        <LabelText>To</LabelText>
                        <NumberInput
                            type="number"
                            name="mileageTo"
                            autocomplete="off"
                            {...register('mileageTo')}
                            value={searchState.mileageTo}
                            onChange={handleInputChange}
                        />
                    </InputLabel>
                </InputWrapper>
            </Fieldset>

            <ButtonsWrapper>
                <ButtonPrimary
                    type="submit"
                    tag="button"
                    btnWidth="auto"
                    btnPadding="14px 44px"
                >
                    Search
                </ButtonPrimary>
                <ButtonSecondary type="reset" onClick={handleFormReset}>
                    Reset
                </ButtonSecondary>
            </ButtonsWrapper>
        </StyledForm>
    );
};
