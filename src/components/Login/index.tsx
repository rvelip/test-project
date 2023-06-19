import React, { useEffect, useState } from 'react'
import { loginStyle } from './login_tailwind'
import { useRouter } from 'next/router';
import { login_data } from '@/mock/login_data';
import { CONSTANTS } from '@/constants/constants';
import { fetchProfileDetailsAction } from '@/store/actions/profileAction';
import { useDispatch } from 'react-redux';

interface ILogin {
    username: string,
    password: string
}

export default function Login() {
    // const router = useRouter();
    // const dispatch: any = useDispatch();

    // const [inputs, setInputs] = useState<ILogin>({ username: "", password: "" });
    // const [errors, setError] = useState(false);
    // const [errorMessage, setErrorMessage] = useState(false);
    // const handleChange = (event: any) => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     setInputs((values: any) => ({ ...values, [name]: value }))
    // }

    // const handleLogin = (e: any) => {
    //     e.preventDefault();
    //     if (inputs.username.length == 0 || inputs.password.length == 0) {
    //         setError(true);
    //     }

    //     const login_credentials = login_data.filter(item => item.username === inputs.username)[0];
    //     if (login_credentials && (inputs.username === login_credentials.username) && (inputs.password === login_credentials.password)) {
    //         //set log in to true
    //         //load profile data
    //         dispatch(fetchProfileDetailsAction(login_credentials.persona));
    //         //direct to team member route or manager route
    //         if (login_credentials.persona === "team_member") {
    //             router.push('/TeamMember')
    //         } else if (login_credentials.persona === "manager") {
    //             router.push('/Manager')
    //         }
    //     }
    //     else {
    //         if (inputs.username.length != 0 || inputs.password.length != 0) {
    //             setErrorMessage(true);
    //         }
    //     }
    //   }

    return (
        // <div
        //     className={loginStyle.mainwrapper}
        // >
        //     <div
        //         className={loginStyle.innerWrapper}
        //     >
        //         <h1 className={loginStyle.heading}>{CONSTANTS.LOGIN_HEADING}</h1>
        //         <div className={loginStyle.formMargin}>
        //             <form id="form">
        //                 <div className={loginStyle.column}>
        //                     <label
        //                         htmlFor="username"
        //                         className={loginStyle.label}
        //                     >
        //                         {CONSTANTS.USERNAME}:
        //                     </label>
        //                     <input
        //                         id="username"
        //                         type="username"
        //                         name="username"
        //                         className={loginStyle.input}
        //                         placeholder="Username"
        //                         onChange={(e) => handleChange(e)}
        //                     />
        //                     {errors && inputs.username.length <= 0 ?
        //                         <p className="text-sm text-red-600">{CONSTANTS.USERNAME_EMPTY_MESSGAE}</p>
        //                         : ''}
        //                     <p
        //                         className={loginStyle.label}
        //                     >
        //                         {CONSTANTS.FORGOT_USERNAME}?
        //                     </p>
        //                 </div>
        //                 <div className={loginStyle.column}>
        //                     <label
        //                         htmlFor="password"
        //                         className={loginStyle.label}
        //                     >
        //                         {CONSTANTS.PASSWORD}:
        //                     </label>
        //                     <input
        //                         id="password"
        //                         type="password"
        //                         name="password"
        //                         className={loginStyle.input}
        //                         placeholder="Password"
        //                         onChange={(e) => handleChange(e)}
        //                     />
        //                     {errors && inputs.password.length <= 0 ?
        //                         <p className="text-sm text-red-600">{CONSTANTS.PASSWORD_EMPTY_MESSGAE}</p>
        //                         : ''}
        //                     <p
        //                         className={loginStyle.label}
        //                     >
        //                         {CONSTANTS.FORGOT_PASSWORD}?
        //                     </p>
        //                     {errorMessage ?
        //                         <p className="text-sm text-red-600">{CONSTANTS.INVALID_USERNAME_PASSWORD_MESSAGE}</p>
        //                         : ''}
        //                 </div>

        //                 <div className={loginStyle.buttonWidth}>
        //                     <button
        //                         type="submit"
        //                         className={`${loginStyle.button} ${loginStyle.btnMargin}`}
        //                         onClick={(e) => handleLogin(e)}
        //                     >
        //                         {CONSTANTS.LOGIN}
        //                     </button>
        //                     <button
        //                         type="submit"
        //                         className={loginStyle.button}
        //                         onClick={(e) => {
        //                             e.preventDefault()
        //                             router.push('/Dashboard')
        //                         }}
        //                     >
        //                         {CONSTANTS.LOGIN_WITH_SSO}
        //                     </button>
        //                 </div>
        //             </form>
        //         </div>
        //     </div>
        // </div>
        <></>
    )
}
