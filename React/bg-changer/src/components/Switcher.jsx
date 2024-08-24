import { useState } from "react";
function Switcher() {

  const [color, setcolor] = useState();
  return (
    <div
      className=" w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className=" flex fixed flex-wrap justify-center bottom-8 inset-x-0 px-2">
        <div className="bg-white flex flex-wrap justify-center gap-3 px-4 py-2 rounded-2xl ">
          <button
            className="outline-none shadow-lg px-4 py-1 rounded-full"
            style={{ backgroundColor: "red" }}
            onClick={() => setcolor("red")}
          >
            Red{" "}
          </button>
          <button
            className="outline-none shadow-lg px-4 py-1 rounded-full"
            style={{ backgroundColor: "Olive" }}
            onClick={() => setcolor("olive")}
          >
            Olive
          </button>
          <button
            className="outline-none shadow-lg px-4 py-1 rounded-full"
            style={{ backgroundColor: "green" }}
            onClick={() => setcolor("green")}
          >
            Green
          </button>
          <button
            className="outline-none shadow-lg px-4 py-1 rounded-full"
            style={{ backgroundColor: "Yellow" }}
            onClick={() => setcolor("yellow")}
          >
            Yellow
          </button>
          <button
            className="outline-none shadow-lg px-4 py-1 rounded-full"
            style={{ backgroundColor: "orange" }}
            onClick={() => setcolor("orange")}
          >
            Orange
          </button>
          <button
            className="outline-none shadow-lg px-4 py-1 rounded-full"
            style={{ backgroundColor: "purple" }}
            onClick={() => setcolor("purple")}
          >
            Purple
          </button>
          <button
            className="outline-none shadow-lg px-4 py-1 rounded-full"
            style={{ backgroundColor: "blue" }}
            onClick={() => setcolor("blue")}
          >
            Blue
          </button>
          <button
            className="outline-none shadow-lg px-4 py-1 rounded-full"
            style={{ backgroundColor: "gray" }}
            onClick={() => setcolor("gray")}
          >
            Gray
          </button>
          <button
            className="outline-none shadow-lg text-white px-4 py-1 rounded-full"
            style={{ backgroundColor: "black" }}
            onClick={() => setcolor("black")}
            
          >
            Black
          </button>
          <button
            className="outline-none shadow-lg px-4  py-1 rounded-full"
            style={{ backgroundColor: "Pink" }}
            onClick={() => setcolor("pink")}
          >
            Pink
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default Switcher