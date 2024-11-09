import ComponentLibrary from "./_components/ComponentLibrary";


function layout({ children }) {
  return (
    <div className="text-black">
        {children}

      <div className=" h-full md:w-64 flex-col fixed inset-y-0 z-50 md:flex hidden">

      </div>

      <div className="md:ml-64  ">

        </div>


    </div>
  );
}
export default layout;
