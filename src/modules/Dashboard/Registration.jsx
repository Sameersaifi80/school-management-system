import axios from "axios"
import {useForm} from 'react-hook-form'

export default function Registration() {
    const {register,handleSubmit,formState: {error}} = useForm();

   const submitdata = (d)=>{
        axios.post("http://localhost:5400/students",d).then((s)=>{
            console.log(s);
            alert("data has been submited")
            
        })
   }
       
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-500 p-5">
      <form
        onSubmit={handleSubmit(submitdata)}
        className="bg-white w-full max-w-4xl p-8 rounded-lg shadow-2xl"
      >
        <h2 className="text-3xl font-bold mb-8 border-b-2 border-purple-500 inline-block">
          Registration
        </h2>

        {/* First Name & Last Name */}
        <div className="grid md:grid-cols-2 gap-6 mb-5">
          <div>
            <label className="block mb-2 font-medium">First Name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="w-full border p-3 rounded-md"
              {...register("Firstname", { required: true })}
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Last Name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              className="w-full border p-3 rounded-md"
              {...register("Lastname", { required: true })}
            />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid md:grid-cols-2 gap-6 mb-5">
          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border p-3 rounded-md"
              {...register("Email", { required: true })}
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Phone Number</label>
            <input
              type="number"
              placeholder="Enter your phone number"
              className="w-full border p-3 rounded-md"
              {...register("number", { required: true })}
            />
          </div>
        </div>

        {/* DOB & City */}
        <div className="grid md:grid-cols-2 gap-6 mb-5">
          <div>
            <label className="block mb-2 font-medium">Date of Birth</label>
            <input
              type="date"
              className="w-full border p-3 rounded-md"
              {...register("dob", { required: true })}
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">City</label>
            <input
              type="text"
              placeholder="Enter your city"
              className="w-full border p-3 rounded-md"
              {...register("City", { required: true })}
            />
          </div>
        </div>

        {/* Gender */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Gender</h3>

          <div className="flex flex-wrap gap-8">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="Male"
                {...register("gender", { required: true })}
              />
              Male
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="Female"
                {...register("gender", { required: true })}
              />
              Female
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="Other"
                {...register("gender", { required: true })}
              />
              Prefer not to say
            </label>
          </div>
        </div>

        {/* Address */}
        <div className="mb-5">
          <label className="block mb-2 font-medium">Address</label>
          <textarea
            rows="3"
            placeholder="Enter your address"
            className="w-full border p-3 rounded-md"
            {...register("Address", { required: true })}
          ></textarea>
        </div>

        {/* State & Zip */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block mb-2 font-medium">State</label>
            <select
              className="w-full border p-3 rounded-md"
              {...register("State", { required: true })}
            >
              <option value="">Select State</option>
              <option value="Delhi">Delhi</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Haryana">Haryana</option>
              <option value="Rajasthan">Rajasthan</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">Zip Code</label>
            <input
              type="number"
              placeholder="Enter zip code"
              className="w-full border p-3 rounded-md"
              {...register("zip", { required: true })}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-md text-white font-semibold text-lg bg-gradient-to-r from-sky-400 to-purple-500 hover:opacity-90 duration-300"
        >
          Register
        </button>
      </form>
    </div>
  );
}