# git 版本提交方法

```bash

#prettier - 项目编码格式化 (注意 prettier中如果出现错误可能会将缓存问题添加到 git stash 中)
npm run prettier 

#prettier丢失恢复方法（注：在未add 之前才能执行 stash！！！！）
#查看所有保存的记录列表
git stash list

#恢复，num是可选项，通过git stash list可查看具体值。只能恢复一次
git stash pop stash@{num}

#恢复，num是可选项，通过git stash list可查看具体值。可回复多次
git stash apply stash@{num}

# 在初次丢失时 使用恢复
git stash pop

#添加本地git版本到暂存区
git add .

#提交方法一 - 项目按格式提交信息
pnpm run commit

#提交方法二 - git commit 提交
git commit -m "[types][范围]:[空格] 修改内容"

types类型见.cz-config.js文件

代码会通过.husky钩子自动格式化

#上传版本库
git push

```
