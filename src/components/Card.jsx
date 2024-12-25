export default function Card({ user,handleRemove,id }) {
    return (
      <div className="w-52 h-full bg-zinc-100 p-2 flex flex-col items-center">
        <div className="image w-[3vw] h-[3vw] rounded-full bg-zinc-200 overflow-hidden">
          {/* Fallback to a default image if user.image is not provided */}
          <img src={user.image || 'default-image-url.jpg'} alt="User" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-xl font-semibold mt-1">{user.name || 'No Name'}</h1>
        <h4 className="opacity-60 font-semibold text-xs">{user.email || 'No Email'}</h4>
        <p className="mt-2 text-center text-xs font-semibold leading-1 tracking-tight">
          {user.bio || 'No bio available'}  {/* Display 'No bio available' if user.bio is not available */}
        </p>
        <button  onClick={()=>handleRemove(id)} className="mt-4 p-2 px-3 py-1 bg-red-600 text-xs rounded-md font-semibold text-white"   >
          Remove it
        </button>
      </div>
    );
  }
  