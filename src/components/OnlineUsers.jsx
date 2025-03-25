function Users({ data }) {
  return (
    <div className=" h-screen w-54 hidden shrink-0 overflow-x-auto p-2 pt-5 dark:bg-opacity-10 lg:block">
      <h3 className="mb-3 text-3xl font-black">Users:</h3>
      <ul className="flex flex-col gap-3">
        {data &&
          data.map((u) => {
            return (
              <li
                key={u.id}
                className="text-md  btn-block h-auto justify-start btn btn-outline px-1 py-2  "
              >
                <img className="w-8 h-10 rounded-full" src={u.photoURL} />
                <span className="mr-auto">{u.displayName}</span>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Users;
