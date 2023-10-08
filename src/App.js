import { useForm } from "react-hook-form"

function App() {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const handleLoveForm = data =>{
    console.log(data)
  }

  return (
    <div className="">
      <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="lg:w-1/2">
            <h1 className="mb-5 text-yellow-400 text-3xl font-bold">এইবার আপনি ও জেনে নিন আপনার প্রিয় মানুষটি আপনাকে কতটুকু ভালোবাসে ||</h1>
            <form onSubmit={handleSubmit(handleLoveForm)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">আপনার নাম লিখুন ইংরেজিতে</span>
                </label>
                <input type="text" {...register("firstName", {required: "Your name is required", minLength:{value:3, message:"Name length minimum 3 characters"}})} placeholder="your name" className="input input-bordered input-secondary" />
                {errors?.firstName && <p className="text-red-500 mt-1">{errors.firstName?.message}</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">আপনার প্রিয় মানুষটির নাম লিখুন ইংরেজিতে</span>
                </label>
                <input type="text" {...register("lastName", {required: "Love name is required", minLength:{value:3, message:"Name length minimum 3 characters"}})} placeholder="Love name" className="input input-bordered input-secondary" />
                {errors?.lastName && <p className="text-red-500 mt-1">{errors.lastName?.message}</p>}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-secondary" type="submit">যাচাই করুন</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
