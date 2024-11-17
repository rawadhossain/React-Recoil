import { atomFamily } from 'recoil';
import { TODOS } from './todos';
import { selector } from 'recoil';

//Here, atomsFamily is a function that returns an atom, which is why we have to call the atomFamily(id) in App.jsx currenttodo
export const todosAtomFamily = atomFamily({
    //atomFamily lets you create multiple atoms dynamically
    key: 'todosAtomFamily',
    default: (id) => {
        return TODOS.find((x) => x.id === id);
    }, //if same atom(id) asked multiple times, first time "return TODOS.find((x) => x.id === id);" will run, eventually it's a cached value
});

/*
    //when a single atom was created

export const todoAtom = atom({
    key: "todoAtom",
    default: {
        id: 1,
        title: "Go to Gym",
        description: "Hit the gym from 7-9"
    }
});
*/
