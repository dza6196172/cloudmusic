export default URL = {
  banner:'/banner',//banner
  recommend:'/personalized', //推荐歌单
  privatecontent:'/personalized/privatecontent', //独家放送
  newsong:'/personalized/newsong', //最新音乐
  recommendmv:'/personalized/mv',//推荐mv
  djprogram:'/personalized/djprogram', //主播电台
  musicurl:'/song/url',//歌曲url
  musicinfo:'/song/detail',//歌曲信息
  search:'/search', //搜索
  searchsuggest:'/search/suggest', //搜索建议
  searchhot:'/search/hot/detail', //热搜榜

  // 登录相关接口
  qrcodekey:'/login/qr/key', //生成二维码key
  qrcode:'/login/qr/create', //生成二维码
  qrcodelogin:'/login/qr/check', //检测二维码扫描状态接口
  userdetail:'/user/detail', //获取用户详情
  useraccount:'/user/account', //获取账号信息

  //通知
  msgprivate:'/msg/private', //私信
  msgcomments:'/msg/comments', //评论
  msgforwards:'/msg/forwards', //@我
  msgnotices:'msg/notices', //通知

  //歌单
  userplaylist:'/user/playlist',//获取用户歌单
  playlistdetail:'/playlist/detail',//获取歌单详情
  playlistcomment:'/comment/playlist',//获取歌单评论
}