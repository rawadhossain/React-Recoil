import { atom, selector, useRecoilValueLoadable } from 'recoil';
import axios from 'axios';

const todosAtomFamily = atomFamily({
    key: 'todosAtomFamily',
    default: selectorFamily({
        // Recoil selector for fetching "to-dos"
        key: 'todoSelectorFamily',
        get:
            (id) =>
            async ({ get }) => {
                await new Promise((r) => setTimeout(r, 5000));
                const res = await axios.get(
                    `https://sum-server.100xdevs.com/todo?id=${id}`,
                );
                return res.data.todo; // Return the list of todos
            },
    }),
});

function TodoList({ id }) {
    const todosLoadable = useRecoilValueLoadable(todosAtomFamily(id)); // Using the hook

    if (todosLoadable.state === 'loading') {
        return <p>Loading...</p>; // Handle loading state
    }

    if (todosLoadable.state === 'hasError') {
        return <p>Error loading todos!</p>; // Handle error state
    }

    // If we have the value, render the list
    return (
        <>
            {todo.contents.title}
            {todo.contents.description}
            <br />
        </>
    );
}

export default TodoList;
