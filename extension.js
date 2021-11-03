//模块“vscode”包含VS代码扩展API
//导入模块并使用下面代码中的别名vscode引用它
const vscode = require('vscode');
/**
 * 当您的扩展被激活时，将调用此方法
 * 您的扩展在第一次执行命令时即被激活
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	//当您的扩展被激活时，这行代码将只执行一次
	console.log('恭喜，您的扩展 "mds-tool" 现在已被激活');

	//该命令已在package.json文件中定义
	//现在用registerCommand提供命令的实现
	//commandId参数必须与package.json中的命令字段匹配
	context.subscriptions.push(vscode.commands.registerCommand('mds-tool.helloWorld', function () {
		// 每次执行命令时，您在此处放置的代码都将被执行
		vscode.window.showInformationMessage('Hello World from mds-tool!');
	}));
	
	context.subscriptions.push(vscode.commands.registerCommand('mds-tool.sayHello', function (uri) {
		// 当从资源管理器中右键执行命令时会把当前选中资源路径uri作为参数传过
		// 当从编辑器中右键菜单执行时则会将当前打开文件路径URI传过去
		// 当直接按Ctrl+Shift+P执行命令时，这个参数为空
		
		// 每次执行命令时，您在此处放置的代码都将被执行
		vscode.window.showInformationMessage('大家好!');
		console.info(uri)
	}));
	
}

/**
 * 停用扩展时将调用此方法
 */
function deactivate() {
	console.log('您的扩展“mds-tool”已被释放！')
}

module.exports = {
	activate,
	deactivate
}
