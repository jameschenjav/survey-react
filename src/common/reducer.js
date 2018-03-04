import actions from './actions';

const defaultValues = {
  checkbox: false,
  text: '',
};

function createState({ fields }) {
  const state = { form: {} };

  state.fields = fields.map(({
    type, value = null, when, widths, ...props
  }) => {
    const attrs = {
      tag: type,
      when,
      attrs: props,
    };

    if (props.name) {
      state.form[props.name] = value === null ? defaultValues[type] : value;
    }

    return attrs;
  });
  return state;
}

// const { data } = await axios.get('//localhost:3080/fields.json');

export default (state, { type, ...payload }) => {
  switch (type) {
    case actions.CREATE_STATE_FROM_DATA: {
      return createState(payload);
    }
    case actions.UPDATE_FORM_VALUE: {
      const { form, ...others } = state;
      const { name, value } = payload;
      return {
        form: {
          ...form,
          [name]: value,
        },
        ...others,
      };
    }
    default:
      return state;
  }
};
