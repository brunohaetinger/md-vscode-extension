vscode = require('vscode');

function activate(context) {
  let disposable = vscode.commands.registerCommand('extension.addTildeTilde', () => {
    const editor = vscode.window.activeTextEditor;

    if (!editor) {
      return; // No active editor
    }

    const { document, selection } = editor;
    const activeLine = document.lineAt(selection.active.line);

    editor.edit((editBuilder) => {
      const checkboxPos = activeLine.text.indexOf("[ ]");
      editBuilder.insert(new vscode.Position(activeLine.lineNumber, checkboxPos + 4), "~~");
      
      editBuilder.insert(new vscode.Position(activeLine.lineNumber, activeLine.text.length), "~~");
    });
  });

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
