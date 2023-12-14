import { getSelection } from './utils/getSelection';
import * as vscode from 'vscode';
import { getTemplateList } from './utils/getTemplateList';
import { getActiveFolder } from './utils/getActiveFolder';
import { copyTemplate } from './utils/copyTemplate';
import { focusOnNewFile } from './utils/focusOnNewFile';

export const run = async () => {
  const moduleName = getSelection();
  const activeFolder = getActiveFolder();
  const templateList = await getTemplateList();

  const fileChangeList = templateList.map(fileName =>
    copyTemplate(fileName, moduleName, activeFolder)
  );

  await Promise.all(fileChangeList);
  focusOnNewFile(moduleName, activeFolder);
  vscode.window.showInformationMessage('Hello');
};
