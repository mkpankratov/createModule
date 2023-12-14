import * as vscode from 'vscode';

export const getSelection = (): string => {
  const editor = vscode.window.activeTextEditor;

  if (editor === undefined) {
    throw new Error('Выделите текст');
  }
  const selection = editor.selection;

  const selectionRange = new vscode.Range(
    selection.start.line,
    selection.start.character,
    selection.end.line,
    selection.end.character
  );

  return editor.document.getText(selectionRange);
};
