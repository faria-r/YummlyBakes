import { connectStorageEmulator } from 'firebase/storage';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import icon from '../../assets/toast.gif'
import { AuthContext } from '../../Context/AuthProvider';
import useAxiosPublic from '../../CustomHooks/useAxiosPublic';
import toast, { Toaster } from 'react-hot-toast';
const AddRecipe = () => {
  const axiosPublic = useAxiosPublic();
  const imageHostKey = import.meta.env.VITE_IMAGE_HOST_KEY;
  const imageHostingAPi = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    const {user} = useContext(AuthContext);
  const {register, handleSubmit} = useForm();
  const handleAddRecipe = async (data)=>{
    event.preventDefault();
    console.log(data)
    const imageFile = {image: data.photo[0]}
    const res = await axiosPublic.post(imageHostingAPi,imageFile,{
      headers:{
        'content-Type':'multipart/form-data'
      }
    });
    console.log(res.data);
    if(res.data.success){
      const recipeInfo = {
        name:data.name,
        authorEmail:user?.email,
        details:data.details,
        country:data.country,
        category:data.category,
        video:data.video,
        photo:res.data.data.display_url,
        watchCount:0,
        purchased_by:[]
    
    }
    console.log(recipeInfo);
    const recipeAdd = await axiosPublic.post('/allRecipe',recipeInfo)
    if(recipeAdd.data.insertedId){
      const notify = ()=>{
        toast.success('Successfully Added!');
      }
     notify();
     
    }
    }


  }
    return (
        <div className='mt-36'>
        <div className='flex justify-center items-center'>
            <div>
<img className='w-16 mr-4' src={icon} alt="" />
            </div>
<div>
<h2 className='text-center font-mono text-xl my-4'>Enrich Our Kitchen <br /><span className=' font-bold text-yellow-500 mb-4'>With New Recipe</span></h2>
</div>
        </div>
            

           <form className=" grid lg:grid-cols-3 gap-4 p-8 w-[70vw] mx-auto border-[1px] border-yellow-500" onSubmit={handleSubmit(handleAddRecipe)}>
 
           <div>
          <input 
            className="w-full my-2 p-[8px] border"
            type="text"
            required
            {...register("name")}
            placeholder="Recipe Name"
          />
        </div>
      <select className='select select-bordered p-[1px] rounded-none mt-2 max-w-xs' {...register("category", { required: true })}>
        <option value="">Category</option>
        <option value="Dessert">Dessert</option>
        <option value="Snacks">Snacks</option>
        <option value="Salads">Salads</option>
        <option value="Appetizer">Appetizer</option>
      </select>
      <div>
      <textarea required  className="w-full my-2 border"  {...register("details")} placeholder="Recipe Details" />
        </div>
     
      <div>
          <input
            className="w-full file-input file-input-warning my-2 p-[8px] border"
            type="file"
            required
            {...register("photo")}
            placeholder="Recipe Photo"
          />
        </div>
      <div>
          <input
            className="w-full my-2 p-[8px] border"
            type="text"
            required
            {...register("video")}
            placeholder="Youtube Video Embeded Links"
          />
        </div>
      <div>
          <input
            className="w-full my-2 p-[8px] border"
            type="text"
            required
            {...register("country")}
            placeholder="Country"
          />
        </div>
      <input
          className="btn col-span-3 items-center w-[15%] mx-auto bg-yellow-500 text-white px-16 py-2"
          type="submit"
        />
         <Toaster></Toaster>
    </form>
        </div>
    );
};

export default AddRecipe;