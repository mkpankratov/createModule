import { Uri, workspace } from 'vscode';
import { REPLACER, TEMPLATE_FOLDER } from '../constants';

export const copyTemplate = async (
  fileName: string,
  moduleName: string,
  activeFolder: string
) => {
  const templateUnitArray = await workspace.fs.readFile(
    Uri.file(`${TEMPLATE_FOLDER}/${fileName}`)
  );
  const decoder = new TextDecoder();
  const templateString = decoder.decode(templateUnitArray);
  const resultString = templateString.replaceAll(REPLACER, moduleName);
  const encoder = new TextEncoder();
  const resultUnit8Array = encoder.encode(resultString);

  const newFileName = `${activeFolder}/${moduleName}/${fileName}`;
  await workspace.fs.writeFile(Uri.file(newFileName), resultUnit8Array);
};
