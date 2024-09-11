import prisma from "~/db";
import {isAddTodoType} from "~/utils/isAddTodoType";


export default defineEventHandler(async (event) => {
    const body = (await readBody(event))
    if (isAddTodoType(body)) {
        await prisma.todolist.create({
            data: {
                title: body.title,
                isCheck: false,
                time: body.time
            },
        })
        return useRes.ok()
    } else {
        throw createError({
            statusCode: 500,
            statusMessage: '数据类型有误',
        })
    }
})
