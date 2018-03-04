import React from 'react';
import PropTypes from 'prop-types';

import {
  Input,
  Item,
  Label,
  ListItem,
} from 'native-base';
import TCheckbox from 'teaset/components/Checkbox/Checkbox';
import WebView from 'react-native-webview-autoheight';

const Checkbox = ({ label, value, onChange }) => (
  <TCheckbox
    title={label}
    checked={value}
    onChange={onChange}
  />
);

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export const TextField = ({
  label, value, required, onChange,
}) => (
  <Item floatingLabel>
    <Label>{ required ? `${label} *` : label }</Label>
    <Input
      value={value}
      onChangeText={onChange}
    />
  </Item>
);

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const Caption = ({ html }) => (
  <WebView
    source={{ html }}
  />
);

Caption.propTypes = {
  html: PropTypes.string.isRequired,
};

const Divider = () => (<ListItem itemDivider />);

const components = {
  checkbox: Checkbox,
  text: TextField,
  caption: Caption,
  divider: Divider,
};

export default components;
