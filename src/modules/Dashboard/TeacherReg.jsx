import axios from "axios"
import {useForm} from 'react-hook-form'

export default function TeacherReg() {
    const {register,handleSubmit,formState: {error}} = useForm();

   const submitdata = (d)=>{
        axios.post("http://localhost:5400/Teachers",d).then((s)=>{
            console.log(s);
            alert("data has been submited")
            
        })
   }
       
    return (
        <div className="min-h-screen flex justify-center items-center">
            <form
                className=" bg-slate-200 text-purple-800 p-20 rounded-lg flex-col items-center shadow-md w-[800px]">
                <h2 className="text-3xl font-bold text-center mb-9">Registration Form</h2>
                <div className=" flex gap-5 items-center">
                <div className="">
                    <label >First Name : </label>
                    <input type="text" name="" className="border p-2 rounded"{...register("Firstname", {required:true})}/>
                </div><br />
                <div className="">
                    <label htmlFor="">Last Name : </label>
                    <input type="text" className="border p-2 rounded" {...register("Lastname" , {required:true})}/>
                </div> </div><br />
                <div className="flex items-center gap-4">
                    <label >Dob :</label>
                    <input type="date" className='border p-2 rounded' {...register("date of birth" ,{required:true})}/>
                </div><br />
                <div className="flex gap-5">
                    <label htmlFor="">Gender :</label>
                    <input type="radio" name='gender' value="Male" {...register("gender" , {required:true})}/>Male
                    <input type="radio" name='gender' value="Female" {...register("gender" ,{required:true})} />Female
                </div><br />
                <div className="flex gap-8">
                    <label>Email :</label>
                    <input type="email" name="" id="" placeholder="Email" className="w-80 border p-2 rounded" {...register("Email" ,{required:true})} />
                </div> <br />
                <div className="flex gap-3">
                    <label>Address :</label>
                    <input type="text" className='w-80 h-20 border p-2 rounded' {...register("Address" ,{required:true})}/>
                </div><br />
                <div className="flex gap-10 items-center">
                    <label>City :</label>
                    <input type="text" className='border p-2 rounded' {...register("City" ,{required:true})} />
                </div><br />
                <div className="">
                    <label>State :</label>
                    <select
                        className="w-full border p-2 rounded" >
                        <option value="">Choose a City</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Noida">Uttar Pardesh</option>
                        <option value="Gurgaon">Gurgaon</option>
                        <option value="Jaipur">Jaipur</option>
                    </select>
                </div><br />
                <div className="flex gap-3 items-center">
                    <label>Zip Code :</label>
                    <input type="number" className='border p-2 rounded' {...register("zip", {required:true})} />
                </div><br />
                <div className="flex gap-8 items-center">
                    <label>phone : </label>
                    <input type="number" className='border p-2 round'{...register("number" ,{required:true})} />
                </div><br />

                <button type="submit" className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-900" value="add" onClick={handleSubmit(submitdata)}>Register</button>
            </form>
        </div>
    )
}
