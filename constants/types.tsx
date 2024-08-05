export type MainTabParamList = {
    Camera: undefined,
    Calls:undefined,
    Status : undefined,
    Chats: undefined
}

export type user ={
    id: string,
    imageUri?: string,
    name: string
}

export type message = {
    id: string,
    content: string,
    createdAt: string,
    user?: user
}

export type ChatRoom ={
    id:string,
    users: user[],
    lastMessage: message
}