import prisma from "../db";
import {todoType} from "../type";
import useRes from "../utils/useRes";

export default defineEventHandler(async () => {
    const todolist = <todoType[]>(await prisma.todolist.findMany())
    return useRes.ok(todolist)
})
