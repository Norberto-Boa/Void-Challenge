interface AvatarProps {
  url: string;
  alt: string;
}

const Avatar = ({ url, alt }: AvatarProps) => {
  return (
    <div className="col-span-1 h-12 flex items-center">
      <img src={url} alt={alt} className=" bg-zinc-400 w-10 h-10 rounded-full align-items-center " />
    </div>
  )
}

export { Avatar };