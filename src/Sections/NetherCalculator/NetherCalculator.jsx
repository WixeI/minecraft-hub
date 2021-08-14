import "./NetherCalculator.css"

export function NetherCalculator () {
    let classeManeira = "NetherCalculator"

    function handleClick () {
        console.log("Clicou mesmo olha lá 😂😂😁")
    }

    return (
        <div className={classeManeira}>
            <h1>Hello Warudo</h1>

            <button onClick={handleClick}>Clique Aqui meu Chapa</button>
        </div>
    );
}
