// 配置
window.Config = {

  // 站点名
  SiteName: 'Andy's服务器状态',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api 域名
  // 只需填写域名部分，默认为官网域名
  // 因官网 API 时不时的会 CROS 报错，可填自定义反代域名
  // 详见 https://github.com/yb/uptime-status/ 说明
  ApiDomain: 'api.uptimerobot.com',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm790207827-5d2450ad222851dcbaf4115e',
    'm790207835-26c0b5d9cc217590a5addb89',
    'm790207684-058babeb37e08e4dfe983d14',
    'm790207681-086fbd7c3a89712191419e38',
    'm790207831-f781308c1bec8328da9da2d9',
  ],

  // 是否显示监测站点的链接
  ShowLink: false,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 30,

  // 导航栏菜单
  Navi: [
    {
      text: 'Homepage',
      url: 'http://andylive.cn/'
    },
    {
      text: 'GitHub',
      url: 'https://github.com/yb/uptime-status'
    }
  ]
};
