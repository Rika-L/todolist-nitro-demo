export interface addTodoType {
    title: string
    time: string
}


export interface editTodoType extends addTodoType {
    isCheck: boolean
}


export interface todoType extends editTodoType {
    id: string
}
