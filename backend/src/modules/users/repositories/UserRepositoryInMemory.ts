import { User } from "../entities/User"
import { UserRepository } from "./UserRepository"

class UserRepositoryInMemory implements UserRepository {
  public users: User[] = []

  async create(user: User): Promise<void> {
    this.users.push(user)
  }

  async findByEmail(email: string): Promise<User | null> {
    const currentUser = this.users.find((user) => user.email === email)

    if (!currentUser) return null

    return currentUser
  }

  async findById(id: string): Promise<User> {
    const currentUser = this.users.find((user) => user.id === id)

    if (!currentUser) return null

    return currentUser
  }

  async save(user: User): Promise<void> {
    const currentNoteIndex = this.users.findIndex((user) => user.id === user.id)

    if (currentNoteIndex >= 0) this.users[currentNoteIndex] = user
  }
}

export { UserRepositoryInMemory }
