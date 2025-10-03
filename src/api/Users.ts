export class UserDTO {
  id!: number;
  name!: string;
  email!: string;
  role!: string;
  isActive!: boolean;
  department!: string;
  salary!: number;
  date!: Date;
}
export class User {
  id!: number;
  name!: string;
  email!: string;
  role!:
    | 'Senior Developer'
    | 'Project Manager'
    | 'UI/UX Designer'
    | 'Marketing Specialist'
    | 'DevOps Engineer';
  isActive!: boolean;
  department!: 'IT' | 'Management' | 'Design' | 'Marketing';
  salary!: number;
  date!: Date;
}

export default class UsersResponse {
  users: User[];
  total: number;
  page: number;
  perPage: number;

  constructor(dto: { data: UserDTO[]; meta: { total: number; page: number; perPage: number } }) {
    this.users = dto.data.map(UsersResponse.dtoToUser);
    this.total = dto.meta.total;
    this.page = dto.meta.page;
    this.perPage = dto.meta.perPage;
  }

  static dtoToUser(dto: UserDTO): User {
    const allowedRoles = [
      'Senior Developer',
      'Project Manager',
      'UI/UX Designer',
      'Marketing Specialist',
      'DevOps Engineer',
    ] as const;

    const allowedDepartments = ['IT', 'Management', 'Design', 'Marketing'] as const;

    const role = (allowedRoles as readonly string[]).includes(dto.role)
      ? (dto.role as User['role'])
      : 'Senior Developer';

    const department = (allowedDepartments as readonly string[]).includes(dto.department)
      ? (dto.department as User['department'])
      : 'IT';

    return {
      id: dto.id,
      name: dto.name,
      email: dto.email,
      role,
      isActive: dto.isActive,
      department,
      salary: dto.salary,
      date: dto.date,
    };
  }

  static userToDTO(user: User): UserDTO {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      isActive: user.isActive,
      department: user.department,
      salary: user.salary,
      date: user.date,
    };
  }
}
