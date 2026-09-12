---
title: "基于Koishi的GTA线上天气查询插件制作"
published: 2025-05-04
draft: false
description: "GTA线上天气查询插件制作"
tags: ["GTA", "技术"]
category: "技术"
image: "./featured.jpg"
---

# 基于Koishi的GTA线上天气查询插件制作

众所周知，GTA线上中的天气是一组循环，获取天气和游戏内时间方法如下：

项目基于QQ机器人，框架使用了[Koishi](https://koishi.chat/zh-CN/)

```typescript
import * as tunables from '../util/tunables'

const WEATHERS: Record<number, string> = {
  0: '☁️多云', 4: '🌫️薄雾', 7: '⛅大部多云', 11: '☀️晴朗', 14: '🌫️薄雾', 16: '☀️晴朗',
  28: '🌫️薄雾', 31: '☀️晴朗', 41: '🌁阴霾', 45: '☁️多云', 52: '🌫️薄雾', 55: '☁️多云',
  62: '🌁雾天', 66: '☁️多云', 72: '☁️多云', 78: '🌁雾天', 82: '☁️多云', 92: '🌤️大部晴朗',
  104: '☁️多云', 105: '🌦️毛毛雨', 108: '☁️多云', 125: '🌫️薄雾', 128: '☁️多云',
  131: '🌧️下雨', 134: '🌦️毛毛雨', 137: '☁️多云', 148: '🌫️薄雾', 151: '⛅大部多云',
  155: '🌁雾天', 159: '☀️晴朗', 176: '🌤️大部晴朗', 196: '🌁雾天', 201: '☁️多云',
  220: '🌫️薄雾', 222: '🌤️大部晴朗', 244: '🌫️薄雾', 246: '🌤️大部晴朗', 247: '🌧️下雨',
  250: '🌦️毛毛雨', 252: '☁️多云', 268: '🌫️薄雾', 270: '☁️多云', 272: '☁️多云',
  277: '☁️多云', 292: '🌫️薄雾', 295: '☁️多云', 300: '⛅大部多云',
  306: '☁️多云', 318: '⛅大部多云', 330: '☁️多云', 337: '☀️晴朗',
  367: '☁️多云', 369: '🌧️下雨', 376: '🌦️毛毛雨', 377: '☁️多云'
}
const WEEKDAYS: Record<number, string> = {
  0: '星期日',
  1: '星期一',
  2: '星期二',
  3: '星期三',
  4: '星期四',
  5: '星期五',
  6: '星期六'
}

export function get_weekday(): string {
  const timestamp = Math.floor(Date.now() / 1000)
  const weekday_correction = Math.floor(timestamp / (365 * 2880)) % 7
  const weekdayIdx = Math.floor(timestamp / 2880 + 2 - weekday_correction) % 7
  return WEEKDAYS[weekdayIdx]
}

export function get_hour_and_minute(): string {
  const timestamp = Math.floor(Date.now() / 1000)
  const hour = Math.floor(timestamp / 120) % 24
  const minute = Math.floor(timestamp / 2) % 60
  const formatted_hour = hour < 10 ? '0' + hour : hour.toString()
  const formatted_minute = minute < 10 ? '0' + minute : minute.toString()
  return `${formatted_hour}:${formatted_minute}`
}

export function get_weather_detail(): string {
  const snow_tunable = tunables.get_tunable('TURN_SNOW_ON_OFF')
  if (snow_tunable !== 'invalid' && snow_tunable) {
    return '当前天气：雪天'
  }

  const halloween_tunable = tunables.get_tunable('SSP2WEATHER')
  if (halloween_tunable !== 'invalid' && halloween_tunable) {
    return '当前天气：万圣节'
  }

  const timestamp = Math.floor(Date.now() / 1000)
  const weather_period = timestamp / 120 % 384
  const periods = Object.keys(WEATHERS).map(Number).sort((a, b) => a - b)

  // 当前天气
  let currIdx = 0
  for (let i = periods.length - 1; i >= 0; i--) {
    if (periods[i] <= weather_period) {
      currIdx = i
      break
    }
  }
  const currPeriod = periods[currIdx]
  const currWeather = WEATHERS[currPeriod]

  // 当前天气持续时间
  let nextIdx = (currIdx + 1) % periods.length
  let nextPeriod = periods[nextIdx]
  let durationPeriods = nextPeriod > weather_period
    ? nextPeriod - weather_period
    : nextPeriod + 384 - weather_period
    const currDurationMinutes = Math.round(durationPeriods * 2)
    const currDurationHours = Math.floor(currDurationMinutes / 60)
    const currDurationMins = currDurationMinutes % 60

  // 下一个天气
  const nextWeather = WEATHERS[nextPeriod]
  // 下一个天气持续时间
  let nextNextIdx = (nextIdx + 1) % periods.length
  let nextNextPeriod = periods[nextNextIdx]
  let nextDurationPeriods = nextNextPeriod > nextPeriod
    ? nextNextPeriod - nextPeriod
    : nextNextPeriod + 384 - nextPeriod
    const nextDurationMinutes = Math.round(nextDurationPeriods * 2)
    const nextDurationHours = Math.floor(nextDurationMinutes / 60)
    const nextDurationMins = nextDurationMinutes % 60

  return `\n当前天气：${currWeather}，还将持续${currDurationHours > 0 ? currDurationHours + '小时' : ''}${currDurationMins}分钟\n\n下一个天气：${nextWeather}，持续${nextDurationHours > 0 ? nextDurationHours + '小时' : ''}${nextDurationMins}分钟`
}

export function predict_next_rain(): string {
  const timestamp = Math.floor(Date.now() / 1000)
  const weather_period = timestamp / 120 % 384
  const periods = Object.keys(WEATHERS).map(Number).sort((a, b) => a - b)
  let found = false
  let rainStart = 0, rainEnd = 0

  // 找到下一个雨天开始period
  for (let i = 1; i <= periods.length; i++) {
    const idx = (periods.findIndex(p => p > weather_period) + i) % periods.length
    const period = periods[idx]
    const weather = WEATHERS[period]
    if (weather && (weather.includes('雨') || weather.includes('毛毛雨'))) {
      rainStart = period
      // 继续往后找，直到不是雨天
      for (let j = 1; j <= periods.length; j++) {
        const nextIdx = (idx + j) % periods.length
        const nextPeriod = periods[nextIdx]
        const nextWeather = WEATHERS[nextPeriod]
        if (!nextWeather || (!nextWeather.includes('雨') && !nextWeather.includes('毛毛雨'))) {
          rainEnd = nextPeriod
          break
        }
      }
      found = true
      break
    }
  }

  if (!found) return '未来一轮周期内没有雨天'

  // 计算距离下次雨天的现实时间
  let diff = rainStart - weather_period
  if (diff <= 0) diff += 384
  const real_minutes = Math.round(diff * 2)
  const hours = Math.floor(real_minutes / 60)
  const minutes = real_minutes % 60

  // 计算雨天持续时间
  let durationPeriods = rainEnd > rainStart ? rainEnd - rainStart : rainEnd + 384 - rainStart
  const durationMinutes = durationPeriods * 2
  const durationHours = Math.floor(durationMinutes / 60)
  const durationMins = durationMinutes % 60

  return `\n下次🌧️雨天将在${hours > 0 ? hours + '小时' : ''}${minutes}分钟后，持续${durationHours > 0 ? durationHours + '小时' : ''}${durationMins}分钟👀`
}
```

以上clock插件还需要在index中进行引用才可使用
