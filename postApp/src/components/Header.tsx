import * as Dialog from "@radix-ui/react-dialog";
import { Plus } from "phosphor-react";
import { Avatar } from "./Avatar";
import CreateTextModal from "./CreateTextModal";


const Header = () => {

  return (
    <div className="mt-4">
      <div className="container grid grid-cols-12 items-center pb-8">

        {/* Avatar */}
        <Avatar
          alt=""
          url="0"
        />

        {/* Search Bar */}
        <textarea
          className="bg-zinc-300 border-zinc-700 col-start-3 col-span-8 h-10 rounded-full p-2"
          placeholder="Begin a Post"
          cols={1}
          rows={1}
        ></textarea>

        {/* Buttons */}
        <div className="col-span-1 col-start-12 flex justify-between text-white justify-self-end self-center gap-2 items-center">
          <Dialog.Root>
            <Dialog.Trigger>
              <div className="bg-emerald-500 rounded-full p-1">
                <Plus size={18} />
              </div>
            </Dialog.Trigger>

            <CreateTextModal />
          </Dialog.Root>

          {/* <div className="bg-emerald-500 rounded-full p-1">
            <Plus size={18} />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export { Header };