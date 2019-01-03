// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

exports.main = async (event, context) => {
  let user_map = new Map()
  user_map.set("x001", { name: "张三" })
  return {
    member_map: user_map,
  }
}