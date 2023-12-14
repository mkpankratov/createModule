import * as vscode from 'vscode';
import { run } from './run';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('create-module.run', run);
  context.subscriptions.push(disposable);
}

export function deactivate() {}
