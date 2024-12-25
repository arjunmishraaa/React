import Card from "./Card";

export default function Cards({ users,handleRemove }) {
  return (
    <div className="w-full max-h-96 overflow-auto p-4 flex justify-center gap-5 flex-wrap">
      {
        users.map((user, index) => {
          // Updated to prefer using user.id if available, for better performance
          return <Card user={user} key={user.id || index}  handleRemove={handleRemove}  id={index} />;  // Use user.id as the key if available
        })
      }
    </div>
  );
}
