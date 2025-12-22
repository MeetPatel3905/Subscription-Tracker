import React,{ useState }  from 'react'
import AuthLayout from '../../component/layouts/AuthLayout'
import { Link, useNavigate} from 'react-router-dom'
import Input from '../../component/inputs/input';
import { validateEmail } from '../../utils/helper';
import ProfilePhotoSelector from '../../component/Inputs/ProfilePhotoSelector';


 
 const signup = () => {
   const [profilepic, setProfilepic] = useState(null);
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    
      const handleSignup = async(e) => {
      e.preventDefault();

      if(!fullname){
        setError("Please enter your full name.");
        return;
      }
      if(!validateEmail(email)){
        setError("Please enter a valid email address.");
        return;
       }
        if(!password){
          setError("Please enter your password.");
          return;
        }
        if(password !== confirmPassword){
          setError("Passwords do not match.");
          return;
        }
        setError("");

        //signup API call




        
      }

   return (
      <AuthLayout>
        <div className="lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-black ">Create an Account</h3>
          <p className="text-xs text-slate-700 mt-[5px] mb-6">Join us today to manage your subscriptions</p>

          <form onSubmit={handleSignup}>

            <ProfilePhotoSelector image={profilepic} setImage={setProfilepic} /> 

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                value={fullname}
                onChange={({target}) => setFullname(target.value)}
                label="Full Name"
                placeholder="Enter your full name"
                type="text"
              />
              <Input
                 value={email}
                 onChange={({target}) => setEmail(target.value)}
                 label="Email Address"
                 placeholder="Enter your email"
                 type="text"
              />

              <div className="col-span-2">
              <Input
              value={password}
              onChange={({target}) => setPassword(target.value)}
              label="Password"
              placeholder="Min 8 characters"
              type="password"
              />

              <Input
              value={confirmPassword}
              onChange={({target}) => setConfirmPassword(target.value)}
              label="Confirm Password"
              placeholder="Re-enter your password"
              type="password"
              />

               

        </div>
      </div>
            {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}
                    
                    <button type="submit" className="btn-primary">
                      SIGN UP
                    </button>
            
                    <p className="text-[13px] text-slate-800 mt-3">
                      Already have an account?{' '}
                      <Link className='font-medium text-primary underline' to="/login">
                        Login
                      </Link>
                    </p>

     </form>
    </div>
  </AuthLayout>
   );
  };

 export default signup;