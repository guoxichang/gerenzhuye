/**
 *  自定义网站配置 
 */
var site_favicon	 = "https://i.loli.net/2020/11/20/4hvwj3U1WMcIpxe.jpg";	
const config = {
  title: "郭先生",                 //write your website title
  subtitle: "欢迎世界上最帅的爸爸回来！", //write your website subtitle
  logo_icon: "meh",               //select your logo by semantic-ui icon (you can get more msg in:https://semantic-ui.com/elements/icon.html)
  hitokoto: true,                     //use hitokoto or not
  search:true,                        //enable search function
  search_engine:[                     //choose search engine which you use
    {
      name:"百 度",
      template:"https://www.baidu.com/s?wd=$s"
    },
    {
      name:"谷 歌",
      template:"https://www.google.com/search?q=$s"
    },
    {
      name:"必 应",
      template:"https://www.bing.com/search?q=$s"
    },
    {
      name:"搜 狗",
      template:"https://www.sogou.com/web?query=$s"
    }
  ],
  selling_ads: true,                  //Selling your domain or not.(turning on may be helpful for selling this domain by showing some ads.)
  sell_info:{
    domain:"guoxichang.vip",
    price:99999999,                        //domain price
    mon_unit:"yen sign",              //monetary unit 
    contact:[                         //how to contact you
      {
        type:"envelope",               //contact type ("weixin","qq","telegram plane","envelope" or "phone")
        content:"2248906086@qq.com"
      }
    ]                        
  },
  lists: [                            //Url list
    {
      name:"个人",
      icon:"code",
      list:[
        {
          url:"https://xydh.fun/guoxiaohan/",
          name:"书签",
          desc:"个人书签"
        },
        {
          url:"http://n.lackk.com/",
          name:"lanke",
          desc:"兰客书签"
        },
        {
          url:"https://www.sucai1314.com/",
          name:"下图网",
          desc:"素材下载"
        },
        {
          url:"https://guoxichang.vip/zhuye",
          name:"关于我",
          desc:"个人主页"
        },
        {
          url:"http://guoxichang.vip/azb",
          name:"安装包",
          desc:"常用安装包"
        },
        {
          url:"http://lackk.com/vip/",
          name:"vip解析",
          desc:"会员视频解析"
        },
        {
          url:"http://guoxichang.vip/dsyy",
          name:"电商运营",
          desc:"电商运营常用"
        },
        {
          url:"https://guoxichang.vip/zhuye",
          name:"关于我",
          desc:"个人主页"
        },
        {
          url:"https://www.xiami.com/",
          name:"虾米音乐",
          desc:"虾米音乐"
        },
        {
          url:"https://music.163.com/",
          name:"网易云",
          desc:"网易云音乐"
        },
        {
          url:"https://www.kugou.com/",
          name:"酷狗",
          desc:"酷狗音乐"
        },
        {
          url:"https://y.qq.com",
          name:"qq音乐",
          desc:"qq音乐"
        },
        {
          url:"https://v.qq.com/",
          name:"腾讯",
          desc:"腾讯视频"
        },
        {
          url:"https://www.iqiyi.com/",
          name:"爱奇艺",
          desc:"爱奇艺视频"
        },
        {
          url:"https://www.youku.com/",
          name:"优酷",
          desc:"优酷视频"
        },
        {
          url:"https://www.bilibili.com/",
          name:"哔哩哔哩",
          desc:"哔哩哔哩"
        },
         {
          url:"https://weibo.com/80904953",
          name:"微博",
          desc:"新浪微博"
        },
        {
          url:"https://www.zhihu.com",
          name:"知乎",
          desc:"知乎"
        },
        {
          url:"https://www.pianku.tv",
          name:"片库",
          desc:"片库"
        },
        {
          url:"https://fanxing.kugou.com",
          name:"繁星",
          desc:"繁星直播"
        },
        {
          url:"https://www.aliyun.com/",
          name:"阿里云",
          desc:"阿里云后台"
        },
        {
          url:"https://dash.cloudflare.com",
          name:"cloudflare",
          desc:"cloudflare"
        },
        {
          url:"https://www.flyme.com/",
          name:"flyme",
          desc:"flyme"
        },
        {
          url:"https://www.wps.cn",
          name:"wps",
          desc:"wps官网"
        },
        {
          url:"https://email.163.com",
          name:"163邮箱",
          desc:"163邮箱"
        },
        {
          url:"https://mail.qq.com ",
          name:"qq邮箱",
          desc:"qq邮箱"
        },
        {
          url:"https://mail.sina.com.cn/",
          name:"新浪邮箱",
          desc:"新浪邮箱"
        },
        {
          url:"https://mail.aliyun.com/",
          name:"阿里邮箱",
          desc:"阿里邮箱"
        },
        {
          url:"https://www.dingtalk.com",
          name:"钉钉",
          desc:"钉钉"
        },
        {
          url:"https://jm.jd.com",
          name:"京麦",
          desc:"京麦工作台"
        },
        {
          url:"https://www.guoguo-app.com",
          name:"菜鸟",
          desc:"菜鸟裹裹"
        },
        {
          url:"https://www.sf-express.com",
          name:"顺丰",
          desc:"顺丰官网"
        },
      ]
    },
    {
      name:"素材",
      icon:"code",
      list:[
         {
          url:"https://www.douyin.com",
          name:"抖音",
          desc:"抖音短视频"
        },
        {
          url:"https://zhuanlan.zhihu.com",
          name:"知乎专栏",
          desc:"知乎专栏"
        },
        {
          url:"https://mp.toutiao.com",
          name:"头条号",
          desc:"头条号"
        },
        {
          url:"https://cli.im",
          name:"草料",
          desc:"草料二维码"
        },
        {
          url:"https://baijiahao.baidu.com/",
          name:"百家号",
          desc:"百家号"
        },
        {
          url:"https://mp.dayu.com",
          name:"大鱼号",
          desc:"大鱼号"
        },
        {
          url:"https://mp.qq.com",
          name:"qq公众号",
          desc:"qq公众号"
        },
        {
          url:"https://mp.weixin.qq.com",
          name:"微信",
          desc:"微信公众号"
        },
        {
          url:"https://www.58pic.com",
          name:"千图网",
          desc:"千图网"
        },
        {
          url:"https://588ku.com",
          name:"千库网",
          desc:"千库网"
        },
        {
          url:"https://699pic.com",
          name:"摄图网",
          desc:"摄图网"
        },
        {
          url:"http://new.90sheji.com/",
          name:"90设计",
          desc:"90设计"
        },
        {
          url:"https://ibaotu.com",
          name:"包图网",
          desc:"包图网"
        },
        {
          url:"https://www.ooopic.com",
          name:"我图网",
          desc:"我图网"
        },
        {
          url:"http://www.51yuansu.com",
          name:"觅元素",
          desc:"觅元素"
        },
        {
          url:"https://www.tukuppt.com",
          name:"熊猫办公",
          desc:"熊猫办公"
        },
        {
          url:"http://www.docer.com",
          name:"稻壳",
          desc:"稻壳"
        },
        {
          url:"https://izihun.com/",
          name:"字魂",
          desc:"字魂"
        },
        {
          url:"https://www.88tph.com/",
          name:"图品网",
          desc:"图品网"
        },
        {
          url:"https://huaban.com",
          name:"花瓣",
          desc:"花瓣"
        },
        {
          url:"https://pan.baidu.com/",
          name:"百度云",
          desc:"百度云"
        },
        {
          url:"https://www.lanzou.com",
          name:"蓝奏云",
          desc:"蓝奏云"
        },
        {
          url:"https://www.135editor.com",
          name:"135编辑器",
          desc:"微信文章编辑"
        },
        {
          url:"https://compresspng.com/",
          name:"图片压缩",
          desc:"在线png压缩"
        },
       
      ]
    },
    {
      name:"常用软件官网",
      icon:"code",
      list:[
         {
          url:"https://weixin.qq.com",
          name:"微信",
          desc:"微信官网"
        },
        {
          url:"https://im.qq.com",
          name:"qq",
          desc:"qq官网"
        },
        {
          url:"https://www.dingtalk.com",
          name:"钉钉",
          desc:"钉钉官网"
        },
        {
          url:"https://jm.jd.com",
          name:"京麦",
          desc:"京麦工作台"
        },
        {
          url:"https://www.google.cn/intl/zh-CN/chrome",
          name:"chrome",
          desc:"谷歌浏览器"
        },
        {
          url:"https://www.360.cn",
          name:"360",
          desc:"360软件官网"
        },
        {
          url:"https://www.lenovo.com.cn",
          name:"联想",
          desc:"联想官网"
        },
        {
          url:"https://support.hp.com/cn-zh/drivers",
          name:"惠普",
          desc:"惠普官网"
        },
        {
          url:"https://pinyin.sogou.com/",
          name:"搜狗",
          desc:"搜狗输入法"
        },
        {
          url:"https://www.wps.cn",
          name:"wps",
          desc:"wps官网"
        },
        {
          url:"http://www.neoimaging.cn",
          name:"压图软件",
          desc:"图片压缩软件"
        },
        {
          url:"https://sunlogin.oray.com",
          name:"向日葵",
          desc:"远程控制电脑"
        },
        {
          url:"https://cn.bandisoft.com/",
          name:"bandzip",
          desc:"压缩软件"
        },
        {
          url:"https://pan.baidu.com",
          name:"百度网盘",
          desc:"百度网盘"
        },
        {
          url:"https://store.steampowered.com/",
          name:"steam",
          desc:"steam官网"
        },
        {
          url:"https://www.tukuppt.com",
          name:"熊猫办公",
          desc:"熊猫办公"
        },
        {
          url:"https://www.xiami.com/",
          name:"虾米音乐",
          desc:"虾米音乐"
        },
        {
          url:"https://music.163.com/",
          name:"网易云",
          desc:"网易云音乐"
        },
        {
          url:"https://www.kugou.com/",
          name:"酷狗",
          desc:"酷狗音乐"
        },
        {
          url:"https://y.qq.com",
          name:"qq音乐",
          desc:"qq音乐"
        },
        {
          url:"https://v.qq.com/",
          name:"腾讯",
          desc:"腾讯视频"
        },
        {
          url:"https://www.iqiyi.com/",
          name:"爱奇艺",
          desc:"爱奇艺视频"
        },
        {
          url:"https://www.youku.com/",
          name:"优酷",
          desc:"优酷视频"
        },
        {
          url:"https://www.bilibili.com/",
          name:"哔哩哔哩",
          desc:"哔哩哔哩"
        },
       
      ]
    },
    {
      name:"工作",
      icon:"graduation cap",
      list:[
        {
          url:"https://myseller.taobao.com/",
          name:"商家后台",
          desc:"天猫商家后台"
        },
        {
          url:"https://shop.jd.com/",
          name:"商家后台",
          desc:"京东商家后台"
        },
        {
          url:"https://www.taobao.com/",
          name:"淘宝",
          desc:"淘宝官网"
        },
        {
          url:"https://www.jd.com/",
          name:"京东",
          desc:"京东商城"
        },
      ]
    }
  ]
}
const el = (tag, attrs, content) => `<${tag} ${attrs.join(" ")}>${content}</${tag}>`;

