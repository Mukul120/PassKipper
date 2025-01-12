{passwordArray.length === 0 ? <div className='text-white my-3 text-lg font-thin'>No saved Infromation yet</div> : <table className='w-full text-center rounded-md overflow-hidden ' >
    <thead className=' bg-green-600 text-green-200  '>
        <tr className='w-full'>
            <th className='p-1 '>URL/APP_NAME</th>
            <th className='p-1 ' >USERNAME</th>
            <th className='p-1 '>PASSWORD</th>
            <th className='p-1 '>EDIT</th>
        </tr>
    </thead>
    <tbody className=' text-white '>
        {passwordArray.map((item, index) => {
            return <tr key={index}>
                <td className='text-start py-1 underline  ' >
                    <div className="flex justify-start items-center mr-5">
                        <div className="flex justify-start items-start px-2">

                            <a href={item.site} target='_blank' className=''>{item.site}</a>
                        </div>
                        <div className=" flex justify-between items-center  bg-green-400 rounded-md cursor-pointer"
                            onClick={() => { copyText(item.site) }}>

                            <lord-icon
                                src="https://cdn.lordicon.com/depeqmsz.json"
                                trigger="hover"
                                style={{ "width": "20px", "height": "20px" }}
                            >
                            </lord-icon>
                        </div>
                    </div>
                </td>
                <td className='text-center py-1   '>
                    <div className=" flex justify-start items-start ">

                        <div className="flex justify-start mx-2">
                            {item.username}
                        </div>
                        <div className="bg-green-400  rounded-md mx-1  cursor-pointer flex justify-center items-center   "
                            onClick={() => { copyText(item.username) }}>

                            <lord-icon
                                src="https://cdn.lordicon.com/depeqmsz.json"
                                trigger="hover"
                                style={{ "width": "20px", "height": "20px" }}
                            >
                            </lord-icon>
                        </div>
                    </div>



                </td>

                <td className='text-center  p-3  '>
                    <div className="help flex justify-center ">

                        <div className="flex justify-start mx-2">
                            {item.password}
                        </div>
                        <div className="bg-green-400 rounded-md mx-2 cursor-pointer flex justify-center items-center"
                            onClick={() => { copyText(item.password) }}>
                            <lord-icon
                                src="https://cdn.lordicon.com/depeqmsz.json"
                                trigger="hover"
                                style={{ "width": "20px", "height": "20px" }}
                            >
                            </lord-icon>
                        </div>
                    </div>
                </td>
                <td className='text-center  p-3  bg-red-300 '>
                    <div className="flex justify-self-center items-center px-14">

                        <div className='bg-green-400 cursor-pointer flex justify-center items-center rounded-md mx-2'>
                            <lord-icon
                                src="https://cdn.lordicon.com/wuvorxbv.json"
                                trigger="hover"
                                style={{ width: "25px", height: "25px" }}>
                            </lord-icon>
                        </div>
                        <div className='bg-green-400 flex cursor-pointer justify-center items-center  rounded-md'>
                            <lord-icon
                                src="https://cdn.lordicon.com/drxwpfop.json"
                                trigger="hover"
                                style={{ width: "25px", height: "25px" }}>
                            </lord-icon>
                        </div>
                    </div>
                </td>

            </tr>
        })}
    </tbody>
</table>
}