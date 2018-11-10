import { ClassAttributor, Scope, StyleAttributor } from 'parchment';

const config = {
  scope: Scope.BLOCK,
};

const LineHeightClass = new ClassAttributor('lh', 'ql-line-height', config);
const LineHeightStyle = new StyleAttributor('lh', 'line-height', config);

export { LineHeightClass, LineHeightStyle };
