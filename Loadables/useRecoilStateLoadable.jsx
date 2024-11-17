import { atom, selector, useRecoilStateLoadable } from 'recoil';
import axios from 'axios';

// Recoil atom for managing a specific to-do
const todoAtom = atom({
    key: 'todoAtom',
    default: selector({
        key: 'todoSelector',
        get: async () => {
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/todos/1',
            );
            return response.data; // Return a single to-do item
        },
    }),
});

function TodoDetails() {
    const [todoLoadable, setTodoLoadable] = useRecoilStateLoadable(todoAtom); // Using the hook

    if (todoLoadable.state === 'loading') {
        return <p>Loading...</p>; // Handle loading state
    }

    if (todoLoadable.state === 'hasError') {
        return <p>Error loading to-do!</p>; // Handle error state
    }

    const todo = todoLoadable.contents; // Access the value if available

    // Function to update the to-do's title
    const updateTodo = () => {
        setTodoLoadable({ ...todo, title: 'Updated Title!' });
    };

    return (
        <div>
            <h3>{todo.title}</h3>
            <button onClick={updateTodo}>Update Title</button>
        </div>
    );
}

export default TodoDetails;
