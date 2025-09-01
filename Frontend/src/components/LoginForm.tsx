// import { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
// import { toast } from 'react-hot-toast';
// import { z } from 'zod';
// import { zodResolver } from '@hookform/resolvers/zod';
// import axios, { AxiosError } from 'axios';

// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import Heading from '@/components/ui/heading';
// import { Separator } from '@/components/ui/separator';
// import { Eye, EyeOff } from 'lucide-react';

// const HOST = import.meta.env.VITE_HOST;

// const formSchema = z.object({
//     email: z.string().email('Enter a valid Email Address'),
//     password: z.string().min(6, 'Password should be atleast 8 characters').max(16, 'Password can only have a maximum of 16 characters'),
// })

// type LoginFormValues = z.infer<typeof formSchema>

// interface ErrorResponse {
//     message: string;
// }

// const LoginForm = () => {

//     const navigate = useNavigate()
//     const [showPassword, setShowPassword] = useState(false)
//     const [loading, setLoading] = useState(false)

//     const form = useForm<LoginFormValues>({
//         resolver: zodResolver(formSchema),
//         defaultValues: {
//             email: "",
//             password: ""
//         }
//     })

//     const onSubmit = async (data: LoginFormValues) => {
//         try {
//             setLoading(true)
//             const options = {
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Login-token": localStorage.getItem("token") || "",
//                 }
//             }
//             const res = await axios.post(`${HOST}/api/auth/login`, data, options)
//             localStorage.setItem("token", res.data.authToken);

//             toast.success(res.data.message)
//             navigate('/')
//         } catch (error) {
//             if (axios.isAxiosError(error)) {
//                 const axiosError = error as AxiosError<ErrorResponse>;
//                 if (axiosError.response && axiosError.response.data) {
//                     toast.error(axiosError.response.data.message);
//                 } else {
//                     toast.error('An error occurred');
//                 }
//             } else {
//                 toast.error('An error occurred');
//             }
//         }
//         finally {
//             setLoading(false)
//         }
//     }

//     return (
//         <div className='container max-w-4xl py-4 mx-auto md:py-10'>
//             <Heading title="Login" description='Login to DevNotes' />
//             <Separator className='mt-4 mb-8' />
//             <div className='max-w-lg mx-auto'>
//                 <Form {...form}>
//                     <form onSubmit={form.control.handleSubmit(onSubmit)} className='flex flex-col gap-4'>
//                         <div className='flex flex-col gap-2 md:gap-4'>
//                             <FormField
//                                 control={form.control}
//                                 name='email'
//                                 render={({ field }) => (
//                                     <FormItem>
//                                         <FormLabel>Email</FormLabel>
//                                         <FormControl>
//                                             <Input
//                                                 type="email"
//                                                 disabled={loading}
//                                                 placeholder='Email'
//                                                 {...field}
//                                             />
//                                         </FormControl>
//                                         <FormMessage />
//                                     </FormItem>
//                                 )}
//                             />
//                             <FormField
//                                 control={form.control}
//                                 name='password'
//                                 render={({ field }) => (
//                                     <FormItem>
//                                         <FormLabel>Password</FormLabel>
//                                         <FormControl >
//                                             <div className='relative'>
//                                                 <Input
//                                                     type={showPassword ? 'text' : 'password'}
//                                                     disabled={loading}
//                                                     placeholder='Password'
//                                                     {...field}
//                                                     className='pr-10'
//                                                 />
//                                                 <button type="button" disabled={loading} className='absolute inset-y-0 grid place-items-center right-5 opacity-80 focus:opacity-100' onClick={() => setShowPassword(prev => !prev)}>
//                                                     <EyeOff size={20} className={`${loading ? "text-input" : "text-foreground"} absolute transition-all duration-200 ${showPassword ? "scale-100" : "scale-0"}`} />
//                                                     <Eye size={20} className={`${loading ? "text-input" : "text-foreground"} absolute transition-all duration-200 ${!showPassword ? "scale-100" : "scale-0"}`} />
//                                                 </button>
//                                             </div>
//                                         </FormControl>
//                                         <FormMessage />
//                                     </FormItem>
//                                 )}
//                             />
//                         </div>
//                         <div className='flex flex-col items-start my-3 md:flex-row it md:items-center md:justify-between gap-y-3 md:gap-y-0'>
//                             <div className="flex gap-2 mr-auto">
//                                 <Button
//                                     disabled={loading}
//                                     type="submit"
//                                 >
//                                     Login
//                                 </Button>
//                                 <Button
//                                     disabled={loading}
//                                     type="reset"
//                                     onClick={() => form.reset()}
//                                 >
//                                     Reset
//                                 </Button>
//                             </div>
//                             <div className='sm:pr-3'>
//                                 <p className='flex items-center text-base sm:text-lg text-accent-foreground/50 '>
//                                     <span>Need an Accout ?</span>
//                                     <Link to={loading ? "/login" : "/signup"} className={`pb-[2px] ml-2 text-sm sm:text-base border-b border-b-current  ${loading ? "text-input" : "text-accent-foreground/90 hover:text-accent-foreground"}`}>Sign up now!</Link>
//                                 </p>
//                             </div>
//                         </div>
//                     </form>
//                 </Form>
//             </div>
//         </div>
//     )
// }

