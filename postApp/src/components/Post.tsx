import { ChatCircle, DotsThreeVertical, Heart, Share } from "phosphor-react"
import { Avatar } from "./Avatar"

export interface PostProps {
  id: number,
  title: string,
  body: string,
  userId: number
}

const Post = ({ id, title, body, userId }: PostProps) => {
  return (
    <div>
      <div className="container grid grid-cols-12  mx-auto py-4">
        {/* Avatar */}
        <Avatar
          alt="userId"
          url={`GitHub ${userId}`}
        />

        {/* User */}
        <div className="col-span-10">
          <p className="font-bold" >{id % 2 == 0 ? "John Doe" : "Maria Ann"}</p>
          <small className="text-zinc-600">10hrs ago</small>
        </div>

        {/* Buttons */}
        <div className="col-span-1 justify-self-end flex justify-between">
          <div className="p-2">
            <Share size={24} />
          </div>

          <div className="p-2">
            <DotsThreeVertical size={24} />
          </div>
        </div>

        {/* Post data */}
        <div className="col-start-2 col-span-10">
          <p>
            {body}
          </p>
          <img src="" alt={title} className="w-full bg-zinc-300 mt-4 aspect-square" />
        </div>

        {/* Post Reactions */}
        <div className="col-start-2 mt-4 flex gap-2">
          <Heart size={24} />
          <ChatCircle size={24} />
        </div>
      </div >
    </div >
  )
}

export { Post }