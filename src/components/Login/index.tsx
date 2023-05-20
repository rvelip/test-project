import React, { useState } from 'react'
import { loginStyle } from './login_tailwind'
import { useRouter } from 'next/router';
import { login_data } from '@/mock/login_data';

interface ILogin {
    username: string,
    password: string
}

const validate = (values: any) => {
    let errors = {};
    if (values.username.length===0) {
        errors.username = "Username is required";
    }
     if (values.password.length===0) {
        errors.password = "Password is required";
    }


    return errors;
}

export default function Login() {
    const router = useRouter();
    const [inputs, setInputs] = useState<ILogin>({ username: "", password: "" });
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [errors, setError] = useState({});
    const handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values: any) => ({ ...values, [name]: value }))
    }

    const handleLogin = (e: any) => {
        e.preventDefault();
        setError(validate(inputs));
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
                            {errors && (
                                <p className="text-sm text-red-600">{errors.username}</p>
                            )}
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
                            {errors && (
                                <p className="text-sm text-red-600">{errors.password}</p>
                            )}
                            <p
                                className={loginStyle.label}
                            >
                                Forgot Password?
                            </p>
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
