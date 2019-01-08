const cloud = require('wx-server-sdk')
const axios = require('axios')
cloud.init()
const db = cloud.database()

exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const union_id = wxContext.UNIONID
  return {
    union_id: union_id
  }

  //let url = "https://api.weixin.qq.com/cgi-bin/token"
  let url = "http://www.menss.me/cgi-bin/token"
  // let APPID = "wx1bdb4c6578e33ab9"
  // let APPSECRET = "d72a1f6302c96f42aa5ad485d528dc93"
  let APPID = "wxfe85f3f877480de3"
  let APPSECRET = "adaa2783ce1d23eca0695bc4500cd818"
  let res_ = null
  let access_token = ""
  await axios.get(url + "?grant_type=client_credential&appid=" + APPID + "&secret=" + APPSECRET)
    .then(res => {
      if (res.status == 200 && res.data.access_token) {
        access_token = res.data.access_token
      } else {
        console.log(res)
      }
    })
    .catch(err => {
      console.log(err)
    });

  //let u = "https://api.weixin.qq.com/cgi-bin/user/info?access_token=" + access_token+"&openid=oFzdg1kZJib0XO6BfR7OqwecIq2o&lang=zh_CN"
  //unionid: 'odsWP03ReGHa8qxKlXYe4mxb-ju0',
  // let u = "https://api.weixin.qq.com/cgi-bin/user/get?access_token=" + access_token
  // u = "https://ifconfig.co/ip"
  // //212.64.65.131
  // await axios.get(u)
  //   .then(res => {
  //     console.log(res)
  //     // if (res.status == 200 && res.data) {
  //       err = {ip:res}
  //     // } else {
  //     //   console.log(res)
  //     // }
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   });

  // return {
  //   access_token: access_token,
  //   err: err
  // }

  let url_2 = "https://api.weixin.qq.com/cgi-bin/message/template/send?access_token=" + access_token
  let template_id = "iexZsbPGmFHzvFuc2iVpvShuTddclHPjrSBD6VFphqw"
  let err = null
  let data = {
    "first": {
      "value": "您好，您有一条预约记录",
      "color": "#173177"
    },
    "keyword1": {
      "value": "您好，您有一条预约记录",
      "color": "#173177"
    },
    "keyword2": {
      "value": "您好，您有一条预约记录",
      "color": "#173177"
    },
    "keyword3": {
      "value": "您好，您有一条预约记录",
      "color": "#173177"
    },
    "remark": {
      "value": "您好，您有一条预约记录",
      "color": "#173177"
    }
  }
  await axios.post(url_2, { touser: "oFzdg1kZJib0XO6BfR7OqwecIq2o", url: "http://weixin.qq.com/download", template_id: template_id, "topcolor": "#FF0000", data: data })
    .then(res => {
      console.log(res)
      if (res.status == 200 && res.data) {
        err = res.data
      } else {
        console.log(res)
      }
    })
    .catch(err => {
      console.log(err)
    });
  return {
    access_token: access_token,
    err: err
  }
}


    //
