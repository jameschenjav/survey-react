import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { map } from 'lodash';

import calcWhen from '../common/conditions';
import actions from '../common/actions';
import components from './components';

const funcOnChanges = {};

const FieldSet = ({ dispatch, ...state }) => (
  <form>
    <h1>Survey Test</h1>
    {
      map(state.fields, ({ tag, when = null, attrs }, index) => {
        if (when && !calcWhen(state, when)) return null;
        const Tag = components[tag];
        const props = { ...attrs };
        const { name = null } = props;
        if (name) {
          if (!funcOnChanges[name]) {
            funcOnChanges[name] = (value) => {
              dispatch({ type: actions.UPDATE_FORM_VALUE, name, value });
            };
          }
          props.onChange = funcOnChanges[name];
          props.value = state.form[name];
        }
        return (<Tag key={index} {...props} />);
      })
    }
  </form>
);

FieldSet.propTypes = {
  dispatch: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
  fields: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(
  s => s,
  dispatch => ({ dispatch }),
)(FieldSet);
