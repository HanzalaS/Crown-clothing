import React from 'react';

import './sign-in.styles.scss'

import Custombutton from '../custom-button/custom-button.component';

import FormInput from '../form-input/form-input.component';



class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''

        }
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
    }
    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and passowrd</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type='email' handleChange={this.handleChange} label='email' name='email' value={this.state.email} required />

                    <FormInput type='password' handleChange={this.handleChange} label='password' name='password' value={this.state.password} required />

                    <Custombutton type='submit' value='submit' > Sign In </Custombutton>
                </form>

            </div>
        )
    }
}

export default SignIn;