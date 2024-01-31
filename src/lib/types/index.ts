export type User = {
  id: number,
  name: string,
  email: string,
  password: string,
  confirm_password: string,
}

export type Team = {
  id: number,
  name: string
}

export type HasTimestamps = {
  created_at :string,
  updated_at:string
}

