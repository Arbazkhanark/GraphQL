import { gql, useQuery } from "@apollo/client";

const query = gql`
  query GetTodosWithUser {
    getTodos {
      id
      title
      completed
      user {
        id
        name
      }
    }
  }
`;

const App = () => {
  const { data, loading } = useQuery(query);

  if (loading) return <h1>Loading....</h1>;
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Todo ID
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Completed
              </th>
              <th scope="col" className="px-6 py-3">
                User ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
            </tr>
          </thead>
          <tbody>
          {data.getTodos.map((todo)=>{
            return (
              <tr key={todo.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {todo.id}
              </th>
              <td className="px-6 py-4">{todo.title}</td>
              <td className="px-6 py-4">{todo.completed ? 'Completed':'Incomplete'}</td>
              <td className="px-6 py-4">{todo.user.id}</td>
              <td className="px-6 py-4 text-right">{todo.user.name}</td>
            </tr>
            )
          })}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
