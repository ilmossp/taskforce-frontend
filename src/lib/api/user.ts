import axios from "axios"
import { type User } from "../types"

export async function getUser() {
    const { data } = await axios.get<User>("/api/user")
    return data
}
