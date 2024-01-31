export type User = {
  id: number,
  name: string,
  email: string,
  password: string,
  password_confirmation: string,
}

export type Team = {
  id: number,
  name: string
}

export type HasTimestamps = {
  created_at :string,
  updated_at:string
}

