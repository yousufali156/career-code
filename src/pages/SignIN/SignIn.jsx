import React, { use } from 'react';
import Lottie from 'lottie-react';
import RegisterLottie from '../../assets/Animation/Signup Animation.json';
import AuthContext from '../../FirebaseAuthContext/AuthContext';

const SignIn = () => {
  const { signInUser } = use(AuthContext);

  const handleSignIn = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // Sign In User
    signInUser(email, password)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen space-y-8">
      <div className="hero-content flex-col space-y-8 lg:flex-row-reverse">
        <div className="text-center space-y-8">
          <Lottie animationData={RegisterLottie} loop={true} />
        </div>

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-black font-bold">Sign In Now</h1>

            <form onSubmit={handleSignIn}>
              <fieldset className="fieldset">
                <label htmlFor="email" className="label">Email</label>
                <input name="email" type="email" className="input" placeholder="Email" required />

                <label htmlFor="password" className="label">Password</label>
                <input name="password" type="password" className="input" placeholder="Password" required />

                <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-neutral mt-4" type="submit">Sign In</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
