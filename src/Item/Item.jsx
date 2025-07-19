import './Item.css'
export default function Item ({src}) {
return (
    <>    

    <div className="card" id = "Food">
        <button className="Item">
            <img src = {`${src}`} alt = "dish" ></img>
        </button>
        
    </div>
    </>

);
}
