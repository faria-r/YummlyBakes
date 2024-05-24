import { connectStorageEmulator } from 'firebase/storage';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddRecipe = () => {
  const {register, handleSubmit} = useForm();
  const handleAddRecipe = ()=>{
// const recipeInfo = {
//     name:data.name
// }
  }
    return (
        <div className='mt-36'>
           <form onSubmit={handleSubmit(handleAddRecipe)}>
 
      <input {...register("firstName")} placeholder="First name" />
      <select {...register("category", { required: true })}>
        <option value="">Select...</option>
        <option value="A">Option A</option>
        <option value="B">Option B</option>
      </select>
      <textarea {...register("aboutYou")} placeholder="About you" />
      <p></p>
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddRecipe;