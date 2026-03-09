export const siteMeta = {
  name: '梁斌',
  tagline: '把 AI 变成学习力、生产力和实际结果',
  bookingLink: 'https://wj.qq.com/s2/25653939/5109/',
}

export const notionLinks = {
  aiMindset: 'https://silencebin.notion.site/',
  promptCourse: '',
  xhsCourse: '',
  aiPhotoProject: 'https://ai-photo.silencebin.com',
  newsWeekly: 'https://news.silencebin.com',
  toolsAndWorkflow: '',
  contentPortfolio: 'https://silencebin.notion.site/',
  visualPortfolio: 'https://ai-photo.silencebin.com',
  consulting: '',
  projectCooperation: '',
}

export const navigationItems = [
  { href: '#about', label: '关于我' },
  { href: '#problems', label: '解决问题' },
  { href: '#capabilities', label: '能力模块' },
  { href: '#portfolio', label: '成果作品' },
  { href: '#cooperation', label: '合作方式' },
  { href: '#contact', label: '联系我' },
]

export const heroConfig = {
  title: '把 AI 变成学习力、生产力和实际结果',
  subtitle: 'AI 应用实践者 / AI 全栈落地者 / AI 增长与赋能探索者',
  description:
    '我有后端开发和技术管理背景，持续围绕 AI 思维、AI 全栈开发、AI 自媒体运营和 AI 多模态创作展开实践，沉淀从认知到落地、从工具到成果的可复用方法。',
  primaryButtonText: '查看我的成果',
  primaryButtonLink: '#cases',
  secondaryButtonText: '联系合作',
  secondaryButtonLink: '#contact',
  highlights: [
    '5000 小时 AI 共生实践',
    '方法论 + 项目 + 内容三线并进',
    '聚焦真实场景，而非停留在工具演示',
  ],
  stats: [
    { label: '持续实践', value: '5000h' },
    { label: '内容影响力', value: '近 1w' },
    { label: '典型方向', value: '4 类' },
  ],
}

export const introConfig = {
  title: '我是谁',
  paragraphs: [
    '我是一名长期研究 AI 应用落地的实践者，拥有多年后端开发与技术管理经验。相比于单纯讨论工具，我更关注 AI 如何进入真实工作与业务场景，并沉淀为可复用的方法、流程和结果。',
    '这些年，我持续围绕 AI 协作、AI 编程、AI 内容生产、多模态表达和工作流搭建展开实践，希望把 AI 真正用到学习、提效、增长与项目落地中。',
  ],
  tags: ['AI 应用落地', 'AI 全栈开发', 'AI 内容增长', 'AI 多模态实践'],
}

export const problemConfig = {
  title: '我能帮你把 AI 用到真实场景里',
  description: '把抽象能力翻译成真实问题，让访问者在几秒内判断是否值得继续了解。',
  items: [
    {
      icon: 'compass',
      title: '不会学 AI，不知道从哪开始',
      description: '帮你建立 AI 学习路径、使用边界和高效协作方式。',
    },
    {
      icon: 'boxes',
      title: '想做 AI 项目，但落不了地',
      description: '帮你把想法变成产品、工具、流程或可执行方案。',
    },
    {
      icon: 'workflow',
      title: '想用 AI 提效，但总觉得不稳定',
      description: '帮你搭建可复用的提示词结构、工作流与协作方式。',
    },
    {
      icon: 'sparkles',
      title: '想用 AI 做内容或视觉表达',
      description: '帮你把 AI 用到内容运营、多模态创作和个人品牌增长中。',
    },
  ],
}

