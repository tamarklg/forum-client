export class User {
  id!: string;
  createdAt!: Date;
  updatedAt!: Date;
  lastName?: string;
  firstName?: string;
  mail!: string;
  password?: string;
  superuser: boolean = false;
}
