// import { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
// import { toast } from 'react-hot-toast';
// import { z } from 'zod';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { Eye, EyeOff } from 'lucide-react';
// import axios, { AxiosError } from 'axios';

// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import Heading from '@/components/ui/heading';
// import { Separator } from '@/components/ui/separator';

// const HOST = import.meta.env.VITE_HOST;

// const passwordSchema = z.string().min(6, 'Password should be atleast 8 characters').max(16, 'Password can only have a maximum of 16 characters')

// const formSchema = z.object({
//     name: z.string().min(3, "User Name must contain 3 characters."),
//     email: z.string().email('Enter a valid Email Address'),
//     password: passwordSchema,
//     cpassword: passwordSchema
// }).refine((data) => data.password === data.cpassword, {
//     path: ["cpassword"],
//     message: "Password don't match",
// })

// type SignUpFormValues = z.infer<typeof formSchema>

// interface ErrorResponse {
//     message: string;
// }

// const SignUpForm = () => {

//     const navigate = useNavigate()
//     const [showPassword, setShowPassword] = useState(false)
//     const [showConfirmPassword, setShowConfirmPassword] = useState(false)
//     const [loading, setLoading] = useState(false)

//     const form = useForm<SignUpFormValues>({
//         resolver: zodResolver(formSchema),
//         defaultValues: {
//             name: "",
//             email: "",
//             password: "",
//             cpassword: ""
//         }
//     })

//     const toggleview = (type: string) => {
//         type === "pass" ? setShowPassword(prev => !prev) : setShowConfirmPassword(prev => !prev)

//     }

//     const onSubmit = async (data: SignUpFormValues) => {
//         try {
//             setLoading(true)
//             const options = {
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Login-token": localStorage.getItem("token") || "",
//                 }
//             }
//             const res = await axios.post(`${HOST}/api/auth/createuser`, data, options)
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
//             <Heading title="Sign Up" description='Sign Up to DevNotes' />
//             <Separator className='mt-4 mb-8' />
//             <div className='max-w-lg mx-auto'>
//                 <Form {...form}>
//                     <form onSubmit={form.control.handleSubmit(onSubmit)} className='flex flex-col gap-4'>
//                         <div className='flex flex-col gap-2 md:gap-4'>
//                             <FormField
//                                 control={form.control}
//                                 name='name'
//                                 render={({ field }) => (
//                                     <FormItem>
//                                         <FormLabel>User Name</FormLabel>
//                                         <FormControl>
//                                             <Input
//                                                 type="text"
//                                                 disabled={loading}
//                                                 placeholder='Username'
//                                                 {...field}
//                                             />
//                                         </FormControl>
//                                         <FormMessage />
//                                     </FormItem>
//                                 )}
//                             />
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
//                                         <FormControl>
//                                             <div className='relative'>
//                                                 <Input
//                                                     type={showPassword ? 'text' : 'password'}
//                                                     disabled={loading}
//                                                     placeholder='Password'
//                                                     {...field}
//                                                     className='pr-10'
//                                                 />
//                                                 <button type="button" disabled={loading} className='absolute inset-y-0 grid place-items-center right-5 opacity-80 focus:opacity-100' onClick={() => toggleview("pass")}>
//                                                     <EyeOff size={20} className={`${loading ? "text-input" : "text-foreground"} absolute transition-all duration-200 ${showPassword ? "scale-100" : "scale-0"}`} />
//                                                     <Eye size={20} className={`${loading ? "text-input" : "text-foreground"} absolute transition-all duration-200 ${!showPassword ? "scale-100" : "scale-0"}`} />
//                                                 </button>
//                                             </div>
//                                         </FormControl>
//                                         <FormMessage />
//                                     </FormItem>
//                                 )}
//                             />
//                             <FormField
//                                 control={form.control}
//                                 name='cpassword'
//                                 render={({ field }) => (
//                                     <FormItem>
//                                         <FormLabel>Confirm Password</FormLabel>
//                                         <FormControl>
//                                             <div className='relative'>
//                                                 <Input
//                                                     type={showConfirmPassword ? 'text' : 'password'}
//                                                     disabled={loading}
//                                                     placeholder='Confirm Password'
//                                                     {...field}
//                                                     className='pr-10'
//                                                 />
//                                                 <button type="button" disabled={loading} className='absolute inset-y-0 grid place-items-center right-5 opacity-80 focus:opacity-100' onClick={() => toggleview("cpass")}>
//                                                     <EyeOff size={20} className={`${loading ? "text-input" : "text-foreground"} absolute transition-all duration-200 ${showConfirmPassword ? "scale-100" : "scale-0"}`} />
//                                                     <Eye size={20} className={`${loading ? "text-input" : "text-foreground"} absolute transition-all duration-200 ${!showConfirmPassword ? "scale-100" : "scale-0"}`} />
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
//                                     SignUp
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
//                                 <p className='flex items-center text-base sm:text-lg text-accent-foreground/50 text- '>
//                                     <span>Have an Accout ?</span>
//                                     <Link to={loading ? "/signup" : "/login"} className={`'pb-[2px] ml-2 text-sm sm:text-base border-b border-b-current ${loading ? "text-input" : "text-accent-foreground/90 hover:text-accent-foreground"}`}>Log in now!</Link>
//                                 </p>
//                             </div>
//                         </div>
//                     </form>
//                 </Form>
//             </div>
//         </div>
//     )
// }

