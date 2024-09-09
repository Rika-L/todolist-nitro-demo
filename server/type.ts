export interface addTodoType {
    title: string
    time: string
}


export interface todoType extends addTodoType{
    id: string
    isCheck: boolean
}
