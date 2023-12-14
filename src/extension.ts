import * as vscode from 'vscode';
import {run} from './run';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('create-module.run', run);
  context.subscriptions.push(disposable);
}

export function deactivate() {}
