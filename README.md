# github-gui
这是github网站GUI测试的项目

## 基础流程

由于不同测试脚本之间不能有依赖（应该指的是脚本的执行顺序间不能有依赖，所以一个脚本要是一个完整流程，但可以有代码复用），而每个独立的流程都需要进行登录，因此应该开发一个基础登录流程，作为各个流程的前置。

## 运行方法

输入`npm run open `打开测试，输入`npm run run `运行测试

## 登录方法

已经实现了`cypress/integration/login.spec.js`，该测试可以登录github账号

## 基础测试

* 登录（输入框、按钮），右上角+号创建新仓库并完成创建（输入框、单选框、多选框、下拉框、按钮），检查新建的仓库的页面布局

* 登录，打开专用仓库，检查页面布局，通过Add files上传一个新的文件（文件上传），注意上传时选择“Commit directly to the master branch.”

* 登录，打开专用仓库，检查页面布局，通过Add files上传一个新的文件（文件上传），上传时选择“Create a **new branch** for this commit and start a pull request.”，设置branch名，随后跳转到仓库主页，通过branch下拉框检查是否有该分支，然后转到PR页面，merge该PR

* 登录，打开专用仓库，并跳转到issue页面，创建一个新的issue，再为该issue添加一条回复

* 登录，打开专用仓库，创建一个project，在里面添加多栏任务，新建任务并测试任务在多栏中的可以成功拖动

* 登录，打开专用仓库，在Settings中调整勾选框，并检查其效果（例如取消Settings->Options->Features下的issue勾选后，页面内导航栏的issue按钮会消失）

* 登录，打开专用仓库，通过此处齿轮按钮调整仓库详情设置并检查效果（模态框）

  ![image-20210529132030142](https://gitee.com/fangnuowu/img/raw/master///20210529132118.png)

* 登录，通过左上方搜索框搜索一个仓库，随后在搜索结果中进入某个仓库并进行star，随后点击star旁的数字进入starer列表，检查测试账户是否出现在其中，最后unstar，检查star数是否相应减少（可以找一些冷门仓库）

* 登录，通过左上方搜索框搜索一个仓库，随后在搜索结果中进入某个仓库并进行fork，检查fork后仓库的目录结构，最后通过fork后仓库的settings删除该仓库

## 高级测试

PPT中第三部分提到的功能测试

//TODO

## 测试原则

* 使用cypress
* 测试置于`cypress/integration`下
* 注意要模拟用户与页面的交互，例如跳转需要点击相应的按钮或链接，而不是直接调用driver的API

