export type TUserData = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
} | null;

export type TTask = {
  id: string;
  owner_id: string;
  name: string;
  description: string;
  date: string;
  priority: string;
  timePlanned: string;
  timeElapsed: string;
  status: string;
} | null;

export type TState = {
  userData: TUserData;
  tasks: TTask[];
  isLoading: boolean;
  error: any;
  form: any;
};