async function handleRequest(request) {
  const init = {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  }
  return new Response(renderHTML(renderIndex(),config.selling_ads? renderSeller() :null), init);
}
addEventListener('fetch', event => {
  return event.respondWith(handleRequest(event.request))
})

/*通过分析链接 实时获取favicon
* @url 需要分析的Url地址
*/
function getFavicon(url){
  if(url.match(/https{0,1}:\/\//)){
    //return "https://ui-avatars.com/api/?bold=true&size=36&background=0D8ABC&color=fff&rounded=true&name=" + url.split('//')[1];
    return "https://www.google.cn/s2/favicons?sz=64&domain_url=" + url;
  }else{
    //return "https://ui-avatars.com/api/?bold=true&size=36&background=0D8ABC&color=fff&rounded=true&name=" + url;
    return "https://www.google.cn/s2/favicons?sz=64&domain_url=http://" + url;
  } 
}

/** Render Functions
 *  渲染模块函数
 */

function renderIndex(){
  const footer = el('footer',[],el('div',['class="footer"'],'网址' + el('a',['class="ui label"','href="https://xydh.fun/guoxiaohan"','target="_blank"'],el('i',['class="github icon"'],"") + '本帅的主页') + ' &copy; 联系电话 ' + el('a',['class="ui label"'],el('i',['class="balance scale icon"'],"") + '17691299949jadb')));
  return renderHeader() + renderMain() + footer;
}

function renderHeader(){
  const item = (template,name) => el('a',['class="item"',`data-url="${template}"`],name);

  var nav = el('div',['class="ui large secondary inverted menu"'],el('div',['class="item"'],el('p',['id="hitokoto"'],'条条大路通罗马')))
  var title = el('h1',['class="ui inverted header"'],el('i',[`class="${config.logo_icon} icon"`],"") + el('div',['class="content"'],config.title + el('div',['class="sub header"'],config.subtitle)));
  var menu = el('div',['id="sengine"','class="ui bottom attached tabular inverted secondary menu"'],el('div',['class="header item"'],'&nbsp;') + config.search_engine.map((link,key) =>{
    if(key == 0){
      return el('a',['class="active item"',`data-url="${link.template}"`],link.name);
    }else{
      return item(link.template,link.name);
    }
  }).join(""))
  var input = el('div',['class="ui left corner labeled right icon fluid large input"'],el('div',['class="ui left corner label"'],el('img',['id="search-fav"','class="left floated avatar ui image"','src="https://www.baidu.com/favicon.ico"'],"")) + el('input',['id="searchinput"','type="search"','placeholder="为什么我帅的这么一塌糊涂……"','autocomplete="off"'],"") + el('i',['class="inverted circular search link icon"'],""));
  return el('header',[],el('div',['id="head"','class="ui inverted vertical masthead center aligned segment"'],(config.hitokoto ? el('div',['id="nav"','class="ui container"'],nav) : "") + el('div',['id="title"','class="ui text container"'],title + (config.search ? input + menu :"") + `${config.selling_ads ? '<div><a id="menubtn" class="red ui icon inverted button"><i class="heart icon"></i> 喜欢此域名 </a></div>' : ''}`)))
}

function renderMain() {
  var main = config.lists.map((item) => {
    const card = (url,name,desc)=> el('a',['class="card"',`href=${url}`,'target="_blank"'],el('div',['class="content"'],el('img',['class="left floated avatar ui image"',`src=${getFavicon(url)}`],"") + el('div',['class="header"'],name) + el('div',['class="meta"'],desc)));
    const divider = el('h4',['class="ui horizontal divider header"'],el('i',[`class="${item.icon} icon"`],"")+item.name);

    var content = el('div',['class="ui four stackable cards"'],item.list.map((link) =>{
      return card(link.url,link.name,link.desc);
    }).join(""));

    return el('div',['class="ui basic segment"'],divider + content);
  }).join("");
  
  return el('main',[],el('div',['class="ui container"'],main));
}

function renderSeller() {
  const item = (type,content) => el('div',['class="item"'],el('i',[`class="${type} icon"`],"") + el('div',['class="content"'],content));
  var title = el('h1',['class="ui yellow dividing header"'],el('i',['class="gem outline icon"'],"") + el('div',['class="content"'],config.sell_info.domain + ' 正在出售'));
  var action = el('div',['class="actions"'],el('div',['class="ui basic cancel inverted button"'],el('i',['class="reply icon"'],"") + '返回'));

  var contact = config.sell_info.contact.map((list) => {
    return item(list.type,list.content);
  }).join("");
  var column = el('div',['class="column"'],el('h3',['class="ui center aligned icon inverted header"'],el('i',['class="circular envelope open outline grey inverted icon"'],"") + '联系我') + el('div',['class="ui relaxed celled large list"'],contact));
  var price = el('div',['class="column"'],el('div',['class="ui large yellow statistic"'],el('div',['class="value"'],el('i',[`class="${config.sell_info.mon_unit} icon"`],"") + config.sell_info.price)));
  var content = el('div',['class="content"'],el('div',['class="ui basic segment"'],el('div',['class="ui two column stackable center aligned grid"'],el('div',['class="ui inverted vertical divider"'],'感兴趣？') + el('div',['class="middle aligned row"'],price + column))));

  return el('div',['id="seller"','class="ui basic modal"'],title + content + action);
}

function renderHTML(index,seller) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>${config.title} - ${config.subtitle}</title>
      <link href="https://cdn.jsdelivr.net/npm/semantic-ui-css@2.4.1/semantic.min.css" rel="stylesheet">
      <link href="https://cdn.jsdelivr.net/gh/sleepwood/cf-worker-dir@0.1.1/style.css" rel="stylesheet">
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/semantic-ui-css@2.4.1/semantic.min.js"></script>
  </head>
  <body>
    ${index}
    ${config.selling_ads ? seller : ''}
    <script src="https://v1.hitokoto.cn/?encode=js&select=%23hitokoto" defer></script>
    <script>
      $('#sengine a').on('click', function (e) {
        $('#sengine a.active').toggleClass('active');
        $(e.target).toggleClass('active');
        $('#search-fav').attr('src',$(e.target).data('url').match(`+/https{0,1}:\/\/\S+\//+`)[0] + '/favicon.ico') ;
      });
      $('.search').on('click', function (e) {
          var url = $('#sengine a.active').data('url');
          url = url.replace(`+/\$s/+`,$('#searchinput').val());
          window.open(url);
      });
      /* 鼠标聚焦时，回车事件 */
      $("#searchinput").bind("keypress", function(){
          if (event.keyCode == 13){
          // 触发需要调用的方法
          $(".search").click();
          }
      });
      $('#menubtn').on('click', function (e) {
          $('#seller').modal('show');
      });
    </script>
  </body>

  </html>`
}
