import type { ProfileConfig } from "../types/profileConfig";

export const profileConfig: ProfileConfig = {
	// 头像
	avatar: "assets/images/421.jpg",

	// 名字
	name: "安稳Antwen",

	// 个人签名
	bio: "一个GTA玩家 | AKa: Dinghy_421",

	// 链接配置
	links: [
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/dinghy421",
			showName: false,
		},
		{
			name: "Bilibili",
			icon: "fa7-brands:bilibili",
			url: "https://space.bilibili.com/513000931",
			showName: false,
		},
		{
			name: "Email",
			icon: "fa7-solid:envelope",
			url: "mailto:admin@antwen.cn",
			showName: false,
		},
		{
			name: "GTA数据库",
			icon: "material-symbols:database",
			url: "https://www.antwen.cn",
			showName: false,
		},
		{
			name: "RSS",
			icon: "fa7-solid:rss",
			url: "/rss/",
			showName: false,
		},
	],
};
