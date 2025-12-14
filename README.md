# 课题组网站

这是一个使用Vanilla Web Development（纯HTML+CSS+JavaScript）开发的课题组网站，符合GitHub Pages部署要求。

## 网站结构

- **index.html** - 主页，展示研究方向、近期科研进展
- **members.html** - 成员介绍页，展示团队成员信息
- **works.html** - 工作成果页，展示论文、专利、获奖、项目等
- **news.html** - 完整新闻页，展示所有新闻动态
- **css/style.css** - 全局样式文件
- **js/main.js** - 主页JavaScript逻辑
- **js/members.js** - 成员页JavaScript逻辑
- **js/works.js** - 成果页JavaScript逻辑
- **js/news.js** - 新闻页JavaScript逻辑

## 功能特点

1. **响应式设计** - 适配桌面、平板、手机等不同设备
2. **现代化UI** - 采用渐变色彩、卡片式布局、平滑过渡动画
3. **易于维护** - 纯静态网站，数据通过JavaScript管理，易于修改
4. **GitHub Pages兼容** - 可直接部署到GitHub Pages

## 如何自定义内容

### 修改新闻数据
编辑 `js/main.js` 和 `js/news.js` 中的 `newsData` 数组

### 修改成员信息
编辑 `js/members.js` 中的 `membersData` 对象

### 修改工作成果
编辑 `js/works.js` 中的 `worksData` 数组

### 修改样式
编辑 `css/style.css` 文件，可以调整颜色、字体、布局等

### 修改网站标题和联系信息
在各HTML文件的 `<title>` 标签和footer部分进行修改

## 部署到GitHub Pages

1. 将代码推送到GitHub仓库
2. 在仓库设置中启用GitHub Pages
3. 选择主分支（main/master）作为源
4. 网站将在 `https://username.github.io/repository-name` 可访问

## 浏览器兼容性

支持所有现代浏览器（Chrome、Firefox、Safari、Edge等）
