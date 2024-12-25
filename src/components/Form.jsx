import {useForm} from 'react-hook-form';

export default function Form({handleSubmitData}){
   let{register,handleSubmit,reset}= useForm();
   const handleFormSubmitData=(data)=>{
        handleSubmitData(data);
        reset();
   }
    return(
         <div className="m-10 flex justify-center gap-10 ">
            <form onSubmit={handleSubmit(handleFormSubmitData)} className="flex gap-10">
                <input {...register('name')} className="rounded-md px-2 py-1 text-base font-semibold outline-none"  type="text" placeholder="name"/>
                <input {...register('email')} className="rounded-md px-2 py-1 text-base font-semibold outline-none" type="text" placeholder="email"/>
                <input {...register('image')} className="rounded-md px-2 py-1 text-base font-semibold outline-none" type="text" placeholder="image url"/>
                <input className="rounded-md px-5 py-1 bg-blue-500 text-white font-semibold"  type="submit" />
            </form>
         </div>
    )
}