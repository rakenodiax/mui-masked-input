/* eslint-disable react/jsx-props-no-spreading */
import { Input }      from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import { InputProps } from '@material-ui/core/Input';
// eslint-disable-next-line import/no-unresolved
import React          from 'react';

export interface MaskedInputProps extends InputProps {
  mask?: string;
  onValueChange?: (value: string) => void;
}

/**
 * @callback onValueChange
 * @param {string} value The stripped value from the Input's `onChange` callback
 * @return {void}
 */

/**
 * @callback onChange
 * @param {event} event The direct event passed back from the `Input`'s `onChange` callback
 * @return {void}
 */

/**
 * A basic masked input component which wraps `material-ui`'s `Input` component
 * @param {string} value The value of the input element
 * @param {string=} mask The text mask to be placed in front of the input's value
 * @param {onValueChange} onValueChange Callback which fires from the child `Input`'s `onChange` callback
 * @param {onChange} onChange Direct pass-through of the `Input`'s `onChange` callback.
 * WARNING: reading the value from this can lead to unexpected behavior if a user backspaces on an empty value
 * @param inputProps Other properties passed to the Input component
 * @constructor
 */
const MaskedInput: React.FC<MaskedInputProps> = ({ value, mask, onValueChange, onChange, ...inputProps }) => {
  const maskedInput = (mask || '') + value;
  const maskSearch  = mask && new RegExp(`^${ mask }?`);

  const handleValueChange = (eventValue: string): void => {
    if (value === '' && eventValue.length <= (mask || '').length) {
      onValueChange!(value);
    }

    const strippedValue = maskSearch
      ? eventValue.replace(maskSearch, '')
      : eventValue;
    onValueChange!(strippedValue);
  };

  const onInputChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (event): void => {
    if (onValueChange !== undefined) {
      handleValueChange(event.currentTarget.value);
    }

    if (onChange !== undefined) {
      onChange(event);
    }
  };

  return (
    <Input value={ maskedInput }
           onChange={ (event) => onInputChange(event) }
           { ...inputProps }
    />
  );
};

export default MaskedInput;
