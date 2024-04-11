import { ChatCircle, DotsThreeVertical, Heart, Share } from "phosphor-react"
import { Avatar } from "./Avatar"

export interface PostProps {
  id: number,
  image?: string,
  caption?: string,
  name: string
  likes: { userId: number }[]
}



const Post = ({ image, caption, name, likes }: PostProps) => {
  return (
    <div>
      <div className="container grid grid-cols-12 py-4 items-center">
        {/* Avatar */}
        <Avatar
          alt="userId"
          url={`GitHub ${name}`}
        />

        {/* User */}
        <div className="col-span-9">
          <p className="font-bold capitalize" >{name}</p>
          <small className="text-zinc-600">10hrs ago</small>
        </div>

        {/* Buttons */}
        <div className="col-span-2 justify-self-end flex justify-between">
          <div className="p-2">
            <Share size={24} />
          </div>

          <div className="p-2">
            <DotsThreeVertical size={24} />
          </div>
        </div>

        {/* Post data */}

        <div className="col-start-1 col-span-12 border-b border-zinc-300 py-4">
          {caption ?
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis similique, omnis consectetur doloribus est incidunt deserunt qui libero eius velit impedit, totam nisi reprehenderit excepturi non! Officiis corporis labore velit quaerat laudantium autem vitae corrupti ea error nesciunt sapiente nihil voluptates optio aut voluptatum, a aliquid tempore sit. Pariatur nesciunt dolore alias impedit cupiditate ipsum eveniet ea ut at minus.
            </p> :
            null
          }

          {image ?
            <img src={image} alt={caption} className="w-full bg-zinc-300 mt-4 aspect-square" />
            :
            null
          }
        </div>

        <div className="col-start-1 font-bold">
          {likes.length} Likes
        </div>

        {/* Post Reactions */}
        <div className="col-start-1 mt-4 flex gap-2">
          <Heart size={24} />
          <ChatCircle size={24} />
        </div>
      </div >
    </div >
  )
}

export { Post }