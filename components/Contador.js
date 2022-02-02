const Contador = () => {
    const [contador, setContador] = React.useState(0);
    const actionIncrementar = () => setContador(contador + 1);
    const actionDecrementar = () => setContador(contador - 1);

    return (
        <div>
            <h1>Contador: {contador}</h1>
            <hr />
            <button onClick={actionIncrementar}>+ Incrementar</button>
            <button onClick={actionDecrementar}>- Decrementar</button>
        </div>
    );
}