// export default LoginForm














// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { toast } from "react-hot-toast";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import axios, { AxiosError } from "axios";

// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import Heading from "@/components/ui/heading";
// import { Separator } from "@/components/ui/separator";

// const HOST = import.meta.env.VITE_HOST;

// const emailSchema = z.object({
//   email: z.string().email("Enter a valid Email Address"),
// });

// type EmailFormValues = z.infer<typeof emailSchema>;

// const LoginForm = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [step, setStep] = useState<"email" | "otp">("email");
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");

//   const form = useForm<EmailFormValues>({
//     resolver: zodResolver(emailSchema),
//     defaultValues: { email: "" },
//   });

//   // Step 1: Request OTP
//   const requestOtp = async (data: EmailFormValues) => {
//     try {
//       setLoading(true);
//       const res = await axios.post(`${HOST}/api/auth/request-login-otp`, { email: data.email });
//       setEmail(data.email);
//       toast.success(res.data.message || "OTP sent to your email");
//       setStep("otp"); // move to OTP input step
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         const axiosError = error as AxiosError<{ error: string }>;
//         toast.error(axiosError.response?.data?.error || "Failed to send OTP");
//       } else {
//         toast.error("An error occurred while sending OTP");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Step 2: Verify OTP
//   const verifyOtp = async () => {
//     try {
//       setLoading(true);
//       const res = await axios.post(`${HOST}/api/auth/verify-login-otp`, { email, otp });
//       localStorage.setItem("token", res.data.authToken);
//       toast.success(res.data.message || "Login successful");
//       navigate("/"); // redirect after login
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         const axiosError = error as AxiosError<{ error: string }>;
//         toast.error(axiosError.response?.data?.error || "OTP verification failed");
//       } else {
//         toast.error("An error occurred during OTP verification");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container max-w-4xl py-4 mx-auto md:py-10">
//       <Heading title="Login" description="Login to DevNotes" />
//       <Separator className="mt-4 mb-8" />
//       <div className="max-w-lg mx-auto">
//         {step === "email" ? (
//           <Form {...form}>
//             <form onSubmit={form.handleSubmit(requestOtp)} className="flex flex-col gap-4">
//               <FormField
//                 control={form.control}
//                 name="email"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Email</FormLabel>
//                     <FormControl>
//                       <Input type="email" placeholder="Email" {...field} disabled={loading} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <Button type="submit" disabled={loading}>
//                 Send OTP
//               </Button>
//               <p className="text-sm mt-2">
//                 Don't have an account? <Link to="/signup" className="text-blue-600">Sign up</Link>
//               </p>
//             </form>
//           </Form>
//         ) : (
//           // OTP step: use plain label instead of FormLabel to avoid context error
//           <div className="flex flex-col gap-4">
//             <label className="font-medium">Enter OTP sent to {email}</label>
//             <Input
//               type="text"
//               placeholder="Enter OTP"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               disabled={loading}
//             />
//             <Button onClick={verifyOtp} disabled={loading || otp.length === 0}>
//               Verify OTP
//             </Button>
//             <Button
//               variant="link"
//               disabled={loading}
//               onClick={() => setStep("email")}
//               className="mt-2 text-sm text-blue-600"
//             >
//               Resend / Change Email
//             </Button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LoginForm;









// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { toast } from "react-hot-toast";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import axios, { AxiosError } from "axios";
// import right from "../Logo_Icons/right-column.png";
// import logo from "../Logo_Icons/logoH.png"; // Uploaded logo
// import { signInWithPopup, auth, googleProvider } from "../firebase";

// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// const HOST = import.meta.env.VITE_HOST;

