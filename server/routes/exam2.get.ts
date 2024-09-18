export default defineEventHandler(()=>{
    return {
      msg: "TOKEN过期，请重新登录",
      code: 401
    }})