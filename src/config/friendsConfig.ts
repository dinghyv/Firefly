import type { FriendLink, FriendsPageConfig } from "../types/friendsConfig";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链页面配置
export const friendsPageConfig: FriendsPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// 是否显示底部自定义内容（friends.mdx 中的内容）
	showCustomContent: true,

	// 是否显示评论区，需要先在commentConfig.ts启用评论系统
	showComment: true,

	// 是否开启随机排序配置，如果开启，就会忽略权重，构建时进行一次随机排序
	randomizeSort: false,
};

// 友链配置
export const friendsConfig: FriendLink[] = [
	{
		title: "热爱音乐的Richard",
		imgurl:
			"https://i0.hdslb.com/bfs/face/ee8abcb65cac96c1fd7d4f31edbf205b11401fb6.jpg",
		desc: "小辣椒儿",
		siteurl: "https://space.bilibili.com/22040586",
		weight: 20,
		enabled: true,
	},
	{
		title: "SchPK",
		imgurl:
			"https://i1.hdslb.com/bfs/face/019c71dfd62b70198f87ccaba4212661711f712a.jpg",
		desc: "关注我，我服装转移超强的",
		siteurl: "https://space.bilibili.com/1029700594",
		weight: 19,
		enabled: true,
	},
	{
		title: "Spirit_LJX",
		imgurl:
			"https://i0.hdslb.com/bfs/face/fbd598f9ac63fef448a5cadff27b13e16cf2b075.jpg",
		desc: "我超懒的好不好",
		siteurl: "https://space.bilibili.com/510186915",
		weight: 18,
		enabled: true,
	},
	{
		title: "小哑巴爱玩游戏",
		imgurl:
			"https://i2.hdslb.com/bfs/face/ac46d67a76ac3bb0421dac09a0fc7d568119e035.jpg",
		desc: "GTA战地记者！游戏全资讯！",
		siteurl: "https://space.bilibili.com/3546694847302433",
		weight: 17,
		enabled: true,
	},
	{
		title: "MC",
		imgurl:
			"https://i2.hdslb.com/bfs/face/88bb49e89e5d8526328fd9a9e49020374cb001d0.jpg",
		desc: "哔哩哔哩 UP 主",
		siteurl: "https://space.bilibili.com/1263874079",
		weight: 16,
		enabled: true,
	},
	{
		title: "红纫",
		imgurl:
			"https://i0.hdslb.com/bfs/face/fb5e2692b425fdbeeeaa5e0e85375bb62cbf6ae2.jpg",
		desc: "你也别打听我是谁",
		siteurl: "https://space.bilibili.com/3546977115573183",
		weight: 15,
		enabled: true,
	},
	{
		title: "Remain122",
		imgurl:
			"https://i1.hdslb.com/bfs/face/9611500ae4492a6b425b001a3207cca7f3fc81b9.jpg",
		desc: "为众人抱薪者, 不可使其冻毙于风雪。",
		siteurl: "https://space.bilibili.com/8514841",
		weight: 14,
		enabled: true,
	},
	{
		title: "上厕所要带纸",
		imgurl:
			"https://i0.hdslb.com/bfs/face/62aaf8a1ba32cfaea144d9c678840c3b6c4b3b2c.jpg",
		desc: "右键单击此处可下载图片。为了帮助保护您的隐私，bilibili 禁止自动从 Internet 下载此图片。",
		siteurl: "https://space.bilibili.com/11825838",
		weight: 13,
		enabled: true,
	},
	{
		title: "易富焙",
		imgurl:
			"https://i0.hdslb.com/bfs/face/f5a700db03a8fb6c20f930613165524f13fb0bc2.jpg",
		desc: "去干饭的路上，风都是甜的。",
		siteurl: "https://space.bilibili.com/556757577",
		weight: 12,
		enabled: true,
	},
	{
		title: "Anonym-yoyo",
		imgurl:
			"https://i2.hdslb.com/bfs/face/6f4433953b1f08603ef3497b147561519f333109.jpg",
		desc: "主机免费德瑞bot（洛城风云）",
		siteurl: "https://space.bilibili.com/323038895",
		weight: 11,
		enabled: true,
	},
	{
		title: "某个内向的小伙",
		imgurl: "https://i0.hdslb.com/bfs/face/member/noface.jpg",
		desc: "哔哩哔哩 用户",
		siteurl: "#",
		weight: 10,
		enabled: true,
	},
	{
		title: "dietetic-sleeve0",
		imgurl: "https://i0.hdslb.com/bfs/face/member/noface.jpg",
		desc: "哔哩哔哩 用户",
		siteurl: "#",
		weight: 9,
		enabled: true,
	},
	{
		title: "tifa_cloud15",
		imgurl: "https://i0.hdslb.com/bfs/face/member/noface.jpg",
		desc: "哔哩哔哩 用户",
		siteurl: "#",
		weight: 8,
		enabled: true,
	},
];

// 获取启用的友链并进行排序
export const getEnabledFriends = (): FriendLink[] => {
	const friends = friendsConfig.filter((friend) => friend.enabled);

	if (friendsPageConfig.randomizeSort) {
		return friends.sort(() => Math.random() - 0.5);
	}

	return friends.sort((a, b) => b.weight - a.weight);
};
