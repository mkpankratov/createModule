import { Uri, workspace } from 'vscode';
import { TEMPLATE_FOLDER } from '../constants';

export const getTemplateList = async () => {
  const result = await workspace.fs.readDirectory(Uri.file(TEMPLATE_FOLDER));
  return result.map(item => item[0]);
};
