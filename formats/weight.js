import { Scope, StyleAttributor, ClassAttributor } from 'parchment';

const WeightClass = new ClassAttributor('weight', 'ql-weight', {
  scope: Scope.INLINE,
  whitelist: ['normal', 'bold'],
});

const WeightStyle = new StyleAttributor('weight', 'font-weight', {
  scope: Scope.INLINE,
  whitelist: ['400', '700'],
});

export { WeightClass, WeightStyle };
