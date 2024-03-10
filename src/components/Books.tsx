import { useState } from "react";

function Books({ data }: any) {
  const item = data;

  const [dragging, setDragging] = useState<string | null>(null);
  const [readBooks, setReadBooks] = useState<string[]>([]);
  const [finalBooks, setFinalBooks] = useState<string[]>([]);
  const handleSearchOne = () => {
    if (dragging) {
      setReadBooks((pre: any) => {
        return [...pre, dragging];
      });
    }
  };
  const handleSearchTwo = () => {
    if (dragging) {
      setFinalBooks((pre: any) => {
        return [...pre, dragging];
      });
    }
  };
  const handleSearchThre = () => {
    if (dragging) {
      item.push(dragging);
    }
  };

  return (
    <div className="flex flex-col items-center mt-[20px] gap-[30px]">
      <h2 className="text-[25px] font-bold italic underline">Kitoblar!</h2>
      <div className="flex flex-col md:flex-row  md:gap-[20px] gap-[25px]">
        <div
          onDrop={() => {
            handleSearchThre();
          }}
          onDragOver={(e) => {
            e.preventDefault();
          }}
          className="w-[300px] h-[350px] sm:w-[270px] md:w-[230px] rounded-[10px] py-[10px] pl-[20px] border border-black"
        >
          <h2 className="text-[20px] text-center mr-[20px] font-bold underline italic">
            Kitoblarim!
          </h2>
          <ul className="flex flex-col gap-[5px] mt-[20px]  w-full h-[250px] overflow-y-scroll">
            {item &&
              item.map((d: any) => {
                return (
                  <li
                    className="border border-black rounded-[10px] text-center  italic"
                    draggable
                    onDragStart={() => setDragging(d)}
                    onDragEnd={() => setDragging(null)}
                    key={d}
                  >
                    <h2 className="text-[17px] font-normal ">{d}</h2>
                  </li>
                );
              })}
          </ul>
        </div>
        <div
          onDrop={() => {
            handleSearchOne();
          }}
          onDragOver={(e) => {
            e.preventDefault();
          }}
          className="w-[300px] h-[350px] sm:w-[270px] md:w-[230px] rounded-[10px] py-[10px] pl-[20px] border border-black"
        >
          <h2 className="text-[20px] text-center mr-[20px] font-bold underline italic">
            O'qiyabman!
          </h2>
          <ul className="flex flex-col gap-[5px] mt-[20px]  w-full h-[250px] overflow-y-scroll">
            {readBooks &&
              readBooks.map((d: string) => {
                return (
                  <li
                    className="border border-black rounded-[10px] text-center underline  italic"
                    draggable
                    onDragStart={() => setDragging(d)}
                    onDragEnd={() => setDragging(null)}
                    key={d}
                  >
                    <h2>{d}</h2>
                  </li>
                );
              })}
          </ul>
        </div>
        <div
          onDrop={() => {
            handleSearchTwo();
          }}
          onDragOver={(e) => {
            e.preventDefault();
          }}
          className="w-[300px] h-[350px] sm:w-[270px] md:w-[230px] rounded-[10px] py-[10px] pl-[20px] border border-black"
        >
          <h2 className="text-[20px] text-center mr-[20px] font-bold underline italic">
            O'qib boldim!
          </h2>
          <ul className="flex flex-col gap-[5px] mt-[20px]  w-full h-[250px] overflow-y-scroll">
            {finalBooks &&
              finalBooks.map((d) => {
                return (
                  <li
                    className="border border-black rounded-[10px] text-center line-through  italic"
                    draggable
                    onDragStart={() => setDragging(d)}
                    onDragEnd={() => setDragging(null)}
                    key={d}
                  >
                    <h2>{d}</h2>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Books;
