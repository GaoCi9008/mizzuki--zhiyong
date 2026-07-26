import type { ProfileConfig } from "../types/config";

// 个人资料配置
export const profileConfig: ProfileConfig = {
	avatar: "assets/images/name.jpg", // 相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录
	name: "Gao Ci",
	bio: "旅途总有一天会迎来终点，不必匆忙",
	typewriter: {
		enable: true, // 启用个人简介打字机效果
		speed: 80, // 打字速度（毫秒）
	},
	links: [
		{
			name: "Bilibili",
			icon: "fa7-brands:bilibili",
			url: "https://space.bilibili.com/1228292389?spm_id_from=333.1007.0.0",
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/GaoCi9008",
		},
		{
			name: "coolapk",
			icon: "simple-icons:codeberg",
			url: "https://www.coolapk.com/u/26520460",
		},
		{
			name: "Email",
			icon: "simple-icons:codeberg",
			url: "1476567989@qq.com",
		},
	],
};