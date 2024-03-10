import { useRef, useState } from "react";
import { toast } from "react-toastify";

function BooksCreate({ set }: any) {
  const [name, setName] = useState<string[]>([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const val: string = kitob.current.value;
    const books: any = localStorage.getItem("kitob");

    if (kitob.current.value.trim().length >= 2) {
      if (!books.includes(val)) {
        toast.success("yangi kitob qo'shildi :)");
        kitob.current.value = "";
        setName((pre) => {
          return [...pre, val];
        });
      } else {
        toast.error(
          `siz avval bu ${val} kitobini kiritgansiz avval yozilgan kitobni kiritib bolmaydi! `
        );
        kitob.current.value = "";
      }
    } else {
      toast.error("Kitob nomlari kamida ikkita harfdan iborat boladi!");
      kitob.current.value = "";
    }
  };
  set(name);
  localStorage.setItem("kitob", JSON.stringify([name]));
  const kitob = useRef<any>();
  return (
    <div>
      <h2 className="text-[30px] font-bold text-center italic  underline">
        Kitoblarni Qo'shing
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-center justify-center gap-[10px] mt-[20px]"
      >
        <div className="">
          <input
            ref={kitob}
            type="text"
            className="py-[8px] pl-[8px] border border-black rounded-[10px] text-[16px]"
            placeholder="Kitob nomini yozing!"
          />
        </div>
        <button className="py-[6px] px-[12px] rounded-[10px] border border-black bg-white text-black hover:text-white hover:bg-black hover:border-white text-[18px] font-medium">
          Kitob qo'shish
        </button>
      </form>
    </div>
  );
}

export default BooksCreate;
