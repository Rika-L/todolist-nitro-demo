import {type addTodoType} from "~/type";
import prisma from "~/db";

function isAddTodoType(value: any): value is addTodoType {
    return value &&
        typeof value.title === "string" &&
        typeof value.time === "string"
}


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
