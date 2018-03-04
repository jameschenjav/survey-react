import React from 'react';
import PropTypes from 'prop-types';

import MuCheckbox from 'material-ui/Checkbox';
import MuDivider from 'material-ui/Divider';
import MuTextField from 'material-ui/TextField';
import { FormControlLabel as MuFormControlLabel } from 'material-ui/Form';

const COMMON_PROPS = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export const Caption = ({ html }) => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);

Caption.propTypes = {
  html: PropTypes.string.isRequired,
};

export const Checkbox = ({
  label, name, value, onChange,
}) => (
  <MuFormControlLabel
    label={label}
    control={
      <MuCheckbox
        checked={value}
        value={name}
        onChange={e => onChange(e.target.checked)}
      />
    }
  />
);

Checkbox.propTypes = {
  value: PropTypes.bool.isRequired,
  ...COMMON_PROPS,
};

export const TextField = ({
  label, name, value, required, onChange,
}) => (
  <MuTextField
    label={label}
    placeholder={label}
    name={name}
    value={value}
    required={required}
    onChange={e => onChange(e.target.value)}
  />
);

TextField.propTypes = {
  value: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  ...COMMON_PROPS,
};

export const Divider = MuDivider;

export default {
  caption: Caption,
  checkbox: Checkbox,
  divider: Divider,
  text: TextField,
};
