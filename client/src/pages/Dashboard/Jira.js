import { useState } from "react";

function Jira(props) {
  const [list, setList] = useState(props.data);
  const [onDragItem, setOnDragItem] = useState(false);
  const [currentItem, setCurrentItem] = useState({});

  const handleDragEnd = () => {
    console.log("test");
    setOnDragItem(false);
  };
  const handleDragStart = () => {
    setOnDragItem(true);
  };

  return (
    <div className="flex-1 flex flex-col">
      <div className="upper-header p-8">
        <div className="jira-title text-5xl font-bold">Jira clone</div>
      </div>
      <div className="p-8 flex justify-between flex-1">
        {list?.map((grp, grpI) => (
          <div key={grpI}>
            <div className="dnd-group bg-gray-100 w-72 p-4 min-h-[15rem] rounded">
              <div className="dnd-title text-gray-400 font-semibold">
                {grp.title} <span>{grp.items.length}</span>
              </div>
              {grp.items.map((item) => (
                <div
                  key={item.taskId}
                  draggable
                  onDragEnd={handleDragEnd}
                  onDragStart={handleDragStart}
                  className={
                    !onDragItem
                      ? "dnd-item bg-white p-5 m-2"
                      : "dnd-item bg-blue-700 p-5 m-2"
                  }
                >
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
