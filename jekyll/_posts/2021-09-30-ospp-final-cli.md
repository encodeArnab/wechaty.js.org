---
title: "OSPP 2021-结项报告-基于 Blessed 的 Wechaty 命令行文本客户端软件"
author: chinggg
categories:
  - project
  - ospp
image: /assets/2021/09-ospp-final-cli/terminal-wechaty.webp
tags:
  - summer-of-wechaty
  - summer-2021
  - ospp
  - ospp-2021
  - final
  - ecosystem
---

本项目基于 blessed 为 wechaty 开发了一个命令行文本客户端，让用户可以使用键盘在终端里聊天，也方便开发者实时观察机器人的行为。

## [基于 Blessed 的 Wechaty 命令行文本客户端软件]信息

- 导师：李卓桓
- 学生：刘靖
- 项目名称：基于 Blessed 的 Wechaty 命令行文本客户端软件
- 项目介绍：[https://github.com/wechaty/summer/issues/80](https://github.com/wechaty/summer/issues/80)
- 方案描述：
  - 仿照 Linux 命令行终端的 IRC 文本客户端，实现一个基于 Wechaty 的即时通讯客户端，通过 Wechaty 支持所有现有的 [Wechaty Puppet Providers](https://wechaty.js.org/docs/puppet-providers/)，比如微信、企业微信、飞书、Whatsapp 等。  
  - 利用 [Blessed](https://github.com/chjj/blessed) 和 [blesssed-contrib](https://github.com/yaronn/blessed-contrib) 提供的组件，绘制终端图形界面程序
  - 监听消息接收和键鼠点击等事件，动态调整组件的内容，提供接近一般聊天软件的交互体验
  - 使用 [react-blessed](https://github.com/Yomguithereal/react-blessed)、RxJS 和 Redux 重构代码（选做）
- 时间规划：  
  - 第一阶段（7.1 - 8.14）对接后端事件，选择恰当的架构与技术栈完成数据的存储、展示与更新
    - 自行探索做出 demo
      - 7.1 - 7.14
      - 实现简单的消息接收和联系人列表展示
      - 与导师沟通架构设计和需使用的技术栈
    - 军训期间，项目暂缓
      - 7.15 - 7.29
      - 时间有限，学习前端相关知识或抽空实现较简单的功能
    - 改进代码结构，重点推进数据的存储与状态的管理
      - 8.1 - 8.14
      - 实现消息内容按来源存储与查看
      - 联系人与群聊信息的缓存
      - 撰写中期报告
  - 第二阶段（8.15 - 9.30）重点完善前端交互，持续改进用户体验
    - 提供更多的交互选项和管理功能
      - 8.15 - 8.30
      - 根据未读消息数量对联系人进行状态管理和智能排序
    - 实现消息的发送
      - 9.1 - 9.14
    - 完善文档，编写样例代码和测试
      - 9.15 - 9.30

## 项目总结

- 项目成果：整个项目就是一个在终端里运行的 Wechaty 聊天客户端，可以从以下几个角度总结成果：
  - 数据的获取和展示：在应用启动时会一次性获取所有联系人和群聊，然后监听消息并显示在相应的聊天界面中，由于底层 puppet 实现可能无法在启动时获取所有信息，因此还提供了重新获取联系人和群聊数据的选项。
  - 界面交互的设计：基本完成，界面左侧是好友和群聊列表，右侧是活跃聊天（指有消息往来的好友和群聊）列表，中间大块展示消息记录，中间下侧有发送消息的输入框，最下方是快捷菜单栏，用户可以按下快捷键来触发各种功能，部分功能会在上层弹出窗口，再按一次则窗口消失。值得一提的是对 Vim 常用按键的支持，用户可以使用 `j/k/C-u/C-d/g/G` 来移动选框，按下 `/` 则会弹出搜索框，直接输入聊天名称即可尝试搜索并跳转到对应的聊天。
  - 聊天功能的覆盖：基础的文本消息收发已经完成，聊天的管理实现起来也是较为容易，但由于对现有代码架构不满意，并没有想好群和联系人管理该以怎样的布局和交互方式呈现，且与机器人自动化管理聊天的场景不同，用户对联系人和群聊进行增删改的频率并不高，且误操作的后果比较严重，所以管理功能的优先级比较低。
  - 开源生态的完善：首先是开源协作的规范，开发过程通过有意义的 commit message 得以保存，在 issue 和 PR 中使用英语讨论技术细节也能让世界各地的开发者方便地检索和交流。为了提高开发效率，在 Wechaty 社区通用的一套 CI/CD 流程，并采用了 ESM 作为模块管理方式。为便于使用，除了 npm 安装外，还提供了 Docker 构建方式。

  部分效果图如下：
  ![demo](/assets/2021/09-ospp-final-cli/final-demo.webp)

- 遇到的问题及解决方案：

  首先是界面设计：最初设计的界面过于理想化，实际在终端中有着诸多限制，包括文字的自动换行，键盘鼠标的交互都有缺陷，最终仿照了 [dockly](https://github.com/lirantal/dockly) 使用菜单栏+快捷键的方式提供交互，算是比较理想的解决方案。

  其次是代码细节上的问题：[Blessed](https://github.com/chjj/blessed) 长期无人维护，使用者也少，缺乏可参考的文档和资源，为了解决组件使用中遇到的 bug，我学习了使用 VS Code 调试 Node.js 程序的方法，成功找到了问题的原因并解决，还在导师的鼓励下[向社区博客投稿](https://wechaty.js.org/2021/08/08/vscode-debug-nodejs/)。

  最后是架构上的问题：其实在一开始我就搜集了许多小项目准备借鉴，还学习了 RxJS 的基础知识，但个人缺乏独立开发的经验，且由于场景的差异无法直接套用，只好以功能的实现来主导开发，将所有代码集中在两三个文件中。这种方式在一开始其实非常直观易于理解，但到了项目开发的后期，需要维护和控制的状态越来越多，代码粗放式增长使得维护困难，终于体现出了使用设计模式和框架的重要性。预期之后会参照 [accursed](https://github.com/cancerberoSgx/accursed) 尝试使用 React 来渲染，并相应地重构代码。
- 后续工作安排：  
  - 目前基本的聊天功能已粗略实现，联系人和群聊管理还要和导师讨论以何种形式呈现
  - 考虑到 blessed 和终端的特性，一般聊天软件的设计（如新对话置顶）可能无法照搬
  - 在保证可用性的情况下，使用 React 和 Redux 重构项目

### live coding视频

{% include iframe.html src="https://youtu.be/D5QbX183kb8" %}

> 国内链接：<https://www.bilibili.com/video/BV1444y1t7So/>

### PPT展示视频

{% include iframe.html src="https://youtu.be/PssH9epe0tU" %}

> 国内链接：<https://www.bilibili.com/video/BV1Wg411F7Gh/>

### 项目PPT

{% include iframe.html src="/assets/2021/09-ospp-final-cli/final-slides.pdf" %}

## 联系我们

- 项目链接：[https://github.com/wechaty/cli]  
- 联系方式：liuchinggg@gmail.com

“[开源软件供应链点亮计划-暑期2021](https://summer.iscas.ac.cn)”（以下简称 暑期2021）是由中科院软件所与 openEuler 社区共同举办的一项面向高校学生的暑期活动。旨在鼓励在校学生积极参与开源软件的开发维护，促进国内优秀开源软件社区的蓬勃发展。活动联合各大开源社区，针对重要开源软件的开发与维护提供项目，并向全球高校学生开放报名。 学生可自主选择感兴趣的项目进行申请，并在中选后获得该软件资深维护者（社区导师）亲自指导的机会。 根据项目的难易程度和完成情况，参与者还可获取“开源软件供应链点亮计划-暑期2021”活动奖金和奖杯。

本项目 [基于 Blessed 的 Wechaty 命令行文本客户端软件] 系 暑期2021 支持的开源项目。
