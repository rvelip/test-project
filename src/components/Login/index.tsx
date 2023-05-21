import React, { useState } from 'react'
import { loginStyle } from './login_tailwind'
import { useRouter } from 'next/router';
import { login_data } from '@/mock/login_data';

interface ILogin {
    username: string,
    password: string
}

export default function Login() {
    const router = useRouter();
    const [inputs, setInputs] = useState<ILogin>({ username: "", password: "" });
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [errors, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values: any) => ({ ...values, [name]: value }))
    }

    const handleLogin = (e: any) => {
        e.preventDefault();
        if (inputs.username.length == 0 || inputs.password.length == 0) {
            setError(true);
        }

        const login_credentials = login_data.filter(item => item.username === inputs.username)[0];
        if (login_credentials && (inputs.username === login_credentials.username) && (inputs.password === login_credentials.password)) {
            setIsLoggedIn(true);
            if (login_credentials.persona === "team_member") {
                router.push('/Dashboard')
            } else if (login_credentials.persona === "manager") {
                router.push('/DashboardManager')
            }
        }
        else {
            if (inputs.username.length != 0 || inputs.password.length != 0) {
                setErrorMessage(true);
            }

        }   

    }

    return (
        <div
            className={loginStyle.mainwrapper}
        >
            <div
                className={loginStyle.innerWrapper}
            >
                <h1 className={loginStyle.heading}>Welcome to Logistics Orchestration</h1>
                <div className={loginStyle.formMargin}>
                    <form id="form">
                        <div className={loginStyle.column}>
                            <label
                                htmlFor="username"
                                className={loginStyle.label}
                            >
                                Username:
                            </label>
                            <input
                                id="username"
                                type="username"
                                name="username"
                                className={loginStyle.input}
                                placeholder="Username"
                                onChange={(e) => handleChange(e)}
                            />
                            {errors && inputs.username.length <= 0 ?
                                <p className="text-sm text-red-600">Username is required</p>
                                : ''}
                            <p
                                className={loginStyle.label}
                            >
                                Forgot Username?
                            </p>
                        </div>
                        <div className={loginStyle.column}>
                            <label
                                htmlFor="password"
                                className={loginStyle.label}
                            >
                                Password:
                            </label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                className={loginStyle.input}
                                placeholder="Password"
                                onChange={(e) => handleChange(e)}
                            />
                            {errors && inputs.password.length <= 0 ?
                                <p className="text-sm text-red-600">Password is required</p>
                                : ''}
                            <p
                                className={loginStyle.label}
                            >
                                Forgot Password?
                            </p>
                            {errorMessage ?
                                <p className="text-sm text-red-600">Invalid Username or Password</p>
                                : ''}
                        </div>

                        <div className={loginStyle.buttonWidth}>
                            <button
                                type="submit"
                                className={`${loginStyle.button} ${loginStyle.btnMargin}`}
                                onClick={(e) => handleLogin(e)}
                            >
                                Login
                            </button>
                            <button
                                type="submit"
                                className={loginStyle.button}
                                onClick={(e) => {
                                    e.preventDefault()
                                    router.push('/Dashboard')
                                }}
                            >
                                Login with SSO
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
