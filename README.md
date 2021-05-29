# github-gui
这是github网站GUI测试的项目

## 基础流程

由于不同测试脚本之间不能有依赖（应该指的是脚本的执行顺序间不能有依赖，所以一个脚本要是一个完整流程，但可以有代码复用），而每个独立的流程都需要进行登录，因此应该开发一个基础登录流程，作为各个流程的前置。

## 运行方法

输入`npm run open `打开测试，输入`npm run run `运行测试

## 登录方法

在自己的测试中调用`cy.login()`即可跳转到GitHub首页并登陆测试账户。注意由于GitHub对于首次登陆设备会发送邮件验证码，因此需要首先运行一次`login.spec.js`，人工输入验证码进行验证设备。

## 专用仓库
除需要新建仓库和使用特定仓库的流程之外，其余需要用到的仓库均使用[专用仓库](https://github.com/se-testing/repo-for-testing)

## 基础测试

1. 登录（输入框、按钮），右上角+号创建新仓库并完成创建（输入框、单选框、多选框、下拉框、按钮），检查新建的仓库的页面布局

2. 登录，打开专用仓库，检查页面布局，通过Add files上传一个新的文件（文件上传），注意上传时选择“Commit directly to the master branch.”

3. 登录，打开专用仓库，检查页面布局，通过Add files上传一个新的文件（文件上传），上传时选择“Create a **new branch** for this commit and start a pull request.”，设置branch名，随后跳转到仓库主页，通过branch下拉框检查是否有该分支，然后转到PR页面，merge该PR

4. 登录，打开专用仓库，并跳转到issue页面，创建一个新的issue，再为该issue添加一条回复。创建issue和编辑回复的过程请测试[Issues](https://docs.github.com/en/github/getting-started-with-github/using-github/keyboard-shortcuts#issue-and-pull-request-lists) 和[Comments](https://docs.github.com/en/github/getting-started-with-github/using-github/keyboard-shortcuts#comments) 中列出的快捷键

5. 登录，打开专用仓库，创建一个project，在里面添加多栏任务，新建任务并测试任务在多栏中的可以成功拖动

6. 登录，打开专用仓库，在Settings中调整勾选框，并检查其效果（例如取消Settings->Options->Features下的issue勾选后，页面内导航栏的issue按钮会消失）

7. 登录，打开专用仓库，通过此处齿轮按钮调整仓库详情设置并检查效果（模态框）

  ![image-20210529132030142](https://gitee.com/fangnuowu/img/raw/master///20210529132118.png)

8. 登录，通过左上方搜索框搜索一个仓库，随后在搜索结果中进入某个仓库并进行star，随后点击star旁的数字进入starer列表，检查测试账户是否出现在其中，最后unstar，检查star数是否相应减少（可以找一些冷门仓库）

9. 登录，通过左上方搜索框搜索一个仓库，随后在搜索结果中进入某个仓库并进行fork，检查fork后仓库的目录结构，最后通过fork后仓库的settings删除该仓库

## 高级测试

10. 快捷键专门测试：
    * [Site wide](https://docs.github.com/en/github/getting-started-with-github/using-github/keyboard-shortcuts#site-wide-shortcuts) 测试`s`键即可
    * [Repository](https://docs.github.com/en/github/getting-started-with-github/using-github/keyboard-shortcuts#repositories) 登陆后打开专用仓库，测试全部快捷键，检查按下后是否导航到相应页面
    * [Source Code Browsing](https://docs.github.com/en/github/getting-started-with-github/using-github/keyboard-shortcuts#source-code-browsing) 登陆后打开专用仓库，按`t`测试`file finder`界面，使用其导航到`.gitignore`文件，在其中测试快捷键`l`
11. 多端适配测试：登陆后，在首页和专用仓库页面通过[viewport API](https://docs.cypress.io/api/commands/viewport#Syntax) 打开多种viewport，并保存它们的屏幕截图

## 测试原则

* 使用cypress
* 测试置于`cypress/integration`下
* 注意要模拟用户与页面的交互，例如跳转需要点击相应的按钮或链接，而不是直接调用driver的API
* 为了测试可多次运行，进行各种创建类操作时，请为创建的对象使用**随机字符串**命名

## 分工

以下所涉及的编号为上方有序列表中的测试项目编号

* 1，10，补全文档
* 2，3，11
* 4，6，8
* 5，7，9
