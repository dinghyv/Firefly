---
title: "GTA线上+线下所有车辆信息（截至破坏行动探员 v1.70）"
published: 2025-05-04
draft: false
description: "GTA线上+线下所有车辆信息"
tags: ["GTA", "技术"]
category: "游戏"
image: "./featured.jpg"
---

# GTA线上+线下所有车辆信息（截至破坏行动探员 v1.70）

在原版的基础上添加了isPurchaseable以及Imgurl可以获取车辆是否可以从游戏内网站直接购买和车辆图片（来自Rockstar官网），如需可加入QQ群【洛城风云】交流获取（原分享盘已废弃，可前往[服务状态](https://status.antwen.cn/)查看服务可用性）。

以下为示例：

```json
[
  {
    "Name": "adder",
    "DisplayName": {
      "Hash": 3078201489,
      "English": "Adder",
      "German": "Adder",
      "French": "Adder",
      "Italian": "Adder",
      "Russian": "Adder",
      "Polish": "Adder",
      "Name": "ADDER",
      "TraditionalChinese": "靈蛇",
      "SimplifiedChinese": "灵蛇",
      "Spanish": "Adder",
      "Japanese": "アダー",
      "Korean": "애더",
      "Portuguese": "Adder",
      "Mexican": "Adder"
    },
    "Hash": 3078201489,
    "SignedHash": -1216765807,
    "HexHash": "0xB779A091",
    "DlcName": "TitleUpdate",
    "HandlingId": "ADDER",
    "LayoutId": "LAYOUT_LOW_RESTRICTED",
    "Manufacturer": "TRUFFADE",
    "ManufacturerDisplayName": {
      "Hash": 948466431,
      "English": "Truffade",
      "German": "Truffade",
      "French": "Truffade",
      "Italian": "Truffade",
      "Russian": "Truffade",
      "Polish": "Truffade",
      "Name": "TRUFFADE",
      "TraditionalChinese": "特盧菲",
      "SimplifiedChinese": "特卢菲",
      "Spanish": "Truffade",
      "Japanese": "トリュファード",
      "Korean": "트루페이드",
      "Portuguese": "Truffade",
      "Mexican": "Truffade"
    },
    "Class": "SUPER",
    "ClassId": 7,
    "Type": "CAR",
    "PlateType": "BACK_PLATES",
    "DashboardType": "SUPERGT",
    "WheelType": "HIEND",
    "Flags": [
      "FLAG_NO_BOOT",
      "FLAG_SPORTS",
      "FLAG_SPAWN_ON_TRAILER",
      "FLAG_EXTRAS_REQUIRE",
      "FLAG_EXTRAS_STRONG",
      "FLAG_RICH_CAR",
      "FLAG_NO_BROKEN_DOWN_SCENARIO",
      "FLAG_COUNT_AS_FACEBOOK_DRIVEN",
      "FLAG_HAS_INTERIOR_EXTRAS",
      "FLAG_CAN_HAVE_NEONS"
    ],
    "Seats": 2,
    "Price": -1,
    "MonetaryValue": 80000,
    "HasConvertibleRoof": false,
    "HasSirens": false,
    "Weapons": [],
    "ModKits": [
      "0_hiend_modkit"
    ],
    "DimensionsMin": {
      "X": -1.0723572,
      "Y": -2.2091322,
      "Z": -0.595943
    },
    "DimensionsMax": {
      "X": 1.0723567,
      "Y": 2.287151,
      "Z": 0.6308773
    },
    "BoundingCenter": {
      "X": -0.0,
      "Y": 0.0748,
      "Z": 0.049034
    },
    "BoundingSphereRadius": 2.439114,
    "Rewards": null,
    "MaxBraking": 1.0,
    "MaxBrakingMods": 1.1,
    "MaxSpeed": 51.77096,
    "MaxTraction": 2.5,
    "Acceleration": 0.32,
    "Agility": 0.7,
    "MaxKnots": 0.0,
    "MoveResistance": 0.0,
    "HasArmoredWindows": false,
    "DefaultColors": [
      {
        "DefaultPrimaryColor": 0,
        "DefaultSecondaryColor": 41,
        "DefaultPearlColor": 3,
        "DefaultWheelsColor": 156,
        "DefaultInteriorColor": 0,
        "DefaultDashboardColor": 0
      },
      {
        "DefaultPrimaryColor": 1,
        "DefaultSecondaryColor": 0,
        "DefaultPearlColor": 7,
        "DefaultWheelsColor": 156,
        "DefaultInteriorColor": 0,
        "DefaultDashboardColor": 0
      },
      {
        "DefaultPrimaryColor": 4,
        "DefaultSecondaryColor": 12,
        "DefaultPearlColor": 111,
        "DefaultWheelsColor": 156,
        "DefaultInteriorColor": 0,
        "DefaultDashboardColor": 0
      },
      {
        "DefaultPrimaryColor": 111,
        "DefaultSecondaryColor": 2,
        "DefaultPearlColor": 70,
        "DefaultWheelsColor": 156,
        "DefaultInteriorColor": 0,
        "DefaultDashboardColor": 0
      },
      {
        "DefaultPrimaryColor": 3,
        "DefaultSecondaryColor": 13,
        "DefaultPearlColor": 5,
        "DefaultWheelsColor": 156,
        "DefaultInteriorColor": 0,
        "DefaultDashboardColor": 0
      },
      {
        "DefaultPrimaryColor": 75,
        "DefaultSecondaryColor": 0,
        "DefaultPearlColor": 68,
        "DefaultWheelsColor": 156,
        "DefaultInteriorColor": 0,
        "DefaultDashboardColor": 0
      },
      {
        "DefaultPrimaryColor": 5,
        "DefaultSecondaryColor": 30,
        "DefaultPearlColor": 111,
        "DefaultWheelsColor": 156,
        "DefaultInteriorColor": 0,
        "DefaultDashboardColor": 0
      },
      {
        "DefaultPrimaryColor": 29,
        "DefaultSecondaryColor": 38,
        "DefaultPearlColor": 37,
        "DefaultWheelsColor": 156,
        "DefaultInteriorColor": 0,
        "DefaultDashboardColor": 0
      },
      {
        "DefaultPrimaryColor": 36,
        "DefaultSecondaryColor": 27,
        "DefaultPearlColor": 37,
        "DefaultWheelsColor": 156,
        "DefaultInteriorColor": 0,
        "DefaultDashboardColor": 0
      },
      {
        "DefaultPrimaryColor": 89,
        "DefaultSecondaryColor": 39,
        "DefaultPearlColor": 91,
        "DefaultWheelsColor": 156,
        "DefaultInteriorColor": 0,
        "DefaultDashboardColor": 0
      }
    ],
    "DefaultBodyHealth": 1000.0,
    "DirtLevelMin": 0.0,
    "DirtLevelMax": 0.3,
    "Trailers": [],
    "AdditionalTrailers": [],
    "Extras": [
      1,
      10,
      12
    ],
    "RequiredExtras": [
      1,
      10
    ],
    "SpawnFrequency": 30.0,
    "WheelsCount": 4,
    "HasParachute": false,
    "HasKers": false,
    "DefaultHorn": 2782658355,
    "DefaultHornVariation": 0,
    "Bones": [
      {
        "BoneIndex": 0,
        "BoneId": 0,
        "BoneName": "chassis"
      },
      {
        "BoneIndex": 1,
        "BoneId": 42990,
        "BoneName": "bonnet"
      },
      {
        "BoneIndex": 2,
        "BoneId": 22841,
        "BoneName": "bumper_f"
      },
      {
        "BoneIndex": 3,
        "BoneId": 60963,
        "BoneName": "door_dside_f"
      },
      {
        "BoneIndex": 4,
        "BoneId": 26734,
        "BoneName": "window_lf"
      },
      {
        "BoneIndex": 5,
        "BoneId": 49152,
        "BoneName": "handle_dside_f"
      },
      {
        "BoneIndex": 6,
        "BoneId": 11965,
        "BoneName": "doorlight_lf"
      },
      {
        "BoneIndex": 7,
        "BoneId": 35346,
        "BoneName": "door_pside_f"
      },
      {
        "BoneIndex": 8,
        "BoneId": 28174,
        "BoneName": "window_rf"
      },
      {
        "BoneIndex": 9,
        "BoneId": 23407,
        "BoneName": "handle_pside_f"
      },
      {
        "BoneIndex": 10,
        "BoneId": 11549,
        "BoneName": "doorlight_rf"
      },
      {
        "BoneIndex": 11,
        "BoneId": 4218,
        "BoneName": "wing_lf"
      },
      {
        "BoneIndex": 12,
        "BoneId": 4186,
        "BoneName": "wing_rf"
      },
      {
        "BoneIndex": 13,
        "BoneId": 26746,
        "BoneName": "window_lr"
      },
      {
        "BoneIndex": 14,
        "BoneId": 28186,
        "BoneName": "window_rr"
      },
      {
        "BoneIndex": 15,
        "BoneId": 39561,
        "BoneName": "windscreen"
      },
      {
        "BoneIndex": 16,
        "BoneId": 20609,
        "BoneName": "brakelight_m"
      },
      {
        "BoneIndex": 17,
        "BoneId": 60113,
        "BoneName": "bodyshell"
      },
      {
        "BoneIndex": 18,
        "BoneId": 35938,
        "BoneName": "hub_lr"
      },
      {
        "BoneIndex": 19,
        "BoneId": 35926,
        "BoneName": "hub_lf"
      },
      {
        "BoneIndex": 20,
        "BoneId": 5589,
        "BoneName": "suspension_lr"
      },
      {
        "BoneIndex": 21,
        "BoneId": 5577,
        "BoneName": "suspension_lf"
      },
      {
        "BoneIndex": 22,
        "BoneId": 36022,
        "BoneName": "hub_rf"
      },
      {
        "BoneIndex": 23,
        "BoneId": 6505,
        "BoneName": "suspension_rf"
      },
      {
        "BoneIndex": 24,
        "BoneId": 36034,
        "BoneName": "hub_rr"
      },
      {
        "BoneIndex": 25,
        "BoneId": 6517,
        "BoneName": "suspension_rr"
      },
      {
        "BoneIndex": 26,
        "BoneId": 18400,
        "BoneName": "taillight_l"
      },
      {
        "BoneIndex": 27,
        "BoneId": 41664,
        "BoneName": "indicator_lf"
      },
      {
        "BoneIndex": 28,
        "BoneId": 10804,
        "BoneName": "headlight_l"
      },
      {
        "BoneIndex": 29,
        "BoneId": 18438,
        "BoneName": "taillight_r"
      },
      {
        "BoneIndex": 30,
        "BoneId": 10842,
        "BoneName": "headlight_r"
      },
      {
        "BoneIndex": 31,
        "BoneId": 40032,
        "BoneName": "indicator_rf"
      },
      {
        "BoneIndex": 32,
        "BoneId": 30510,
        "BoneName": "engine"
      },
      {
        "BoneIndex": 33,
        "BoneId": 50446,
        "BoneName": "exhaust_2"
      },
      {
        "BoneIndex": 34,
        "BoneId": 65271,
        "BoneName": "overheat_2"
      },
      {
        "BoneIndex": 35,
        "BoneId": 15850,
        "BoneName": "overheat"
      },
      {
        "BoneIndex": 36,
        "BoneId": 4944,
        "BoneName": "exhaust"
      },
      {
        "BoneIndex": 37,
        "BoneId": 37995,
        "BoneName": "interiorlight"
      },
      {
        "BoneIndex": 38,
        "BoneId": 59562,
        "BoneName": "seat_pside_f"
      },
      {
        "BoneIndex": 39,
        "BoneId": 20012,
        "BoneName": "seat_dside_f"
      },
      {
        "BoneIndex": 40,
        "BoneId": 26398,
        "BoneName": "wheel_rr"
      },
      {
        "BoneIndex": 41,
        "BoneId": 26418,
        "BoneName": "wheel_rf"
      },
      {
        "BoneIndex": 42,
        "BoneId": 27902,
        "BoneName": "wheel_lr"
      },
      {
        "BoneIndex": 43,
        "BoneId": 27922,
        "BoneName": "wheel_lf"
      },
      {
        "BoneIndex": 44,
        "BoneId": 20247,
        "BoneName": "wheelmesh_lf"
      },
      {
        "BoneIndex": 45,
        "BoneId": 11707,
        "BoneName": "wheelmesh_lf_l1"
      },
      {
        "BoneIndex": 46,
        "BoneId": 11708,
        "BoneName": "wheelmesh_lf_l2"
      },
      {
        "BoneIndex": 47,
        "BoneId": 12049,
        "BoneName": "wheelmesh_lf_ng"
      },
      {
        "BoneIndex": 48,
        "BoneId": 37313,
        "BoneName": "chassis_lowlod"
      },
      {
        "BoneIndex": 49,
        "BoneId": 33134,
        "BoneName": "slipstream_r"
      },
      {
        "BoneIndex": 50,
        "BoneId": 33128,
        "BoneName": "slipstream_l"
      },
      {
        "BoneIndex": 51,
        "BoneId": 11869,
        "BoneName": "dashglow"
      },
      {
        "BoneIndex": 52,
        "BoneId": 5558,
        "BoneName": "platelight"
      },
      {
        "BoneIndex": 53,
        "BoneId": 49485,
        "BoneName": "neon_l"
      },
      {
        "BoneIndex": 54,
        "BoneId": 49491,
        "BoneName": "neon_r"
      },
      {
        "BoneIndex": 55,
        "BoneId": 49479,
        "BoneName": "neon_f"
      },
      {
        "BoneIndex": 56,
        "BoneId": 49475,
        "BoneName": "neon_b"
      },
      {
        "BoneIndex": 57,
        "BoneId": 20285,
        "BoneName": "steeringwheel"
      },
      {
        "BoneIndex": 58,
        "BoneId": 10844,
        "BoneName": "extra_12"
      },
      {
        "BoneIndex": 59,
        "BoneId": 41970,
        "BoneName": "extra_ten"
      },
      {
        "BoneIndex": 60,
        "BoneId": 16572,
        "BoneName": "dials"
      },
      {
        "BoneIndex": 61,
        "BoneId": 8874,
        "BoneName": "extra_1"
      },
      {
        "BoneIndex": 62,
        "BoneId": 39433,
        "BoneName": "chassis_dummy"
      }
    ],
    "ImgUrl": "https://s.rsg.sc/sc/images/games/GTAV/vehicles/screens/mp/main/adder.jpg?resize=648px:*",
    "isPurchaseable": 1
  },
```
