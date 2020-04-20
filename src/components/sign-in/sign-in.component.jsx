import React from 'react'
import { signInWithGoogle } from 'firebase/firebase.utils'

import FormInput from 'components/form-input/form-input.component'
import CustomButton from 'components/custom-button/custom-button.components'

import './sign-in.styles.scss'



class SignIn extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        this.setState({
            email: '',
            password: ''
        })
        event.preventDefault();
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={ this.handleSubmit }>
                    <FormInput
                        name='email'
                        type='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        label='Email'
                        required />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        label='Password'
                        required />
                    <div className='buttons'>
                        <CustomButton type='submit'>Submit form</CustomButton>
                        <CustomButton isGoogleSignIn onClick={ signInWithGoogle }>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn