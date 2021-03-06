import { InputProps } from '@material-ui/core/Input';
import React from 'react';
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
declare const MaskedInput: React.FC<MaskedInputProps>;
export default MaskedInput;
