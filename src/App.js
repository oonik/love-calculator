import { useState } from "react";
import { useForm } from "react-hook-form";
import bg from './assest/photo-1615966650071-855b15f29ad1.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [love, setLove] = useState(null);
  const { register, formState: { errors }, handleSubmit } = useForm();

  const handleLoveForm = data =>{
    fetch("http://localhost:5000/name", {
      method: "POST",
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      if(data.acknowledged){
         setLove(Math.ceil(Math.random() * 100));
      }
      if(love < 10){
        toast.success(' আমি তোমাকে তেমন ভালোবাসি না, কিন্তু ভালো লাগে', {
          position: "top-center",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
         });
         return;
     } else if(love < 20){
        toast.success(' আমার তোমাকে কিছুটা ভালো লাগে', {
          position: "top-center",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
         });
         return;
     } else if(love < 30){
        toast.success('আমার তোমার সাথে একদিন ঘুড়তে যাওয়ার খুবি ইচ্ছা', {
          position: "top-center",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
         });
         return;
     } else if(love < 40){
        toast.success(' চল না ঘুরে আসি অজানাতে যেখানে নদী এসে থেমে গেছে', {
          position: "top-center",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
         });
         return;
     } else if(love < 50){
        toast.success('আমি তোমাকে এতটাই ভালোবাসি পালিয়ে বিয়ে করতে ইচ্ছে করছে', {
          position: "top-center",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
         });
         return;
     } else if(love < 60){
        toast.success(' চল বিকালে কোনো এক কফি শপে বৃষ্টি আসলে ভিজবো দুজন একসাথে', {
          position: "top-center",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
         });
         return;
     } else if(love > 70){
        toast.success(' সামনে শীত আসছে তোমাকে আমার ভীষন প্রয়োজন', {
          position: "top-center",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
         });
         return;
     } else if(love > 80){
        toast.success(' তোমাকে আমার খুবি ভালো লাগে কিন্তু কাছে গেলে বুক ধাক ধাক করে', {
          position: "top-center",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
         });
         return;
     } else if(love < 90){
        toast.success(' তোমকে নিয়ে ভেসে যেতে চাই স্বপ্নের রাজ্যে', {
          position: "top-center",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
         });
         return;
     } else {
       toast.success(' চল বিয়ে করি আজই দুজনে', {
        position: "top-center",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
         });
     };
   
    });
  }; 

  return (
    <div className="">
      <div className="hero min-h-screen" style={{ backgroundImage: `url(${bg})` }}>
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="lg:w-1/2">
            <h1 className="mb-5 text-yellow-400 text-3xl font-bold">এইবার আপনি ও জেনে নিন আপনার প্রিয় মানুষটি আপনাকে কতটুকু ভালোবাসে ||</h1>
            <form onSubmit={handleSubmit(handleLoveForm)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">আপনার নাম লিখুন ইংরেজিতে</span>
                </label>
                <input type="text" {...register("firstName", {required: "Your name is required", minLength:{value:3, message:"Name length minimum 3 characters"}})} placeholder="your name" className="input text-black input-bordered input-secondary" />
                {errors?.firstName && <p className="text-red-500 mt-1">{errors.firstName?.message}</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">আপনার প্রিয় মানুষটির নাম লিখুন ইংরেজিতে</span>
                </label>
                <input type="text" {...register("lastName", {required: "Love name is required", minLength:{value:3, message:"Name length minimum 3 characters"}})} placeholder="Love name" className="input text-black input-bordered input-secondary" />
                {errors?.lastName && <p className="text-red-500 mt-1">{errors.lastName?.message}</p>}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-secondary" type="submit">যাচাই করুন</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
