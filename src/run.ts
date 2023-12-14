import { getSelection } from './utils/getSelection';
import { getActiveFolder } from './utils/getActiveFolder';
import { copyTemplate } from './utils/copyTemplate';
import { focusOnNewFile } from './utils/focusOnNewFile';
import { CREATE_MODULE_FILE_LIST } from './constants';

export const run = async () => {
  const moduleName = getSelection();
  const activeFolder = getActiveFolder();

  const fileChangeList = CREATE_MODULE_FILE_LIST.map(item =>
    copyTemplate(item[0] as string, item[1] as string, moduleName, activeFolder)
  );

  await Promise.all(fileChangeList);
  focusOnNewFile(moduleName, activeFolder);
};
