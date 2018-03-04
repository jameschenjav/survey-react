import { every } from 'lodash';

const fns = {
  eq({ args }) {
    const [v1, v2] = args.map(arg => fns.calc(this, arg));
    return v1 === v2;
  },
  field({ key }) {
    return this.form[key];
  },
  all({ args }) {
    return every(args, arg => fns.calc(this, arg));
  },
  value: ({ val }) => val,
  calc: (env, expr) => fns[expr.fn].call(env, expr),
};

export default fns.calc;
