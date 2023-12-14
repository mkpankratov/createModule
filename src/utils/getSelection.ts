import { window, Range } from 'vscode';

export const getSelection = (): string => {
  const editor = window.activeTextEditor;

  if (editor === undefined) {
    throw new Error('Выделите текст');
  }
  const selection = editor.selection;

  const selectionRange = new Range(
    selection.start.line,
    selection.start.character,
    selection.end.line,
    selection.end.character
  );

  return editor.document.getText(selectionRange);
};
