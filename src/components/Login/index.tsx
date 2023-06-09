import React from 'react'
import { loginStyle } from './login_tailwind'
import { useRouter } from 'next/router';

export default function Login() {
    const router = useRouter();
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
                            />

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
                            />

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
                                onClick={(e) => {
                                    e.preventDefault()
                                    router.push('/Dashboard')
                                }}
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
