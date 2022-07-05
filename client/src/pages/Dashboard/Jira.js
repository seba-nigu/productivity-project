import { useEffect, useState } from "react";
import axios from "axios";
import Popup from "../../components/Popup";

function Jira() {
  const [list, setList] = useState(null);
  const [onDragItem, setOnDragItem] = useState(false);
  const [posOfItem, setPosOfItem] = useState();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    axios
      .post("http://localhost:5000/dashboard/jira", {
        email: "admin@admin.admin",
      })
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.log("Please check your internet connection.");
      });
  }, [setList]);

  const handleDragEnd = () => {
    setOnDragItem(false);
  };

  const handleDragStart = (e, id) => {
    setOnDragItem(true);
    e.dataTransfer.setData("id", id);
    setPosOfItem(id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, title, pos) => {
    setOnDragItem(false);

    let id = parseInt(e.dataTransfer.getData("id"));
    let stopper = 1;
    list.forEach((row, p) => {
      row.items.forEach((item, po) => {
        if (stopper === 1 && parseInt(item.taskId) === id) {
          stopper = 0;
          let aux = list;
          aux[pos].items.push({ taskId: id, text: item.text });
          aux[p].items.splice(po, 1);

          axios
            .put("http://localhost:5000/dashboard/jira", {
              id: id,
              category: aux[pos].title,
            })
            .catch((error) => {
              console.log("Please check your internet connection.");
            });
          return;
        }
      });
    });
  };

  const changeTrigger = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="flex-1 flex flex-col">
      <div className="upper-header p-8 flex items-center">
        <div className="jira-title text-5xl font-bold">Jira clone</div>
        <div
          className="rounded bg-blue-700 hover:bg-blue-900 cursor-pointer mx-10 w-32 text-white px-4 py-2 text-center"
          onClick={changeTrigger}
        >
          Create task
        </div>
        <Popup trigger={showPopup} changeState={changeTrigger}></Popup>
      </div>
      <div className="p-8 flex justify-between flex-1">
        {list?.map((grp, grpI) => (
          <div key={grpI}>
            <div
              onDragOver={(e) => handleDragOver(e)}
              onDrop={(e) => handleDrop(e, grp.title, grpI)}
              className="dnd-group bg-gray-100 w-72 p-4 min-h-[15rem] rounded"
            >
              <div className="dnd-title text-gray-400 font-semibold">
                {grp.title} <span>{grp.items.length}</span>
              </div>
              {grp.items.map((item) => (
                <div
                  key={item.taskId}
                  draggable
                  onDragEnd={handleDragEnd}
                  onDragStart={(e) => handleDragStart(e, item.taskId)}
                  className={
                    !onDragItem
                      ? "dnd-item bg-white p-5 m-2"
                      : item.taskId === posOfItem
                      ? "dnd-item bg-gray-400 p-5 m-2"
                      : "dnd-item bg-white p-5 m-2"
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