export const capabilityConfig = {
  title: '四大能力模块',
  description: '从思维、开发、增长到多模态表达，能力必须能落到成果和合作形态上。',
  items: [
    {
      icon: 'brain',
      title: 'AI 思维与提效赋能',
      description:
        '5000 小时持续研究 AI 共生与应用实践，关注 AI 的能力边界、使用边界和协作方式，帮助个人与团队建立真正可用的 AI 学习与提效体系。',
      bulletPoints: [
        '系统研究 AI 如何进入学习、工作与业务场景',
        '理解 AI 在提效、知识管理与认知升级中的价值',
        '建立了完善的 Notion 知识库',
        '进行过线下课程讲授',
        '涉及 AI 思维课程、提示词工程课程与 AI 赋能内容运营课程',
      ],
      metric: '知识库 / 课程 / 方法论',
      buttonText: '查看相关成果',
      buttonLink: '',
    },
    {
      icon: 'code',
      title: 'AI 全栈开发与工作流落地',
      description:
        '基于资深后端 Java 工程师与技术管理背景，借助 AI 完成从前端、后端、数据库到运维和运营的全链路落地，把想法快速变成可运行的产品和工具。',
      bulletPoints: [
        '资深后端开发与技术管理背景',
        '利用 AI 补齐全栈开发能力',
        '独立完成 AI 写真网站从开发到上线',
        '搭建 AI 新闻周报网站',
        '实践多个小工具、skills、MCP、AI 工作流与智能体',
      ],
      metric: '从想法到上线闭环',
      buttonText: '查看项目成果',
      buttonLink: notionLinks.aiPhotoProject,
    },
    {
      icon: 'megaphone',
      title: 'AI 赋能内容增长与个人品牌运营',
      description:
        '从零开始利用 AI 学习并实践自媒体运营，形成了适用于个人品牌起号、内容生产和经验输出的 AI 辅助 SOP。',
      bulletPoints: [
        '用 AI 学会并实践自媒体运营',
        '总结 AI 辅助起号 SOP',
        '输出 AI 洞察、AI 经验分享与 AI 写真成果',
        '全网接近一万粉丝',
        '主要活跃在小红书和微信公众号',
      ],
      metric: '增长 / 内容 / 影响力',
      buttonText: '查看内容成果',
      buttonLink: notionLinks.contentPortfolio,
    },
    {
      icon: 'image',
      title: 'AI 多模态创作与商业表达',
      description:
        '将 AI 生图、生视频等多模态能力应用于个人写真、商品广告和内容视觉表达，探索可交付的创意方案和商业表达方式。',
      bulletPoints: [
        '持续学习 AI 生图与生视频技术',
        '在 AI 写真上形成自己的方法和审美',
        '可应用于个人写真、商品广告、电商视觉等场景',
        '擅长通过提示词控制视觉结果',
      ],
      metric: '审美 / 控制 / 商业表达',
      buttonText: '查看案例作品',
      buttonLink: notionLinks.visualPortfolio,
    },
  ],
}

export const portfolioConfig = {
  title: '我做过的一些实践与成果',
  description: '让能力不只停留在表述层，而是对应到产品、方法论、内容资产和视觉案例。',
  categories: [
    {
      title: '产品 / 网站',
      buttonText: '查看案例',
      buttonLink: notionLinks.aiPhotoProject || notionLinks.newsWeekly || '#contact',
      items: [
        {
          title: 'AI 写真网站',
          shortDescription: '借助 AI 与全栈开发能力独立完成的网站项目，覆盖前端、后端、数据库、运维与运营。',
          proofText: '它证明了：我可以把 AI 用于从想法到上线的完整闭环。',
          tags: ['全栈', 'AI 应用', '产品化'],
          buttonText: '联系查看详情',
          buttonLink: 'https://ai-photo.silencebin.com',
        },
        {
          title: 'AI 新闻周报网站',
          shortDescription: '将内容选题、站点搭建、持续输出串成一个可维护的品牌资产。',
          proofText: '它证明了：我不仅能做工具，也能把长期内容运营做成系统。',
          tags: ['网站', '内容系统', '持续运营'],
          buttonText: '访问网站',
          buttonLink: 'https://news.silencebin.com',
        },
      ],
    },
    {
      title: '知识资产 / 方法论',
      buttonText: '查看案例',
      buttonLink: notionLinks.aiMindset || '#contact',
      items: [
        {
          title: 'Notion AI 知识库',
          shortDescription: '持续沉淀 AI 思维、工具实践、案例拆解和工作方法。',
          proofText: '它证明了：我不是零散试用，而是在构建可复用的认知资产。',
          tags: ['知识库', '方法论', '持续沉淀'],
          buttonText: '',
          buttonLink: '',
        },
        {
          title: 'AI 学习与提效 SOP',
          shortDescription: '把 AI 学习、提效与协作拆成可执行步骤，减少试错成本。',
          proofText: '它证明了：我能把经验沉淀为别人也能直接使用的路径。',
          tags: ['SOP', '提效', '协作'],
          buttonText: '',
          buttonLink: '',
        },
      ],
    },
    {
      title: '内容与影响力',
      buttonText: '查看案例',
      buttonLink: notionLinks.contentPortfolio || '#contact',
      items: [
        {
          title: '小红书与公众号内容输出',
          shortDescription: '围绕 AI 洞察、实战经验和多模态表达持续创作，形成内容矩阵。',
          proofText: '它证明了：我能把复杂实践转成公众可理解、可传播的内容。',
          tags: ['内容增长', '个人品牌', '传播'],
          buttonText: '',
          buttonLink: '',
        },
        {
          title: 'AI 经验分享与课程输出',
          shortDescription: '把工作中的方法和认知整理成分享内容与课程主题。',
          proofText: '它证明了：我不只会做，还能讲清楚、教清楚、带着别人做。',
          tags: ['分享', '课程', '赋能'],
          buttonText: '',
          buttonLink: '',
        },
      ],
    },
    {
      title: '多模态案例',
      buttonText: '查看案例',
      buttonLink: notionLinks.visualPortfolio || '#contact',
      items: [
        {
          title: 'AI 写真案例',
          shortDescription: '聚焦人物写真方向，兼顾风格控制、审美统一和结果交付。',
          proofText: '它证明了：我可以把 AI 视觉结果做成具有商业表达力的内容。',
          tags: ['写真', '审美', '可交付'],
          buttonText: '',
          buttonLink: '',
        },
        {
          title: '商品广告与商业视觉表达',
          shortDescription: '将 AI 生成能力与商业目标结合，用于商品展示和视觉表达。',
          proofText: '它证明了：多模态创作不只是好看，而是可以服务业务目标。',
          tags: ['广告', '商业视觉', '多模态'],
          buttonText: '',
          buttonLink: '',
        },
      ],
    },
  ],
}

