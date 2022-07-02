import { useState, useEffect } from "react";

function Jira(props) {
  const [list, setList] = useState(props.data);

  return (
    <div className="flex-1 flex flex-col">
      <div className="upper-header p-8">
        <div className="jira-title text-5xl font-bold">Jira clone</div>
      </div>
      <div className="p-8 flex justify-between flex-1">
        {list?.map((grp) => (
          <div>
            <div className="dnd-group bg-gray-100 w-72 p-4 min-h-[15rem] rounded">
              <div className="dnd-title text-gray-400 font-semibold">
                {grp.title} <span>{grp.items.length}</span>
              </div>
              {grp.items.map((item) => (
                <div draggable className="dnd-item bg-white p-5 m-2">
                  <div className="dnd-text font-roboto">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jira;
