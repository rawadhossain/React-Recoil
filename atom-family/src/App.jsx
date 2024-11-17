import './App.css';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {
    return (
        <RecoilRoot>
            <Todo id={1} />
            <Todo id={2} />
        </RecoilRoot>
    );
}

function Todo({ id }) {
    // const [todo, setTodo] = useRecoilState(todoAtom(id)); ~> old approach for single atom

    const currenttodo = useRecoilValue(todosAtomFamily(id));

    return (
        <>
            {currenttodo.title}
            {currenttodo.description}
            <br />
        </>
    );
}

export default App;
