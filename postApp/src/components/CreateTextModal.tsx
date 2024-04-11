import * as Dialog from "@radix-ui/react-dialog";



const CreateTextModal = () => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/20 min-w-full min-h-screen fixed inset-0 animate-overlay-show" />
      <Dialog.Content
        className="bg-white fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/4 px-8 py-7 lg:w-96 max-lg:w-80 rounded-lg"
      >
        <Dialog.Title
          className="text-xl font-bold text-zinc-900 mb-4"
        >
          Create a new Post
        </Dialog.Title>

        <form action="">
          <textarea name="caption" className="w-full p-4 bg-zinc-300 rounded-md" id="caption" cols={30} rows={4} placeholder="Write your caption"></textarea>
          <button
            type="submit"
            className="w-full p-4 bg-emerald-500 rounded-md"
          >
            Post
          </button>
        </form>

      </Dialog.Content>
    </Dialog.Portal>
  )
}

export default CreateTextModal