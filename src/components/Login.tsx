import logoImg from '../assets/sage.svg'
import coverImg from '../assets/login-cover.png'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        // login logic

        navigate('/organizations')
    }
    return (
        <div className="h-[100vh] flex p-[48px]">
          {/* Left Side (Image) */}
          <div className="w-1/2">
            <img 
              src={coverImg}
              alt="Ocean Waves" 
              className="h-full w-full object-cover rounded-2xl"
            />
          </div>
    
          {/* Right Side (Form) */}
          <div className="w-1/2 flex items-center justify-center">
            <div className="w-full max-w-md px-8">
              <div className="text-center mb-8">
                <img 
                  src={logoImg}
                  alt="Sage Logo" 
                  className="mx-auto h-12"
                />
              </div>
              <h2 className="text-center text-2xl font-bold">Sign in</h2>
              
              {/* Form */}
              <div className="mt-6 space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">Email</label>
                  <input 
                    id="email" 
                    type="email" 
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium">Password</label>
                  <input 
                    id="password" 
                    type="password" 
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input 
                      id="remember-me" 
                      type="checkbox" 
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm">
                      Remember me
                    </label>
                  </div>
                  <div>
                    <a href="#" className="text-sm text-indigo-600 hover:underline">
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleLogin}
                  className="w-full py-2 px-4 bg-black text-white rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign In
                </button>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm">
                  Don't have an account? <a href="#" className="text-indigo-600 hover:underline">Book a demo</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Login