// const emailSchema = z.object({
//   email: z.string().email("Enter a valid Email Address"),
// });

// type EmailFormValues = z.infer<typeof emailSchema>;

// const LoginForm = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [step, setStep] = useState<"email" | "otp">("email");
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");

//   const form = useForm<EmailFormValues>({
//     resolver: zodResolver(emailSchema),
//     defaultValues: { email: "" },
//   });

//   // Step 1: Request OTP
//   const requestOtp = async (data: EmailFormValues) => {
//     try {
//       setLoading(true);
//       const res = await axios.post(`${HOST}/api/auth/request-login-otp`, {
//         email: data.email,
//       });
//       setEmail(data.email);
//       toast.success(res.data.message || "OTP sent to your email");
//       setStep("otp");
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         const axiosError = error as AxiosError<{ error: string }>;
//         toast.error(
//           axiosError.response?.data?.error || "Failed to send OTP"
//         );
//       } else {
//         toast.error("An error occurred while sending OTP");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Step 2: Verify OTP
//   const verifyOtp = async () => {
//     try {
//       setLoading(true);
//       const res = await axios.post(`${HOST}/api/auth/verify-login-otp`, {
//         email,
//         otp,
//       });
//       localStorage.setItem("token", res.data.authToken);
//       toast.success(res.data.message || "Login successful");
//       navigate("/");
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         const axiosError = error as AxiosError<{ error: string }>;
//         toast.error(
//           axiosError.response?.data?.error || "OTP verification failed"
//         );
//       } else {
//         toast.error("An error occurred during OTP verification");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };


//   const handleGoogleLogin = async () => {
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       const token = await result.user.getIdToken();

//       const res = await axios.post(`${HOST}/api/auth/google-login`, { token });
//       localStorage.setItem("token", res.data.authToken);

//       toast.success("Login successful with Google");
//       navigate("/");
//     } catch (err) {
//       toast.error("Google login failed");
//     }
//   };


//   return (
//     <div className="flex min-h-screen">
//       {/* Left Side - Form */}
//       <div className="flex flex-col justify-start w-full max-w-lg px-8 mx-auto pt-16 md:w-1/2">
//         {/* Logo */}
//         <div className="flex items-center mb-10">
//           <img src={logo} alt="Logo" className="w-8 h-8 mr-2" />
//           <h1 className="text-xl font-bold text-gray-900">HD</h1>
//         </div>

//         {/* Heading */}
//         <h2 className="text-2xl font-semibold">Sign in</h2>
//         <p className="text-gray-500 mb-6">
//           Please login to continue to your account.
//         </p>

//         {/* Email Step */}
//         {step === "email" ? (
//           <Form {...form}>
//             <form
//               onSubmit={form.handleSubmit(requestOtp)}
//               className="flex flex-col gap-4"
//             >
//               <FormField
//                 control={form.control}
//                 name="email"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Email</FormLabel>
//                     <FormControl>
//                       <Input
//                         type="email"
//                         placeholder="Email"
//                         {...field}
//                         disabled={loading}
//                         className="h-11"
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <Button
//                 type="submit"
//                 className="h-11 bg-blue-600 hover:bg-blue-700"
//                 disabled={loading}
//               >
//                 Send OTP
//               </Button>
//             </form>
//           </Form>
//         ) : (
//           /* OTP Step */
//           <div className="flex flex-col gap-4">
//             <label className="font-medium">
//               Enter OTP sent to {email}
//             </label>
//             <Input
//               type="text"
//               placeholder="Enter OTP"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               disabled={loading}
//               className="h-11"
//             />
//             <Button
//               onClick={verifyOtp}
//               disabled={loading || otp.length === 0}
//               className="h-11 bg-blue-600 hover:bg-blue-700"
//             >
//               Verify OTP
//             </Button>

//             {/* Resend OTP Button */}
//             <Button
//               variant="outline"
//               disabled={loading}
//               onClick={() => setStep("email")}
//               className="h-11 border-blue-600 text-blue-600 hover:bg-blue-50"
//             >
//               Resend OTP
//             </Button>
//           </div>
//         )}

//         {/* Always visible signup link */}
//         <p className="text-sm mt-6">
//           Need an account?{" "}
//           <Link to="/signup" className="text-blue-600 hover:underline">
//             Create one
//           </Link>
//         </p>
    





