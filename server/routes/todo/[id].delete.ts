import prisma from "~/db";

export default eventHandler(async (event) => {
    const id = getRouterParam(event, 'id')
    try {
        const todo = await prisma.todolist.delete({
            where: {
                id,
            },
        })
        return useRes.ok(todo);

    }
    catch (e){
        return useRes.error(201,'删除失败')
    }
});
