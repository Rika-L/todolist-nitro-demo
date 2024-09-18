export default defineEventHandler(()=>{
  throw createError({
    statusCode: 401,
    statusMessage: 'token失效，请重新登录',
})
})