// export default SignUpForm






// import React, { useState } from "react";
// import axios, { AxiosError } from "axios";
// import { useNavigate } from "react-router-dom";

// export default function SignUpForm() {
//   const [form, setForm] = useState({
//     name: "",
//     dob: "",
//     email: "",
//     password: "",
//     otp: "",
//   });
//   const [otpSent, setOtpSent] = useState(false);
//   const navigate = useNavigate();  // ✅ react-router navigation

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const requestOtp = async () => {
//     try {
//       await axios.post("http://localhost:5000/api/auth/request-otp", {
//         email: form.email,
//       });
//       setOtpSent(true);
//       alert("OTP sent to your email");
//     } catch (error) {
//       const err = error as AxiosError<{ error: string }>;
//       alert(err.response?.data?.error || "Error sending OTP");
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/api/auth/createuser", form);
//       alert("User created successfully!");
//       navigate("/home");   // ✅ redirect to home page
//     } catch (error) {
//       const err = error as AxiosError<{ error: string }>;
//       alert(err.response?.data?.error || "Error creating user");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="name" placeholder="Your Name" onChange={handleChange} />
//       <input type="date" name="dob" onChange={handleChange} />
//       <input type="email" name="email" placeholder="Email" onChange={handleChange} />
//       <input type="password" name="password" placeholder="Password" onChange={handleChange} />

//       {otpSent ? (
//         <>
//           <input type="text" name="otp" placeholder="Enter OTP" onChange={handleChange} />
//           <button type="submit">Sign Up</button>
//         </>
//       ) : (
//         <button type="button" onClick={requestOtp}>Get OTP</button>
//       )}
//     </form>
//   );
// }







// import React, { useState } from "react";
// import axios, { AxiosError } from "axios";
// import { useNavigate } from "react-router-dom";

// export default function SignUpForm() {
//   const [form, setForm] = useState({
//     name: "",
//     dob: "",
//     email: "",
//     password: "",
//     otp: "",
//   });
//   const [otpSent, setOtpSent] = useState(false);
//   const navigate = useNavigate();  // ✅ react-router navigation

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const requestOtp = async () => {
//     try {
//       await axios.post("http://localhost:5000/api/auth/request-otp", {
//         email: form.email,
//       });
//       setOtpSent(true);
//       alert("OTP sent to your email");
//     } catch (error) {
//       const err = error as AxiosError<{ error: string }>;
//       alert(err.response?.data?.error || "Error sending OTP");
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/api/auth/createuser", form);
//       alert("User created successfully!");
//       navigate("/home");   // ✅ redirect to home page
//     } catch (error) {
//       const err = error as AxiosError<{ error: string }>;
//       alert(err.response?.data?.error || "Error creating user");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="name" placeholder="Your Name" onChange={handleChange} />
//       <input type="date" name="dob" onChange={handleChange} />
//       <input type="email" name="email" placeholder="Email" onChange={handleChange} />
//       <input type="password" name="password" placeholder="Password" onChange={handleChange} />

//       {otpSent ? (
//         <>
//           <input type="text" name="otp" placeholder="Enter OTP" onChange={handleChange} />
//           <button type="submit">Sign Up</button>
//         </>
//       ) : (
//         <button type="button" onClick={requestOtp}>Get OTP</button>
//       )}
//     </form>
//   );
// }












// import React, { useState } from "react";
// import axios, { AxiosError } from "axios";
// import { useNavigate } from "react-router-dom";
// import right from "../Logo_Icons/right-column.png";
// import logo from "../Logo_Icons/DevNotes-64.png"; // Uploaded logo

// export default function SignUpForm() {
//   const [form, setForm] = useState({
//     name: "",
//     dob: "",
//     email: "",
//     password: "",
//     otp: "",
//   });
//   const [otpSent, setOtpSent] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const requestOtp = async () => {
//     try {
//       await axios.post("http://localhost:5000/api/auth/request-otp", {
//         email: form.email,
//       });
//       setOtpSent(true);
//       alert("OTP sent to your email");
//     } catch (error) {
//       const err = error as AxiosError<{ error: string }>;
//       alert(err.response?.data?.error || "Error sending OTP");
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/api/auth/createuser", form);
//       alert("User created successfully!");
//       navigate("/home");
//     } catch (error) {
//       const err = error as AxiosError<{ error: string }>;
//       alert(err.response?.data?.error || "Error creating user");
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-50">
      
//       {/* Header Logo */}
//       <div className="w-full flex justify-center md:justify-start mb-6 md:mb-0">
//         <img
//           src={logo}
//           alt="HD Logo"
//           className="h-12 md:h-16"
//         />
//       </div>

//       {/* Left: Form */}
//       <div className="w-full md:w-1/2 max-w-md p-6 md:p-12 bg-white shadow-md rounded-lg">
//         <h1 className="text-2xl md:text-3xl font-bold mb-2 text-center">Sign up</h1>
//         <p className="text-sm md:text-base text-gray-500 text-center mb-6">
//           Sign up to enjoy the features of HD
//         </p>

//         <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             onChange={handleChange}
//             className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="date"
//             name="dob"
//             onChange={handleChange}
//             className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             onChange={handleChange}
//             className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             onChange={handleChange}
//             className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           {otpSent ? (
//             <>
//               <input
//                 type="text"
//                 name="otp"
//                 placeholder="Enter OTP"
//                 onChange={handleChange}
//                 className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
//               >
//                 Sign Up
//               </button>
//             </>
//           ) : (
//             <button
//               type="button"
//               onClick={requestOtp}
//               className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
//             >
//               Get OTP
//             </button>
//           )}
//         </form>

//         <p className="text-sm text-center text-gray-500 mt-4">
//           Already have an account?{" "}
//           <span
//             className="text-blue-600 cursor-pointer"
//             onClick={() => navigate("/login")}
//           >
//             Sign in
//           </span>
//         </p>
//       </div>

//       {/* Right: Image */}
//       <div className="hidden md:block md:w-1/2">
//         <img
//           src={right}
//           alt="Signup Visual"
//           className="w-full h-full object-cover rounded-r-lg"
//         />
//       </div>
//     </div>
//   );
// }










// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import axios, { AxiosError } from "axios";
// import { toast } from "react-hot-toast";
// import right from "../Logo_Icons/right-column.png";
// import logo from "../Logo_Icons/logoH.png"; // Same logo as Login

// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// const HOST = import.meta.env.VITE_HOST;

// export default function SignUpForm() {
//   const [form, setForm] = useState({
//     name: "",
//     dob: "",
//     email: "",
//     password: "",
//     otp: "",
//   });
//   const [otpSent, setOtpSent] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const requestOtp = async () => {
//     try {
//       setLoading(true);
//       await axios.post(`${HOST}/api/auth/request-otp`, { email: form.email });
//       setOtpSent(true);
//       toast.success("OTP sent to your email");
//     } catch (error) {
//       const err = error as AxiosError<{ error: string }>;
//       toast.error(err.response?.data?.error || "Error sending OTP");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       await axios.post(`${HOST}/api/auth/createuser`, form);
//       toast.success("User created successfully!");
//       navigate("/");
//     } catch (error) {
//       const err = error as AxiosError<{ error: string }>;
//       toast.error(err.response?.data?.error || "Error creating user");
//     } finally {
//       setLoading(false);
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
//         <h2 className="text-2xl font-semibold">Sign up</h2>
//         <p className="text-gray-500 mb-6">
//           Create an account to start using HD.
//         </p>

//         {/* Form */}
//         <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
//           <Input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={form.name}
//             onChange={handleChange}
//             disabled={loading}
//             className="h-11"
//           />
//           <Input
//             type="date"
//             name="dob"
//             value={form.dob}
//             onChange={handleChange}
//             disabled={loading}
//             className="h-11"
//           />
//           <Input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={handleChange}
//             disabled={loading}
//             className="h-11"
//           />
//           <Input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={form.password}
//             onChange={handleChange}
//             disabled={loading}
//             className="h-11"
//           />

//           {otpSent ? (
//             <>
//               <Input
//                 type="text"
//                 name="otp"
//                 placeholder="Enter OTP"
//                 value={form.otp}
//                 onChange={handleChange}
//                 disabled={loading}
//                 className="h-11"
//               />
//               <Button
//                 type="submit"
//                 disabled={loading}
//                 className="h-11 bg-blue-600 hover:bg-blue-700"
//               >
//                 Sign Up
//               </Button>

//               {/* Resend OTP */}
//               <Button
//                 type="button"
//                 onClick={requestOtp}
//                 disabled={loading}
//                 variant="outline"
//                 className="h-11 border-blue-600 text-blue-600 hover:bg-blue-50"
//               >
//                 Resend OTP
//               </Button>
//             </>
//           ) : (
//             <Button
//               type="button"
//               onClick={requestOtp}
//               disabled={loading || !form.email}
//               className="h-11 bg-blue-600 hover:bg-blue-700"
//             >
//               Get OTP
//             </Button>
//           )}
//         </form>

//         {/* Always visible login link */}
//         <p className="text-sm mt-6">
//           Already have an account?{" "}
//           <Link to="/login" className="text-blue-600 hover:underline">
//             Sign in
//           </Link>
//         </p>
//       </div>

//       {/* Right Side - Image */}
//       <div className="hidden md:flex md:w-1/2 items-center justify-center">
//         <img
//           src={right}
//           alt="Signup Illustration"
//           className="object-contain w-full h-[80vh] rounded-l-3xl"
//         />
//       </div>
//     </div>
//   );
// }








// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import axios, { AxiosError } from "axios";
// import { toast } from "react-hot-toast";
// import right from "../Logo_Icons/right-column.png";
// import logo from "../Logo_Icons/logoH.png";

// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// const HOST = import.meta.env.VITE_HOST;

// export default function SignUpForm() {
//   const [form, setForm] = useState({
//     name: "",
//     dob: "",
//     email: "",
//     otp: "",
//   });
//   const [otpSent, setOtpSent] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const requestOtp = async () => {
//     try {
//       setLoading(true);
//       await axios.post(`${HOST}/api/auth/request-otp`, { email: form.email });
//       setOtpSent(true);
//       toast.success("OTP sent to your email");
//     } catch (error) {
//       const err = error as AxiosError<{ error: string }>;
//       toast.error(err.response?.data?.error || "Error sending OTP");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       await axios.post(`${HOST}/api/auth/createuser`, form);
//       toast.success("User created successfully!");
//       navigate("/");
//     } catch (error) {
//       const err = error as AxiosError<{ error: string }>;
//       toast.error(err.response?.data?.error || "Error creating user");
//     } finally {
//       setLoading(false);
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
//         <h2 className="text-2xl font-semibold">Sign up</h2>
//         <p className="text-gray-500 mb-6">
//           Create an account to start using HD.
//         </p>

//         {/* Form */}
//         <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
//           <Input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={form.name}
//             onChange={handleChange}
//             disabled={loading}
//             className="h-11 focus:border-blue-600 hover:border-blue-600"
//           />
//           <Input
//             type="date"
//             name="dob"
//             value={form.dob}
//             onChange={handleChange}
//             disabled={loading}
//             className="h-11 focus:border-blue-600 hover:border-blue-600"
//           />
//           <Input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={handleChange}
//             disabled={loading}
//             className="h-11 focus:border-blue-600 hover:border-blue-600"
//           />

//           {otpSent ? (
//             <>
//               <Input
//                 type="text"
//                 name="otp"
//                 placeholder="Enter OTP"
//                 value={form.otp}
//                 onChange={handleChange}
//                 disabled={loading}
//                 className="h-11 focus:border-blue-600 hover:border-blue-600"
//               />
//               <Button
//                 type="submit"
//                 disabled={loading}
//                 className="h-11 bg-blue-600 hover:bg-blue-700 text-white"
//               >
//                 Sign Up
//               </Button>
//               <Button
//                 type="button"
//                 onClick={requestOtp}
//                 disabled={loading}
//                 variant="outline"
//                 className="h-11 border-blue-600 text-blue-900 hover:bg-blue-50"
//               >
//                 Resend OTP
//               </Button>
//             </>
//           ) : (
//             <Button
//               type="button"
//               onClick={requestOtp}
//               disabled={loading || !form.email}
//               className="h-11 bg-blue-600 hover:bg-blue-700 text-white"
//             >
//               Get OTP
//             </Button>
//           )}
//         </form>

//         {/* Always visible login link */}
//         <p className="text-sm mt-6">
//           Already have an account?{" "}
//           <Link to="/login" className="text-blue-600 hover:underline">
//             Sign in
//           </Link>
//         </p>
//       </div>

//       {/* Right Side - Image */}
//       <div className="hidden md:flex md:w-1/2 items-center justify-center">
//         <img
//           src={right}
//           alt="Signup Illustration"
//           className="object-contain w-full h-[80vh] rounded-l-3xl"
//         />
//       </div>
//     </div>
//   );
// }





















import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { toast } from "react-hot-toast";
import right from "../Logo_Icons/right-column.png";
import logo from "../Logo_Icons/logoH.png";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "@/firebase.ts";

const HOST = import.meta.env.VITE_HOST;

export default function SignUpForm() {
  const [form, setForm] = useState({
    name: "",
    dob: "",
    email: "",
    otp: "",
  });
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Request OTP
  const requestOtp = async () => {
    try {
      setLoading(true);
      await axios.post(`${HOST}/api/auth/request-otp`, { email: form.email });
      setOtpSent(true);
      toast.success("OTP sent to your email");
    } catch (error) {
      const err = error as AxiosError<{ error: string }>;
      toast.error(err.response?.data?.error || "Error sending OTP");
    } finally {
      setLoading(false);
    }
  };

  // Submit signup with OTP
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post(`${HOST}/api/auth/createuser`, form);
      toast.success("User created successfully!");
      navigate("/");
    } catch (error) {
      const err = error as AxiosError<{ error: string }>;
      toast.error(err.response?.data?.error || "Error creating user");
    } finally {
      setLoading(false);
    }
  };

  // Google Signup
  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      const token = await result.user.getIdToken();

      const res = await axios.post(`${HOST}/api/auth/google-signup`, { token });
      localStorage.setItem("token", res.data.authToken);

      toast.success("Account created with Google");
      navigate("/");
    } catch {
      toast.error("Google signup failed");
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
        <h2 className="text-2xl font-semibold">Sign up</h2>
        <p className="text-gray-500 mb-6">
          Create an account to start using HD.
        </p>

        {/* Form */}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            disabled={loading}
            className="h-11 focus:border-blue-600 hover:border-blue-600"
          />
          <Input
            type="date"
            name="dob"
            value={form.dob}
            onChange={handleChange}
            disabled={loading}
            className="h-11 focus:border-blue-600 hover:border-blue-600"
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            disabled={loading}
            className="h-11 focus:border-blue-600 hover:border-blue-600"
          />

          {otpSent ? (
            <>
              <Input
                type="text"
                name="otp"
                placeholder="Enter OTP"
                value={form.otp}
                onChange={handleChange}
                disabled={loading}
                className="h-11 focus:border-blue-600 hover:border-blue-600"
              />
              <Button
                type="submit"
                disabled={loading}
                className="h-11 bg-blue-600 hover:bg-blue-700 text-white"
              >
                Sign Up
              </Button>
              <Button
                type="button"
                onClick={requestOtp}
                disabled={loading}
                variant="outline"
                className="h-11 border-blue-600 text-blue-900 hover:bg-blue-50"
              >
                Resend OTP
              </Button>
            </>
          ) : (
            <Button
              type="button"
              onClick={requestOtp}
              disabled={loading || !form.email}
              className="h-11 bg-blue-600 hover:bg-blue-700 text-white"
            >
              Get OTP
            </Button>
          )}
        </form>

        {/* Always visible login link */}
        <p className="text-sm mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Sign in
          </Link>
        </p>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-2 text-gray-500 text-sm">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Google Signup */}
        <Button
          onClick={handleGoogleSignup}
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
          alt="Signup Illustration"
          className="object-contain w-full h-[80vh] rounded-l-3xl"
        />
      </div>
    </div>
  );
}
