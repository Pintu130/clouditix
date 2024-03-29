import Image from 'next/image';
import React, { useState } from 'react';
import CustomLoader from '../common/CutomLoader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SingleSelectDropDown from '../common/SingleSelectDropDown';
import { useDispatch } from 'react-redux';
import { setRole, setSingleRole } from '@/store/roleSlice';
import { fetchGetRoles } from '@/assets/data';

const Solution = [
    { label: "Guest 360", value: "Guest 360" },
    { label: "Solution 2", value: "solution2" },
    { label: "Solution 3", value: "solution3" },
];
const Roledata = [
    { label: "Data Owner", value: "Data Owner" },
    { label: "Data Entry", value: "Data Entry" },
    { label: "Data Steward", value: "Data Steward" },
    { label: "Just For Testing", value: "Just For Testing" },
    { label: "Administrator", value: "Administrator" },
];

const LoginPage = ({ handlelogin }) => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        solution: '',
        roledata: ''
    });

    const [errors, setErrors] = useState({
        username: '',
        password: '',
        solution: '',
        roledata: ''
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = name === 'roledata' || name === 'solution' ? e.target.value : e.target.value.trim();
        setFormData({
            ...formData,
            [name]: value
        });

        setErrors({
            username: '',
            password: '',
            solution: '',
            roledata: ''
        });
    };

    const formvalidation = () => {
        const errors = {};
        if (!formData.username) {
            errors.username = 'Username is required';
        }
        if (!formData.password) {
            errors.password = 'Password is required';
        }
        if (!formData.solution) {
            errors.solution = 'Solution is required';
        }
        if (!formData.roledata) {
            errors.roledata = 'Roledata is required';
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const submitForm = async (e) => {
        e.preventDefault();
        if (formvalidation()) {
            dispatch(setRole(formData.roledata));
            const data = await fetchGetRoles();
            if (data?.length > 0) {
                const modifyData = data.map((item) => ({
                    label: item.roleName,
                    value: item.roleScreens
                }));
                console.log(modifyData, 'all data----->>>');
                const adminData = modifyData.find(item => item.label === formData?.roledata.value);
                console.log("🚀single data------->>>", adminData)
                dispatch(setSingleRole(adminData));
            }
            handlelogin(true);
        }
    };


    return (
        <>
            <div className='flex flex-col items-center justify-center min-h-screen'>
                {isLoading && <CustomLoader />}
                <div className='flex flex-col items-center justify-center gap-4 align-middle font-Assistant '>
                    <div className='flex items-center justify-center'>
                        <Image src='/images/logo.png'
                            alt='BrandLogo'
                            width={300}
                            height={300}
                        />
                        <span className='text-2xl font-extrabold'>MDM 360</span>
                    </div>
                    <form action="" onSubmit={(e) => submitForm(e)} className='flex flex-col items-center justify-center gap-6 align-middle pb-5'>
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
                                    className={`w-[324px] h-10 p-2 rounded-[4px] border-[1px] ${errors.username ? 'border-Error' : 'border-[#4A4A4A]'} placeholder:text-lg placeholder:leading-6 placeholder:font-normal placeholder:text-[#4A4A4A] hover:border-[#46e04]   active:border-2 active:border-solid active:border-[#46e04] focus:border-2 focus:border-solid focus:border-[#46e04] outline-none`} />
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
                                        className={` w-[324px] p-2 h-10  rounded-[4px] border-[1px] ${errors.password ? 'border-Error' : 'border-[#4A4A4A]'} placeholder:text-lg placeholder:leading-6 placeholder:font-normal placeholder:text-[#4A4A4A] hover:border-[#46e04]   active:border-2 active:border-solid active:border-[#46e04] focus:border-2 focus:border-solid focus:border-[#46e04] outline-none`} />
                                    {errors.password && <span className='absolute pt-1 text-sm font-normal leading-4 -bottom-4 text-Error animate-fade-in '>{errors.password}</span>}
                                </div>
                                <div className='relative flex flex-col w-full pt-3 '>
                                    <div className="flex flex-col w-full items-start  custom-select">
                                        <label
                                            htmlFor="speciality"
                                            className="text-[#4A4A4A] text-sm font-normal font-Assistant"
                                        >
                                            Solution
                                        </label>
                                        <div className="w-full max-w-[100%]">
                                            <SingleSelectDropDown
                                                placeholder="Enter Solution"
                                                options={Solution}
                                                target="solution"
                                                creatableSelect={true}
                                                selectedType={formData?.solution}
                                                handleSelectChange={(data) => handleChange({ target: { name: "solution", value: data } })}
                                            />
                                        </div>
                                        {errors.solution && (
                                            <span className="absolute pt-1 text-sm font-normal leading-4 -bottom-4 text-Error animate-fade-in ">
                                                {errors.solution}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className='relative flex flex-col w-full pt-3 '>
                                    <div className="flex flex-col w-full items-start  custom-select">
                                        <label
                                            htmlFor="speciality"
                                            className="text-[#4A4A4A] text-sm font-normal font-Assistant"
                                        >
                                            Role
                                        </label>
                                        <div className="w-full max-w-[100%]">
                                            <SingleSelectDropDown
                                                placeholder="Enter Role"
                                                options={Roledata}
                                                target="roledata"
                                                creatableSelect={true}
                                                selectedType={formData?.roledata}
                                                handleSelectChange={(data) => handleChange({ target: { name: "roledata", value: data } })}
                                            />
                                        </div>
                                        {errors.roledata && (
                                            <span className="absolute pt-1 text-sm font-normal leading-4 -bottom-4 text-Error animate-fade-in ">
                                                {errors.roledata}
                                            </span>
                                        )}
                                    </div>
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
                            className=' bg-[#046e04] w-full py-[10px] px-6 text-[#fff] font-semibold text-lg leading-5 text-center rounded-[3px] '
                        >
                            SIGN IN
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

export default LoginPage;
