import React from 'react'
import { connect } from 'react-redux'

import { googleSignInStart, emailSignInStart } from 'redux/user/user.actions'

import FormInput from 'components/form-input/form-input.component'
import CustomButton from 'components/custom-button/custom-button.component'

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

    handleSubmit = async event => {
        event.preventDefault();

        const { emailSignInStart } = this.props
        const { email, password } = this.state
        emailSignInStart(email, password)

        // try {
        //     await auth.signInWithEmailAndPassword(email, password)

        //     this.setState({
        //         email: '',
        //         password: ''
        //     })
        // } catch(error){
        //     console.error(error)
        // }
    }

    render() {
        const { googleSignInStart } = this.props
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
                        <CustomButton
                            type='button'
                            isGoogleSignIn
                            onClick={ googleSignInStart }
                        >
                            Sign In with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToprops = dispatch => ({
    googleSignInStart: () => dispatch (googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect (null, mapDispatchToprops)(SignIn)