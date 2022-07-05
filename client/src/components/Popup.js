function Popup(props) {
  return props.trigger ? (
    <form
      className="fixed top-0 left-0 right-0 h-screen flex justify-center items-center overflow-y-scroll"
      style={{
        backgroundColor: "rgba(9, 30, 66, 0.54)",
      }}
    >
      <div className="w-2/4 h-3/4 bg-white opacity-100 px-12 py-6 rounded">
        <div className="text-3xl text-blue-400 pt-10">Add task</div>
        <div className="pt-4">
          <label for="innerText" className="font-semibold text-gray-500">
            Short Summary
          </label>
          <div className="my-2">
            <input
              required
              name="innerText"
              className="py-1 px-2 w-full rounded bg-gray-100 border hover:bg-gray-200 focus:outline-blue-400 focus:bg-white"
            />
            <div className="text-sm text-gray-500">
              Summaries what the task is in maximum 50 characters
            </div>
          </div>
        </div>
        <div className="pt-4">
          <label for="category" className="font-semibold text-gray-500">
            Category
          </label>
          <div className="my-2">
            <select
              required
              name="category"
              className="py-1 px-2 w-full rounded bg-gray-100 border hover:bg-gray-200 focus:outline-blue-400 focus:bg-white"
            >
              <option value=""></option>
              <option value="TODO">TODO</option>
              <option value="In progress">In progress</option>
              <option value="Done">Done</option>
            </select>
            <div className="text-sm text-gray-500">
              Select which category the task is in
            </div>
          </div>
        </div>
        <div className="pt-4">
          <label for="date" className="font-semibold text-gray-500">
            Date
          </label>
          <div className="my-2">
            <input
              required
              type="date"
              name="date"
              className="py-1 px-2 w-full rounded bg-gray-100 border hover:bg-gray-200 focus:outline-blue-400 focus:bg-white"
            />
            <div className="text-sm text-gray-500">
              Put the date this assignment is on
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-900 px-4 py-2 text-white rounded"
          >
            Create task
          </button>
          <button
            type="button"
            onClick={props.changeState}
            className="px-4 py-2 hover:bg-gray-300 rounded mx-8"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  ) : (
    ""
  );
}

export default Popup;
