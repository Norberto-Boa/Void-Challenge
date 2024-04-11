export interface PostDTO {
  id: number,
  caption?: string,
  image?: string,
  Likes: { userId: number }[],
  createdAt: Date,
  updatedAt: Date,
  userId: number,
  author: {
    name: string,
    email: string
  }
}