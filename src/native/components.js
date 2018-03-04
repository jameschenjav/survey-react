import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
  Input,
  Item,
  Label,
  ListItem,
} from 'native-base';
import TCheckbox from 'teaset/components/Checkbox/Checkbox';
import { WebView } from 'react-native';

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

const HTML = `
<!DOCTYPE html>
<html>
<head>
<style>
* {
  font-family: Roboto;
}
body {
  margin: 0;
  padding: 0;
}
h1 {
  font-size: 60px;
}
</style>
<script>
document.addEventListener("DOMContentLoaded", function() {
  document.title = document.getElementsByTagName('html')[0].scrollHeight;
  window.location.hash = 'ready';
});
</script>
</head>
<body>
#{html}
</body>
</html>`;

class Caption extends PureComponent {
  state = { height: 40 }

  onWebViewChanged(e) {
    if (e.url.endsWith('ready')) {
      this.setState(() => ({
        height: e.title | 0,
      }));
    }
  }

  render() {
    return (
      <WebView
        javaScriptEnabled
        javaScriptEnabledAndroid
        style={{ height: this.state.height }}
        source={{ html: HTML.replace('#{html}', this.props.html) }}
        onNavigationStateChange={e => this.onWebViewChanged(e)}
      />
    );
  }
}

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
