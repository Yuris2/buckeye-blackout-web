import Credits from "./Credits";

function Menu() {
    return (

        <div className="Menu"> {/* Parent Function */}
        <div className = "Title">
            <h1> Buckeye Blackout</h1>
        </div>

        <div className="navigationBar">
            <button> Play Game </button>
            <button> Stats </button>
            <button onclick = {Credits}> Credits </button>
            <button> How to Play </button>
        </div>
            
        </div>
    );  
}

export default Menu;