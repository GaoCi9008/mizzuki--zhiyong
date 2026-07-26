// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = Record<string, Device[]> & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	OnePlus: [
		{
			name: "OnePlus ACE 2",
			image: "/images/device/oneplusACE 2.webp",
			specs: "Gray / 16G + 1TB",
			description: "性能 自由",
			link: "https://www.oneplus.com/cn/ace-2",
		},
		{
			name: "OnePlus 15T",
			image: "/images/device/oneplus15t.webp",
			specs: "Gray / 16G + 1TB",
			description: "又小又强又美又全面.",
			link: "https://www.oneplus.com/cn/15t",
		},
	],
	Router: [
		{
			name: "GL-MT3000",
			image: "/images/device/mt3000.webp",
			specs: "1000Mbps / 2.5G",
			description:
				"Portable WiFi 6 router suitable for business trips and home use.",
			link: "https://www.gl-inet.cn/products/gl-mt3000/",
		},
	],
};