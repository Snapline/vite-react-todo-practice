# vite-react-todo-practice

## 1.Vite init 初始化

init command 初始化命令
```bash
yarn create vite
```

or 

```bash
yarn create vite ${project_name} --template ${framework_name}
```
---

### install packages and components library 安装依赖和组件库

```bash
yarn 
```

```bash
yarn add antd -S
```

## 2. Clear the code 清理代码
Delete the abundant codes in the vite official demo.

Vite会出现一个官方示例代码，需要将不相关的代码全部清理干净。

## 3. Let's get started 开始开发
import the antd css library in `main.jsx`.

务必在`main.jsx`里引入antd的css样式库。

------
### Import AntD  引入Ant Design
Tips: Don't remember to import the icons with `import { CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons'`

注意：Ant Design正常引入，但是图标需要单独再次引入，使用`import { CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons'`

----
### Question 问题
**有时会遇到某些jsx文件无法热更新的问题，作为一个追踪点，思考如何解决或者看之后Vite是否会修复这个问题。**

## 4. Deploy
```bash
yarn build
```

put the dist folder to the [Netlify](https://www.netlify.com/).

