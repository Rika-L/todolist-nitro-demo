import {isEditTodoType} from "~/utils/isAddTodoType";
import prisma from "~/db";

export default eventHandler(async (event) => {
    const id = getRouterParam(event, 'id')
    const body = (await readBody(event))
    if (isEditTodoType(body)) {
        try {
            await prisma.todolist.update({
                where: {id},
                data: {...body},
            })
            return useRes.ok()
        } catch (error) {
            return useRes.error(201, '修改失败')
        }
    } else {
        throw createError({
            statusCode: 500,
            statusMessage: '数据类型有误',
        })
    }
});
