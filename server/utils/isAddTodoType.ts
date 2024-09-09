import type {addTodoType} from "~/type";

export function isAddTodoType(value: any): value is addTodoType {
    return value &&
        typeof value.title === "string" &&
        typeof value.time === "string"
}

export function isEditTodoType(value: any): value is addTodoType {
    return value &&
        typeof value.title === "string" &&
        typeof value.time === "string" &&
        typeof value.isCheck === "boolean"
}
