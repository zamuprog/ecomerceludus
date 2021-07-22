import ItemList from '../ItemList/ItemList'
import './Home.css'

const Home =({titulo})=>{

    return(
        <>
            <h1>{titulo}</h1>
            <div className="mt-5">
            <ItemList />
            </div>
        </>    
    )
}
export default Home