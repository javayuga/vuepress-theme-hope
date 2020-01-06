/*
 * @Author: Mr.Hope
 * @Date: 2020-01-05 12:55:30
 * @LastEditors  : Mr.Hope
 * @LastEditTime : 2020-01-05 14:05:52
 * @Description: 多语言配置
 */

export type Langs = 'zh-CN' | 'en-US';

export type LangPaths = '/zh/' | '/en/';

type Lang2PathConfig = Record<string, LangPaths>;

type Path2LangConfig = Record<string, Langs>;

/** 支持语言 */
export const langs: Langs[] = ['zh-CN', 'en-US'];

/** 语言对应路径 */
export const lang2PathConfig: Lang2PathConfig = {
  'zh-CN': '/zh/',
  'en-US': '/en/'
};

/** 路径对应语言 */
export const path2langConfig: Path2LangConfig = {
  '/zh/': 'zh-CN',
  '/en/': 'en-US'
};

interface ThemeColorConfig {
  themeColor: string;
  nightmode: string[];
}

interface Error404Config {
  /** 错误提示语 */
  text: string[];
  /** 返回主页文字 */
  link: string;
}

export interface LangLocalesConfig {
  /** 设置该语言的代码 */
  lang: string; // 将会被设置为 <html> 的 lang 属性
  /** 多语言下拉菜单的标题 */
  selectText: string;
  /** 该语言下的更新时间文字 */
  lastUpdated: string;
  /** 该语言在下拉菜单中的标签 */
  label: string;
  /** 辅助标签 */
  ariaLabel?: string;
  /** 编辑链接文字 */
  editLinkText: string; // 默认为 "Edit this page"
  /** Valine 占位符 */
  valineHolder: string;

  /** 主题色配置 */
  themeColor: ThemeColorConfig;
  /** 404错误页 */
  error404: Error404Config;
}

export type LocalesConfig = Record<string, LangLocalesConfig>;

/** 语言设置 */
export const localesConfig: LocalesConfig = {
  'zh-CN': {
    lang: 'zh-CN',
    selectText: '选择语言',
    lastUpdated: '上次编辑于',
    label: '简体中文',
    editLinkText: '在 GitHub 上编辑此页',
    valineHolder: '请留言',
    themeColor: {
      themeColor: '主题色',
      nightmode: ['日间模式', '夜间模式']
    },
    error404: {
      text: [
        '这里什么也没有',
        '我们是怎么来到这儿的？',
        '这 是 四 零 四 !',
        '看起来你访问了一个失效的链接'
      ],
      link: '带我回家'
    }
  },

  /** 英文设置 */
  'en-US': {
    lang: 'en-US',
    selectText: 'Language',
    /** 辅助标签 */
    ariaLabel: 'Select language',
    lastUpdated: 'Last update',
    label: 'English',
    editLinkText: 'Edit on Github',
    valineHolder: 'Write a comment here',
    themeColor: {
      themeColor: 'Theme Color',
      nightmode: ['Daymode', 'Nightmode']
    },
    error404: {
      text: [
        // eslint-disable-next-line quotes
        "There's nothing here.",
        // eslint-disable-next-line quotes
        'How did we get here?',
        // eslint-disable-next-line quotes
        "That's a Four-Oh-Four.",
        // eslint-disable-next-line quotes
        "Looks like we've got some broken links."
      ],
      link: 'Take me home'
    }
  }
};

/** 自定义容器插件 */
const containerConfig: Record<string, Record<string, string>> = {
  tip: {
    '/zh/': '提示',
    '/en/': 'Tips'
  },
  warning: {
    '/zh/': '注意',
    '/en/': 'Note'
  },
  danger: {
    '/zh/': '警告',
    '/en/': 'Warning'
  }
};

/** 插件配置 */
export const config = {
  container: containerConfig
};