//       {/* Divider */}
//         <div className="flex items-center my-6">
//           <div className="flex-grow border-t border-gray-300"></div>
//           <span className="px-2 text-gray-500 text-sm">or</span>
//           <div className="flex-grow border-t border-gray-300"></div>
//         </div>

//         {/* Google Login */}
//         <Button
//           onClick={handleGoogleLogin}
//           className="h-11 flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-100 bg-white text-gray-700"
//         >
//           <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-5 h-5" />
//           Continue with Google
//         </Button>
//       </div>










//       {/* Right Side - Image */}
//       <div className="hidden md:flex md:w-1/2 items-center justify-center">
//         <img
//           src={right}
//           alt="Login Illustration"
//           className="object-contain w-full h-[80vh] rounded-l-3xl"
//         />
//       </div>
//     </div>
//   );
// };

// export default LoginForm;









import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";
import right from "../Logo_Icons/right-column.png";
import logo from "../Logo_Icons/logoH.png";
import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "@/firebase.ts";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const HOST = import.meta.env.VITE_HOST;

const emailSchema = z.object({
  email: z.string().email("Enter a valid Email Address"),
});

type EmailFormValues = z.infer<typeof emailSchema>;

export default function LoginForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<"email" | "otp">("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const form = useForm<EmailFormValues>({
    resolver: zodResolver(emailSchema),
    defaultValues: { email: "" },
  });

  // Step 1: Request OTP
  const requestOtp = async (data: EmailFormValues) => {
    try {
      setLoading(true);
      const res = await axios.post(`${HOST}/api/auth/request-login-otp`, {
        email: data.email,
      });
      setEmail(data.email);
      toast.success(res.data.message || "OTP sent to your email");
      setStep("otp");
    } catch (error) {
      const err = error as AxiosError<{ error: string }>;
      toast.error(err.response?.data?.error || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  // Step 2: Verify OTP
  const verifyOtp = async () => {
    try {
      setLoading(true);
      const res = await axios.post(`${HOST}/api/auth/verify-login-otp`, {
        email,
        otp,
      });
      localStorage.setItem("token", res.data.authToken);
      toast.success(res.data.message || "Login successful");
      navigate("/");
    } catch (error) {
      const err = error as AxiosError<{ error: string }>;
      toast.error(err.response?.data?.error || "OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      const token = await result.user.getIdToken();

      const res = await axios.post(`${HOST}/api/auth/google-login`, { token });
      localStorage.setItem("token", res.data.authToken);

      toast.success("Login successful with Google");
      navigate("/");
    } catch {
      toast.error("Google login failed");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Form */}
      <div className="flex flex-col justify-start w-full max-w-lg px-8 mx-auto pt-16 md:w-1/2">
        {/* Logo */}
        <div className="flex items-center mb-10">
          <img src={logo} alt="Logo" className="w-8 h-8 mr-2" />
          <h1 className="text-xl font-bold text-gray-900">HD</h1>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold">Sign in</h2>
        <p className="text-gray-500 mb-6">
          Please login to continue to your account.
        </p>

        {/* Email Step */}
        {step === "email" ? (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(requestOtp)}
              className="flex flex-col gap-4"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Email"
                        {...field}
                        disabled={loading}
                        className="h-11"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="h-11 bg-blue-600 hover:bg-blue-700"
                disabled={loading}
              >
                Send OTP
              </Button>
            </form>
          </Form>
        ) : (
          /* OTP Step */
          <div className="flex flex-col gap-4">
            <label className="font-medium">
              Enter OTP sent to {email}
            </label>
            <Input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              disabled={loading}
              className="h-11"
            />
            <Button
              onClick={verifyOtp}
              disabled={loading || otp.length === 0}
              className="h-11 bg-blue-600 hover:bg-blue-700"
            >
              Verify OTP
            </Button>
            <Button
              variant="outline"
              disabled={loading}
              onClick={() => setStep("email")}
              className="h-11 border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              Resend OTP
            </Button>
          </div>
        )}

        {/* Always visible signup link */}
        <p className="text-sm mt-6">
          Need an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Create one
          </Link>
        </p>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-2 text-gray-500 text-sm">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Google Login */}
        <Button
          onClick={handleGoogleLogin}
          className="h-11 flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-100 bg-white text-gray-700"
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </Button>
      </div>

      {/* Right Side - Image */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center">
        <img
          src={right}
          alt="Login Illustration"
          className="object-contain w-full h-[80vh] rounded-l-3xl"
        />
      </div>
    </div>
  );
}


