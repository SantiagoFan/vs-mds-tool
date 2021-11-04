const vscode = require('vscode');
const tool =  require('../utils/tool')
/**
 * 命令集合
 */
let commandList = [
  {
    'cmd':'mds-tool.tp.createModel',
    'title':'创建 tp Model',
    'value':function(context,url){
      const panel = vscode.window.createWebviewPanel(
        'testWebview', // viewType
        "创建 Tp Model", // 视图标题
        vscode.ViewColumn.One, // 显示在编辑器的哪个部位
        {
            enableScripts: true, // 启用JS，默认禁用
            // retainContextWhenHidden: true, // webview被隐藏时保持状态，避免被重置
        }
      );
      panel.webview.html = tool.getWebViewContent(context,'/src/views/createModel.html')
      vscode.window.showInformationMessage('createModel from mds-tool!');
    }
  }
]
/**
   * 注册所有，命令
   @param {vscode.ExtensionContext} context
   * 
   */
function registerAllCommand(context){
  commandList.forEach(cmd => {
    console.log('注册：'+cmd.title)
    cmd.context = context
    let dis = vscode.commands.registerCommand(
      cmd.cmd,
      (url)=>{ cmd.value(context,url)}
    )
    context.subscriptions.push(dis)
  })
}

module.exports = {
  commandList,
  registerAllCommand
}