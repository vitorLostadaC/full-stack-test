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
}

export { UserRepositoryInMemory }
