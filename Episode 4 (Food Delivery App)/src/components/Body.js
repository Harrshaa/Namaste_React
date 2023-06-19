import resList from "../utils/mockData";
import RestaurentCard from "./Restaurentcard";

const Body =()=>{
    return(
         <div className='body'>
            <div className='Search'>Search</div>
            <div className='res-container'>
                {/* <RestaurentCard resName="Meghana Foods" cuisine="Biryani,North Indian,Asian" />
                <RestaurentCard resName="KFC" cuisine="Biryani,Continental,American"/> */}
                
                {resList.map((restaurent)=>(
                    <RestaurentCard key={restaurent.data.id} resData ={restaurent} />
                ))}
                
                
            </div>

         </div>
    );
 }

 export default Body;