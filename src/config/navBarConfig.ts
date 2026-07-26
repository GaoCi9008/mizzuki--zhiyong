import type { NavBarConfig } from "../types/config";
import { LinkPreset } from "../types/config";

/**
 * 导航栏菜单配置
 *
 * ══════════════════════════════════════════════════════════════
 * 配置教程
 * ══════════════════════════════════════════════════════════════
 *
 * links 数组中的每一项可以是以下两种类型之一：
 *
 * 【类型一】预设链接（LinkPreset）
 *   直接使用 LinkPreset 枚举，自动生成对应的名称、URL 和图标。
 *   可用的预设值：
 *     LinkPreset.Home       → 首页
 *     LinkPreset.Archive    → 归档
 *     LinkPreset.About      → 关于
 *     LinkPreset.Friends    → 友链
 *     LinkPreset.Anime      → 番剧
 *     LinkPreset.Diary      → 日记
 *     LinkPreset.Albums     → 相册
 *     LinkPreset.Projects   → 项目
 *     LinkPreset.Skills     → 技能
 *     LinkPreset.Timeline   → 时间线
 *
 *   示例：
 *     links: [LinkPreset.Home, LinkPreset.Archive]
 *
 * 【类型二】自定义链接对象
 *   {
 *     name: "显示名称",           // 必填，菜单项显示的文字
 *     url: "/your-page/",        // 必填，链接地址
 *     icon: "icon-set:icon",     // 可选，Iconify 图标，格式为 "集合名:图标名"
 *     external: true,            // 可选，是否为外部链接（默认 false）
 *     children: [...]            // 可选，子菜单数组（支持多级嵌套）
 *   }
 *
 * ══════════════════════════════════════════════════════════════
 * 多级菜单配置
 * ══════════════════════════════════════════════════════════════
 *
 * 通过 children 字段实现下拉子菜单。children 中的每一项同样支持
 * LinkPreset 枚举或自定义链接对象，可以自由混合使用。
 *
 * ══════════════════════════════════════════════════════════════
 * 图标说明
 * ══════════════════════════════════════════════════════════════
 *
 * icon 字段使用 Iconify 图标格式："集合名:图标名"
 * 常用图标集合：
 *   - material-symbols   → Google Material Symbols（推荐，图标丰富）
 *   - mdi                → Material Design Icons
 *   - fa7-brands         → Font Awesome 7 品牌图标（GitHub, Discord 等）
 *   - fa7-solid          → Font Awesome 7 实心图标
 *   - fa7-regular        → Font Awesome 7 线性图标
 *   - simple-icons       → Simple Icons（各种品牌 Logo）
 *
 * 浏览更多图标：https://icon-sets.iconify.design/
 *
 */
export const navBarConfig: NavBarConfig = {
	links: [
		// 预设链接：首页
		LinkPreset.Home,
		// 预设链接：归档
		LinkPreset.Archive,

		// 自定义一级下拉菜单示例：外部链接集合
		{
			name: "Links",
			url: "/links/",
			icon: "material-symbols:link",
			children: [
				{
					name: "GitHub",
					url: "https://github.com/GaoCi9008",
					external: true, // 外部链接，新标签页打开
					icon: "fa7-brands:github",
				},
				{
					name: "Bilibili",
					url: "https://space.bilibili.com/1228292389?spm_id_from=333.1007.0.0",
					external: true,
					icon: "fa7-brands:bilibili",
				},
				{
					name: "酷安",
					url: "https://www.coolapk.com/u/26520460",
					external: true,
					icon: "mdi:git",
				},
			],
		},

		// 自定义一级下拉菜单示例：个人内容页面
		{
			name: "My",
			url: "/content/",
			icon: "material-symbols:person",
			children: [
				{
					name: "Anime",
					url: "/anime/",
					icon: "material-symbols:movie",
				},
				{
					name: "Diary",
					url: "/diary/",
					icon: "material-symbols:book",
				},
				{
					name: "Gallery",
					url: "/albums/",
					icon: "material-symbols:photo-library",
				},
				{
					name: "Devices",
					url: "/devices/",
					icon: "material-symbols:devices",
					external: false, // 内部链接，当前页导航
				},
			],
		},

		// 自定义一级下拉菜单示例：关于相关
		{
			name: "About",
			url: "/content/",
			icon: "material-symbols:info",
			children: [
				{
					name: "About",
					url: "/about/",
					icon: "material-symbols:person",
				},
				{
					name: "Friends",
					url: "/friends/",
					icon: "material-symbols:group",
				},
			],
		},

		// 自定义一级下拉菜单示例：其他页面
		{
			name: "Others",
			url: "#", // "#" 作为占位 URL，点击不会跳转
			icon: "material-symbols:more-horiz",
			children: [
				{
					name: "Projects",
					url: "/projects/",
					icon: "material-symbols:work",
				},
				{
					name: "Skills",
					url: "/skills/",
					icon: "material-symbols:psychology",
				},
				{
					name: "Timeline",
					url: "/timeline/",
					icon: "material-symbols:timeline",
				},
			],
		},
	],
};