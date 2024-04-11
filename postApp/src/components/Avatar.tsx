interface AvatarProps {
  url: string;
  alt: string;
}

const Avatar = ({ url, alt }: AvatarProps) => {
  return (
    <div className="col-span-2 sm:col-span-1 h-8 flex items-center">
      <img src={url} alt={alt} className=" bg-zinc-400 w-8 h-8 rounded-full align-items-center " />
    </div>
  )
}

export { Avatar };