import {Link, useNavigate} from "react-router-dom";

import createAxiosInstance from "@/axios/axios-instance.ts";

import {useCookies} from "react-cookie";

import {useSelector} from "react-redux";
import {clearUserData} from "@/rdx/slices/userSlice.ts";
import {store} from "@/rdx/store.ts";

import useClickOutside from "@/hooks/useClickOutside.ts";

import Button from "@/components/buttons/Button.tsx";
import ForumLogo from "@/assets/icons/ForumLogo.tsx";
import UserRegistrationLogo from "@/assets/icons/UserRegistrationLogo.tsx";


function Header() {
    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    const user = useSelector((state) => state.user)
    const axiosInstance = createAxiosInstance(cookies.user?.token)
    const navigate = useNavigate()
    const { ref,
            isComponentVisible,
            setIsComponentVisible
    } = useClickOutside(false);

    return (
        <div
            className={'flex items-center justify-between w-full bg-white border-b fixed top-0 left-0 right-0 z-50 py-5 pl-12 pr-9'}>
            <Link to={'/'} className={'flex items-center gap-4 cursor-pointer'}>
                <ForumLogo/>
                <h1 className={'tracking-wider'}>Fo<span className={'font-bold'}>rum</span></h1>
            </Link>
            {Object.keys(user).length !== 0 ? (
                <>
                    <div className={'flex items-center gap-4'}>
                        <Link to={'/add-question'}>
                            <Button icon={<UserRegistrationLogo/>} text={'Ask a Question'} onClick={() => {
                            }}/>
                        </Link>
                        <div className={'relative'}>
                            <button
                                onClick={() => setIsComponentVisible((prev) => !prev)}
                                className={'flex items-center gap-2'}>
                                    <div id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar"
                                            className="flex text-sm bg-gray-800 rounded-full"
                                    >
                                        <img className="w-8 h-8 rounded-full" src="/images/profile-pic.jpeg"
                                             alt="user photo"/>
                                    </div>

                                    <h1 className={'text-xs font-normal'}>{user.username}</h1>
                            </button>

                            {isComponentVisible && (
                                <div
                                    ref={ref}
                                    className="absolute top-11 right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">

                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdownUserAvatarButton">
                                        <li>
                                            <a href="#"
                                               className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                               className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                               className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                        </li>
                                    </ul>
                                    <div className="py-2">
                                        <button
                                           onClick={() => {
                                               axiosInstance.get('/auth/logout')
                                                   .then(() => {
                                                       console.log('Logout successful');
                                                   })
                                                   .catch((error) => {
                                                       console.error('Logout failed: ', error);
                                                   });
                                               removeCookie('user',{path:'/'});
                                               store.dispatch(clearUserData())
                                               navigate('/auth/login')
                                           }}
                                           className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                        >Sign out</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className={'flex items-center gap-4'}>
                        <Link to={'/auth/register'}>
                            <Button icon={<UserRegistrationLogo/>} text={'Register'} onClick={() => {
                            }}/>
                        </Link>
                        <Link to={'/auth/login'}>
                            <Button variant={'secondary'} text={'Login'} onClick={() => {
                            }}/>
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
}

export default Header;