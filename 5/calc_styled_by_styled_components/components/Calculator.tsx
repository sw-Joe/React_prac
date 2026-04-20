export default function Calculator() {
  return (
    <>
      <div className="bg-[#1f1f1f] flex justify-center items-center h-screen">
        <article className="w-[282px] border border-[#333] bg-[#ccc] p-4">
          <form className="grid grid-cols-[repeat(4, 65px)] auto-rows-[65px] gap-[4px]" name="forms">
            <input type="text" className="border-2 border-[#333] cursor-pointer text-lg 
              hover:shadow-[1px_1px_2px_#333] col-span-4 text-right px-[10px] bg-[white]" name="output" readOnly />
            {/* 1행 */}
            <input type="button" value="C"className="clear border-2 border-[#333] 
              cursor-pointer text-lg hover:shadow-[1px_1px_2px_#333] bg-[red] col-span-3" />
            <input type="button" value="/" className="border-2 border-[#333] 
              cursor-pointer text-lg hover:shadow-[1px_1px_2px_#333] bg-[orange]" />
            {/* 2행 */}
            <input type="button" value="1" className="border-2 border-[#333] 
              cursor-pointer text-lg hover:shadow-[1px_1px_2px_#333] bg-[white]" />
            <input type="button" value="2" className="border-2 border-[#333] 
              cursor-pointer text-lg hover:shadow-[1px_1px_2px_#333] bg-[white]" />
            <input type="button" value="3" className="border-2 border-[#333] 
              cursor-pointer text-lg hover:shadow-[1px_1px_2px_#333] bg-[white]" />
            <input type="button" value="*" className="border-2 border-[#333] 
              cursor-pointer text-lg hover:shadow-[1px_1px_2px_#333] bg-[orange]" />
            {/* 3행 */}
            <input type="button" value="4" className="border-2 border-[#333] 
              cursor-pointer text-lg hover:shadow-[1px_1px_2px_#333] bg-[white]" />
            <input type="button" value="5" className="border-2 border-[#333] 
              cursor-pointer text-lg hover:shadow-[1px_1px_2px_#333] bg-[white]" />
            <input type="button" value="6" className="border-2 border-[#333] 
              cursor-pointer text-lg hover:shadow-[1px_1px_2px_#333] bg-[white]" />
            <input type="button" value="+" className="border-2 border-[#333] 
              cursor-pointer text-lg hover:shadow-[1px_1px_2px_#333] bg-[orange]" />
            {/* 4행 */}
            <input type="button" value="7" className="border-2 border-[#333] 
              cursor-pointer text-lg hover:shadow-[1px_1px_2px_#333] bg-[white]" />
            <input type="button" value="8" className="border-2 border-[#333] 
              cursor-pointer text-lg hover:shadow-[1px_1px_2px_#333] bg-[white]" />
            <input type="button" value="9" className="border-2 border-[#333] 
              cursor-pointer text-lg hover:shadow-[1px_1px_2px_#333] bg-[white]" />
            <input type="button" value="-" className="border-2 border-[#333] 
              cursor-pointer text-lg hover:shadow-[1px_1px_2px_#333] bg-[orange]" />
            {/* 5행 */}
            <input type="button" value="." className="dot border-2 border-[#333] 
              cursor-pointer text-lg hover:shadow-[1px_1px_2px_#333] bg-[green]" />
            <input type="button" value="0" className="border-2 border-[#333] 
              cursor-pointer text-lg hover:shadow-[1px_1px_2px_#333] bg-[white]" />
            <input type="button" value="=" className="result border-2 border-[#333] 
              cursor-pointer text-lg hover:shadow-[1px_1px_2px_#333] col-span-2 bg-[orange]" />
          </form>
        </article>
      </div>
    </>
  )
}