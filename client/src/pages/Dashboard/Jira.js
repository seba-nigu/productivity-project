import { useState, useEffect } from "react";

function Jira({ data }) {
  const [list, setList] = useState(data);

  useEffect(() => {
    console.log(list);
  }, [list]);
  return (
    <div className="flex-1 flex flex-col">
      <div className="upper-header p-8">
        <div className="jira-title text-5xl font-bold">Jira clone</div>
      </div>
      <div className="p-8 flex justify-between flex-1">
        <div>
          {list?.map((grp, grpI) => {
            <div className="dnd-group bg-gray-100 w-72 p-4 min-h-[15rem] rounded">
              <div className="dnd-title text-gray-400 font-semibold">
                {grp.title} <span>{grp.items.length}</span>
              </div>
            </div>;
          })}
        </div>

        {/* <div>
          <div className="dnd-group bg-gray-100 w-72 p-4 min-h-[15rem] rounded">
            <div className="dnd-title text-gray-400 font-semibold">
              TODO <span>4</span>
            </div>

            <div draggable className="dnd-item bg-white p-5 m-2">
              <div className="dnd-text font-roboto  ">
                This shit is pretty annoying dont you think
              </div>
            </div>

            <div draggable className="dnd-item bg-white p-5 m-2">
              <div className="dnd-text font-roboto">Text1</div>
            </div>
          </div>
        </div> */}

        {/* <div>
          <div className="dnd-group bg-gray-800 w-72 p-4 min-h-[15rem]">
            <div className="dnd-title text-white">In progress</div>
            <div draggable className="dnd-item bg-white p-5 m-2">
              <div className="dnd-text">Text1</div>
            </div>
          </div>
        </div> */}
        {/* <div>
          <div className="dnd-group bg-gray-800 w-72 p-4 min-h-[15rem]">
            <div className="dnd-title text-white">Done</div>
            <div draggable className="dnd-item bg-white p-5 m-2">
              <div className="dnd-text">Text1</div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Jira;
