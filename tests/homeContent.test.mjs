import test from 'node:test'
import assert from 'node:assert/strict'

import {
  heroConfig,
  capabilityConfig,
  portfolioConfig,
  cooperationConfig,
  audienceConfig,
  navigationItems,
} from '../src/content/homeContent.js'

test('首页内容配置包含完整导航锚点', () => {
  const hrefs = navigationItems.map((item) => item.href)

  assert.deepEqual(hrefs, [
    '#about',
    '#problems',
    '#capabilities',
    '#portfolio',
    '#cooperation',
    '#contact',
  ])
})

test('首页核心模块数量符合 v1.5 结构要求', () => {
  assert.equal(capabilityConfig.items.length, 4)
  assert.equal(cooperationConfig.items.length, 3)
  assert.equal(audienceConfig.items.length, 4)
  assert.ok(portfolioConfig.categories.length >= 3)
})

test('Hero 区提供双 CTA 与人物标题', () => {
  assert.match(heroConfig.title, /AI/)
  assert.ok(heroConfig.primaryButtonText)
  assert.ok(heroConfig.secondaryButtonText)
})
