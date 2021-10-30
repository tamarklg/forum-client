import { User } from "./user";

export class Message {
  id!: string;
  createdAt!: Date;
  updatedAt!: Date;
  text!: string;
  messageId: string | null = null;
  userId? :string;
  user?: User;
  messages?: Message[];
}
