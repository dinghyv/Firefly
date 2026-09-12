import type { SponsorConfig } from "../types/sponsorConfig";

export const sponsorConfig: SponsorConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "赞助支持",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description:
		"支持 GTA Database 与博客的持续维护和内容更新。您的支持是我持续创作的最大动力！",

	// 打赏用途说明
	usage: "您的赞助将用于服务器维护、数据库更新与功能开发，感谢每一位支持者！",

	// 是否显示打赏者列表
	showSponsorsList: false,

	// 是否显示评论区，需要先在commentConfig.ts启用评论系统
	showComment: false,

	// 是否在文章详情页底部显示打赏按钮
	showButtonInPost: true,

	// 打赏方式列表
	methods: [
		{
			name: "赞助支持",
			icon: "material-symbols:favorite",
			qrCode: "",
			link: "https://www.antwen.cn/sponsor",
			description: "前往官方赞助页面（爱发电 / 微信 / 支付宝）",
			enabled: true,
		},
	],

	// 打赏者列表（可选）
	sponsors: [],
};
