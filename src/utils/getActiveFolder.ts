import path from 'path';
import { window } from 'vscode';

export const getActiveFolder = () => {
  const activeFileUri = window.activeTextEditor?.document.uri;

  if (!activeFileUri) {
    throw new Error('Нет активного окна');
  }

  const dirname = path.dirname(activeFileUri.toString());

  return dirname.replace(/^file:\/\//g, '');
};
