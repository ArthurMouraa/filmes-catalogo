import { UserRepositoryInMemory } from "../../repositories/userRepositoryInMemoria";
import { CreateUserUseCase } from "./createUser.useCase";
import { User } from "../../entities/user.entity";
import { Role } from '@prisma/client' 



let createUseCase: CreateUserUseCase
let userRepository: UserRepositoryInMemory

describe("Testando logica de criacao", () => {
  beforeEach(() => {
    userRepository = new UserRepositoryInMemory();
    createUseCase = new CreateUserUseCase(userRepository);
  });

  it("Deve criar um novo usua´rio", async () => {
    const user = await createUseCase.create({
      name: "Arthur",
      email: "a@gmail.com",
      password: "123",
      role: Role.admin,
    })


    expect(user).toHaveProperty("id"); // se você gera ID na entidade
    expect(user.name).toBe("Arthur");
    expect(user.email).toBe("a@gmail.com");
    expect(user.role).toBe(Role.admin);


  })

  // expect(userRepository.database.length).toBe(2);
  // expect(userRepository.database[0].email).toBe("a@gmail.com");

})