export const cooperationConfig = {
  title: '你可以这样和我合作',
  items: [
    {
      title: '1 对 1 咨询',
      description: '适合希望系统学习 AI、解决 AI 实践卡点、梳理 AI 赋能方向的个人或团队。',
      scenarios: [
        '如何学习 AI',
        'AI 实践中的问题诊断',
        'AI 如何赋能业务',
        'AI 辅助个人学习与提效',
      ],
      suitableFor: '你目前有明确问题，希望在短时间内获得针对性的分析和建议。',
      buttonText: '预约沟通',
      buttonLink: 'https://wj.qq.com/s2/25653939/5109/',
    },
    {
      title: '项目陪跑 / 项目合作',
      description: '以 AI 应用架构师或解决方案角色参与项目，帮助个人或企业从需求梳理、方案设计到落地推进。',
      scenarios: [
        'AI 提效项目',
        'AI 工作流搭建',
        'AI 内容生产体系设计',
        'AI 项目从 0 到 1 验证',
      ],
      suitableFor: '你已经有方向或项目，但需要一个既懂 AI、又懂落地的人共同推进。',
      buttonText: '联系合作',
      buttonLink: '#contact',
    },
    {
      title: '深度合作 / 全职共建',
      description: '适合已经明确要推进 AI 转型、AI 项目或 AI 能力建设的企业，可作为核心角色深度参与。',
      scenarios: [
        '企业 AI 能力建设',
        'AI 项目长期共建',
        '业务流程 AI 化',
        '团队 AI 协作与赋能',
      ],
      suitableFor: '你希望找到一个可以真正进入团队、共同承担结果的人。',
      buttonText: '进一步沟通',
      buttonLink: 'mailto:silence52168@gmail.com',
    },
  ],
}

export const audienceConfig = {
  title: '这些场景下，我可能能帮到你',
  items: [
    {
      icon: 'user',
      title: '个人学习者',
      description: '想系统学习 AI，但不知道怎么开始，也不知道如何真正用起来。',
    },
    {
      icon: 'pen',
      title: '创作者 / 个体经营者',
      description: '想用 AI 做内容、提效率、打造个人品牌或做视觉表达。',
    },
    {
      icon: 'rocket',
      title: '创业者 / 小团队',
      description: '想借助 AI 快速验证产品、搭建 workflow、做项目推进。',
    },
    {
      icon: 'building',
      title: '企业团队',
      description: '想做 AI 培训、AI 提效、AI 项目落地或长期共建。',
    },
  ],
}

export const contactConfig = {
  title: '如果你想把 AI 真正用起来，欢迎联系我',
  description:
    '无论你是想学习 AI、提升效率、验证项目，还是寻找长期共建的合作伙伴，都欢迎和我交流。我更关注的不只是会不会用 AI，而是如何把 AI 变成真正可复用的能力与结果。',
  primaryButtonText: '预约 15 分钟沟通',
  primaryButtonLink: 'https://wj.qq.com/s2/25653939/5109/',
  channels: [
    {
      type: 'wechat',
      label: '微信',
      value: 'silence52168',
      href: '',
    },
    {
      type: 'email',
      label: '邮箱',
      value: 'silence52168@gmail.com',
      href: 'mailto:silence52168@gmail.com',
    },
    {
      type: 'website',
      label: 'AI 新闻周报',
      value: 'news.silencebin.com',
      href: 'https://news.silencebin.com',
    },
  ],
}
