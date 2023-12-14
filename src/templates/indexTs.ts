export default `import type { FC } from 'react';
import type { T$moduleName } from './types';
import css from './styles.module.css';

export const $moduleName: FC<T$moduleName> = props => {
  const {} = props;
  return (
    <div className={css.container}>
      <span></span>
    </div>
  );
};
`;
