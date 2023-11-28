import Image from 'next/image'
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import CustomLoader from '../common/CutomLoader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LoginPage = ({handlelogin}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        username: '',
        password: '',
    });
    const router = useRouter();

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value.trim()

        setFormData({
            ...formData,
            [name]: value
        })

        setErrors({
            username: '',
            password: ''
        })

    }

    const formvalidation = () => {
        const errors = {};
        if (!formData.username) {
            errors.username = 'Username is required';
        }
        if (!formData.password) {
            errors.password = 'Password is required';
        }
        setErrors(errors); // Update the errors state
        return Object.keys(errors).length === 0; // Return true if there are no errors
    };

    function setCookie(name, value, daysToExpire) {
        const date = new Date();
        date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000)); // Calculate expiration date.
        const expires = `expires=${date.toUTCString()}`;
        document.cookie = `${name}=${value}; ${expires}; path=/`;
    }

    const submitForm = async (e) => {
        e.preventDefault();
        if (formvalidation()) {
            const loginData = {
                username: formData.username,
                password: formData.password,
                ip: "1223345"
            };

            console.log("login");

            handlelogin(true)

           /*  try {
                if (loginData?.username?.length > 0) {
                    setIsLoading(true)
                    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/authenticateuser`, {
                        method: "POST",
                        body: JSON.stringify(loginData),
                    });


                    const Data = await response.json();

                    if (Data.Message === "Success") {
                        setFormData({
                            username: '',
                            password: ''
                        })
                        //test
                        localStorage.setItem('Token', JSON.stringify(Data.Data));
                        setCookie('Token', Data.Data, 365)
                        router.push('/services');
                        // setIsLoading(false)
                    } else {
                        setFormData({
                            username: '',
                            password: ''
                        })
                        setIsLoading(false)
                        toast.error(Data.Message, {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            toastId: "toastId"
                        });
                    }
                } else {
                    console.log("add valid data");

                }
            } catch (error) {
                setIsLoading(false)
                console.log(error);
                return error
            } */
        }

    };


    return (
        <>
            <div className='flex flex-col items-center justify-center min-h-screen'>
                {isLoading && <CustomLoader />}
                <div className='flex flex-col items-center justify-center gap-6 align-middle font-Assistant '>
                    <div>
                        <Image src='/images/icon/logo.png' alt='BrandLogo'
                            width={300}
                            height={300}
                        />
                    </div>
                    <form action="" onSubmit={(e) => submitForm(e)} className='flex flex-col items-center justify-center gap-6 align-middle'>
                        <div className='flex flex-col gap-6'>
                            <div className='relative flex flex-col'>
                                <label htmlFor='username' className='text-[#4A4A4A] text-sm font-normal font-Assistant '>Username</label>
                                <input
                                    type="text"
                                    placeholder='Username'
                                    id='username'
                                    name='username'
                                    value={formData.username}
                                    onChange={(e) => handleChange(e)}
                                    className={`w-[324px] h-10 p-2 rounded-[4px] border-[1px] ${errors.username ? 'border-Error' : 'border-[#4A4A4A]'} placeholder:text-lg placeholder:leading-6 placeholder:font-normal placeholder:text-[#4A4A4A] hover:border-blue-B40   active:border-2 active:border-solid active:border-blue-B40 focus:border-2 focus:border-solid focus:border-blue-B40 outline-none`} />
                                {errors.username && <span className='absolute pt-1 text-sm font-normal leading-4 -bottom-4 text-Error animate-fade-in '>{errors.username}</span>}
                            </div>
                            <div className='flex flex-col items-center justify-center gap-2'>
                                <div className='relative flex flex-col'>
                                    <label htmlFor='password' className='text-[#4A4A4A] text-sm font-normal '>Password</label>
                                    <input
                                        type="password"
                                        placeholder='Password'
                                        id='password'
                                        name='password'
                                        value={formData.password}
                                        onChange={(e) => handleChange(e)}
                                        className={` w-[324px] p-2 h-10  rounded-[4px] border-[1px] ${errors.password ? 'border-Error' : 'border-[#4A4A4A]'} placeholder:text-lg placeholder:leading-6 placeholder:font-normal placeholder:text-[#4A4A4A] hover:border-blue-B40   active:border-2 active:border-solid active:border-blue-B40 focus:border-2 focus:border-solid focus:border-blue-B40 outline-none`} />
                                    {errors.password && <span className='absolute pt-1 text-sm font-normal leading-4 -bottom-4 text-Error animate-fade-in '>{errors.password}</span>}
                                </div>
                                <div className='flex items-center justify-between w-full pt-3'>
                                    <div className='flex items-center justify-center gap-2'>
                                        <input type="checkbox" id='Remember-me' className='rounded-[4px] border-[1px] border-[#4A4A4A] ' />
                                        <label htmlFor="Remember-me" className=" text-[#4A4A4A] leading-6 font-normal text-base ">Remember Me</label>
                                    </div>
                                    <div className="text-[#4A4A4A] border-b-[1.5px] border-b-[#4A4A4A] cursor-pointer leading-4 font-normal text-base ">Forgot Password</div>
                                </div>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className=' bg-[#1D458C] w-full py-[10px] px-6 text-[#fff] font-semibold text-lg leading-5 text-center rounded-[3px] '
                        >
                            Log in
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}

export default LoginPage