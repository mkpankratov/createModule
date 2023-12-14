import indexTxt from './templates/indexTs';
import stylesTxt from './templates/styles';
import typesTxt from './templates/typesTS';

export const REPLACER = '$moduleName';
export const DEFAULT_FOCUS = 'index.tsx';
export const CREATE_MODULE_FILE_LIST = [
  [indexTxt, 'index.tsx'],
  [stylesTxt, 'styles.module.css'],
  [typesTxt, 'types.ts'],
];
