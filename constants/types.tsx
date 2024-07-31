export type MainTabParamList = {
    Camera: undefined,
    Calls:undefined,
    Status : undefined,
    Chats: undefined
}

export type user ={
    id: String,
    imageUri: string,
    name: String
}

export type message = {
    id: String,
    content: String,
    createdAt: string
}

export type ChatRoom ={
    id:String,
    users: Array<user>,
    lastMessage: message
}