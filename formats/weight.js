import { Scope, StyleAttributor } from 'parchment';

const WeightStyle = new StyleAttributor('weight', 'font-weight', {
  scope: Scope.INLINE,
  whitelist: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default WeightStyle;
