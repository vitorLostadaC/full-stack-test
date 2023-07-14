import { Injectable } from "@nestjs/common"
import { User } from "src/modules/users/entities/User"
import { UserRepository } from "src/modules/users/repositories/UserRepository"
import { PrismaService } from "../Prisma.service"
import { PrismaUserMapper } from "../mappers/PrismaUserMapper"

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async create(user: User): Promise<void> {
    const rawUser = PrismaUserMapper.toPrisma(user)

    await this.prisma.user.create({
      data: rawUser
    })
  }
  async findByEmail(email: string): Promise<User | null> {
    const currentUser = await this.prisma.user.findUnique({
      where: {
        email
      }
    })

    if (!currentUser) return null

    return PrismaUserMapper.toDomain(currentUser)
  }
  async findById(userId: string): Promise<User | null> {
    const currentUser = await this.prisma.user.findUnique({
      where: {
        id: userId
      }
    })

    if (!currentUser) return null

    return PrismaUserMapper.toDomain(currentUser)
  }
  async save(user: User): Promise<void> {
    const rawUser = PrismaUserMapper.toPrisma(user)

    await this.prisma.user.update({
      data: rawUser,
      where: {
        id: rawUser.id
      }
    })
  }
  async delete(userId: string): Promise<void> {
    await this.prisma.user.delete({
      where: {
        id: userId
      }
    })
  }
  async findManyUser(): Promise<User[]> {
    const users = await this.prisma.user.findMany({})

    return users.map(PrismaUserMapper.toDomain)
  }
}
