// handle CORS
export default defineEventHandler((event) => {
    setHeader(event, 'Access-Control-Allow-Origin', '*')
})
