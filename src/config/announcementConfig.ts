import type { AnnouncementConfig } from "../types/config";

// 公告栏配置
export const announcementConfig: AnnouncementConfig = {
	title: "公告", // 公告标题，填空使用i18n字符串Key.announcement
	content: "网站目前处于测试阶段，不定期更新 ", // 公告内容
	closable: false, // 允许用户关闭公告
	link: {
		enable: false, // 启用链接
		text: "Learn More", // 链接文本
		url: "/about/", // 链接 URL
		external: false, // 内部链接
	},
};