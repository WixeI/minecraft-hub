import "./NetherCalculator.css"

export function NetherCalculator () {
    let classeManeira = "NetherCalculator"

    function handleClick () {
        console.log("Clicou mesmo olha lรก ๐๐๐")
    }

    return (
        <div className={classeManeira}>
            <h1>Hello Warudo</h1>

            <button onClick={handleClick}>Clique Aqui meu Chapa</button>
        </div>
    );
}
