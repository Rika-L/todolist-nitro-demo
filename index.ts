import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.todolist.create({
        data: {
            title: 'yyy',
            isCheck: false,
            time: new Date()
        },
    })

    const allTodolist = await prisma.todolist.findMany()
    console.log(allTodolist)
}

main()
    .catch(async (e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
