import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

function Manager() {
    const ref = useRef();

    const [form, setform] = useState({ site: "", username: "", password: "" });
    const [passwordArray, setpasswordArray] = useState([]);

    useEffect(() => {
        let passwords = localStorage.getItem("password");
        if (passwords) {
            setpasswordArray(JSON.parse(passwords));
        }
    }, [])


    const showPassword = () => {

        if (ref.current.src.includes("Icons/eye.png")) {
            ref.current.src = "Icons/closedeye.png";
        }
        else {
            ref.current.src = "Icons/eye.png";
        }

    }
    const savePassword = () => {
        if (form.site.length > 3 && form.password.length > 3 && form.username.length > 3) {


            setpasswordArray([...passwordArray, { ...form, id: uuidv4() }])
            localStorage.setItem("password", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
            setform({ site: "", username: "", password: "" })
            toast('Saved Succesfully!!', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        else {
            toast("* ERROR *: Enter Valid Inputs")
        }
    }

    const deletePassword = (id) => {
        let c = confirm("do you want to delete?")
        if (c) {

            setpasswordArray([...passwordArray.filter(item => item.id !== id)])
            localStorage.setItem("password", JSON.stringify([...passwordArray.filter(item => item.id !== id)]))
        }
        toast(' Delete succesfully !!', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    const editPassword = (id) => {
        console.log("kuch to gayab hua" + id);
        setform(passwordArray.filter(item => item.id === id)[0])
        setpasswordArray([...passwordArray.filter(item => item.id !== id)])

    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value });

    }

    const copyText = (text) => {
        toast('Copied Succesfully!!', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        navigator.clipboard.writeText(text)
    }

    return (

        <>
            <div className="absolute top-0 z-[-2] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>


            <div className="container mx-auto max-w-4xl p-4 sm:p-6 md:p-8">
                <div className="flex flex-col items-center justify-center mb-2 mt-4">

                    <h1 className="logo text-white font-bold text-xl sm:text-2xl md:text-3xl">
                        &lt;
                        <span className='text-green-500 font-bold tracking-widest text-xl sm:text-2xl md:text-3xl'>Pass</span>
                        KIPPER
                        <span className='text-green-500 text-xl sm:text-2xl md:text-3xl'>/&gt;</span>
                    </h1>

                    <p className='text-white font-medium mt-1 text-lg sm:text-xl md:text-2xl'>Store Your Passwords Here</p>

                </div>


                <div className="text-black flex flex-col p-4 gap-5 items-center w-full">

                    <input value={form.site} className='py-1 rounded-3xl w-full px-4' placeholder='WEBSITE URL' type="text" name="site" id="" onChange={handleChange} />

                    <div className='flex flex-col sm:flex-row gap-3 mb-1 w-full'>
                        <div className="w-full">

                            <input value={form.username} className='py-1 w-full rounded-3xl px-4 outline-none' placeholder='@USERNAME' type="text" name="username" id="" onChange={handleChange} />
                        </div>

                        <div className="relative w-full">

                            <input value={form.password} className='py-1 w-full rounded-3xl px-4 outline-none' placeholder='PASSWORD' type="password" name="password" id="" onChange={handleChange} />

                            <span className='absolute right-[4px] top-[9px]' onClick={showPassword}>
                                <img src="Icons/eye.png" alt="See Password"
                                    className="h-4 cursor-pointer" ref={ref} />
                            </span>
                        </div>
                    </div>

                    <button className='px-4 py-1 w-fit flex justify-center items-center rounded-3xl gap-3 font-semibold bg-green-600 text-white hover:bg-green-500' onClick={savePassword}>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover"
                            colors="primary:#000000"
                        ></lord-icon>
                        Add Password </button>

                </div>




                <h2 className="text-white font-semibold tracking-wider text-xl mb-4">Your Saved Data</h2>


                {passwordArray.length === 0 ? <div className='text-white my-3 text-lg font-thin'>No saved Information yet</div> : 
                <div className="overflow-x-auto">
                    <table className='w-full text-center rounded-md overflow-hidden'>
                        <thead className='bg-green-600 text-green-200'>
                            <tr className='w-full'>
                                <th className='p-1'>URL/APP_NAME</th>
                                <th className='p-1'>USERNAME</th>
                                <th className='p-1'>PASSWORD</th>
                                <th className='p-1'>EDIT</th>
                            </tr>
                        </thead>
                        <tbody className='text-white'>
                            {passwordArray.map((item, index) => {
                                return <tr key={index}>
                                    <td className='text-start py-1 underline'>
                                        <div className="flex justify-start items-center mr-5">
                                            <div className="flex justify-start items-start px-2">

                                                <a href={item.site} target='_blank' className=''>{item.site}</a>
                                            </div>
                                            <div className="flex justify-between items-center bg-green-400 rounded-md cursor-pointer"
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
                                    <td className='text-center py-1'>
                                        <div className="flex justify-start items-start">

                                            <div className="flex justify-start mx-2">
                                                {item.username}
                                            </div>
                                            <div className="bg-green-400 rounded-md mx-1 cursor-pointer flex justify-center items-center"
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

                                    <td className='text-center p-3'>
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
                                    <td className='text-center p-3'>
                                        <div className="flex justify-self-center items-center px-14">

                                            <div className='bg-green-400 cursor-pointer flex justify-center items-center rounded-md mx-2'
                                                onClick={() => {
                                                    editPassword(item.id)
                                                }}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/wuvorxbv.json"
                                                    trigger="hover"
                                                    style={{ width: "25px", height: "25px" }}>
                                                </lord-icon>
                                            </div>
                                            <div className='bg-green-400 flex cursor-pointer justify-center items-center rounded-md'
                                                onClick={() => {
                                                    deletePassword(item.id)
                                                }}>
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
                </div>
                }
            </div >
            <ToastContainer />
        </>
    )
}

export default Manager