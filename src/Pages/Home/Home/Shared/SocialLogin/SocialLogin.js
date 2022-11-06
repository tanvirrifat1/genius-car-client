import React from 'react';
import { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { setAuthToken } from '../../../../../api/Auth';
import { AuthContext } from '../../../../../context/AuthProvider/AuthProvider';


const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user
                console.log(user);
                setAuthToken(user)
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <p className="text-center"><small>Social Login</small></p>
            <p className="text-center">
                <button onClick={handleGoogleSignIn} className="btn btn-ghost"><FaGoogle className='mr-2 hover:text-blue-700'></FaGoogle> Google</button>
            </p>
        </div>
    );
};

export default SocialLogin;