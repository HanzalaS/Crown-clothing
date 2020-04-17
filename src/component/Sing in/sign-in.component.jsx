import React from 'react';

import './sign-in.styles.scss'

import Custombutton from '../custom-button/custom-button.component';

import FormInput from '../form-input/form-input.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';



class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''

        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        }
        catch (error) {
            console.log(error)
        }

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
                    <div className='buttons'>
                        <Custombutton type='submit' value='submit' > Sign In </Custombutton>
                        <Custombutton onClick={signInWithGoogle} isGoogleSignIn > Sign In With Google</Custombutton>
                    </div>
                </form>

            </div>
        )
    }
}

export default SignIn;