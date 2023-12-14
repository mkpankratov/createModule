import { Uri, commands } from 'vscode';
import { DEFAULT_FOCUS } from '../constants';

export const focusOnNewFile = (moduleName: string, activeFolder: string) => {
  const focusFile = `${activeFolder}/${moduleName}/${DEFAULT_FOCUS}`;
  commands.executeCommand('vscode.open', Uri.file(focusFile));
};
