import { Uri, workspace } from 'vscode';
import { REPLACER } from '../constants';

export const copyTemplate = async (
  template: string,
  outFileName: string,
  moduleName: string,
  activeFolder: string
) => {
  const resultString = template.replaceAll(REPLACER, moduleName);
  const encoder = new TextEncoder();
  const resultUnit8Array = encoder.encode(resultString);

  const newFileName = `${activeFolder}/${moduleName}/${outFileName}`;
  await workspace.fs.writeFile(Uri.file(newFileName), resultUnit8Array);
};
