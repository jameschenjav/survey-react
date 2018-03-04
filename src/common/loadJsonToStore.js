import axios from 'axios';
import actions from './actions';

export default async (store) => {
  const { data } = await axios.get('http://169.254.232.42:3080/fields.json');
  store.dispatch({ type: actions.CREATE_STATE_FROM_DATA, ...data });
};
