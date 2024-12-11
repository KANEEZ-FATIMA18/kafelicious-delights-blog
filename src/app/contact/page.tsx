

export default function Contact(){
    return(
        <div className=" bg-[#E8D4E8]  flex justify-center items-center space-y-10 p-4 h-screen"> 

        <div className="space-y-10  w-[90%] sm:w-[60%] lg:w-[40%] lg:h-[400px] animate box  rounded-lg border-[5px] border-pink-500  p-4  bg-slate-300">       
             <h1 className="focus-in-expand text-center text-3xl md:text-5xl text-pink-600 font-extrabold">CONTACT US</h1>

            <form className="flex flex-col gap-5 text-lg lg:text-2xl  " >

                <input type="text"
                className="p-1 outline-pink-600 focus:outline-8 rounded-md text-lg md:text-2xl"
                placeholder="FULL NAME " />


                <input className="p-1 outline-pink-600  rounded-md  text-lg md:text-2xl " type="text" 
                placeholder="YOUR EMAIL" />

              <textarea className="p-1 outline-pink-600  rounded-md  text-lg md:text-2xl"
                placeholder="YOUR MESSAGE"></textarea>
<div className="flex justify-center">
                <button className="w-[150px] lg:w-[250px] h-[50px] text-lg lg:text-2xl bg-pink-500 text-black font-bold cursor-pointer hover:bg-pink-600 transition-all duration-700 py-2 px-5 rounded-md">SEND</button>
                </div>
            </form>
            </div>
         </div>
        
    )
}