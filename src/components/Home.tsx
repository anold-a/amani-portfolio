import { Button } from "./ui/button";
import { Link } from "react-router-dom";



const Home = () => {
    return (
        <>
            <div className="mx-auto flex  p-6">
            <div className="flex gap-40">
                    <img src="/coding.png" width={180} className="border rounded-md mr-3 " />
                <div>  
                <h1 className="text-5xl font-bold" >Transform Your Ideas Into Reality, 😊 </h1> 
                        <p className="text-2xl">Professional software development services to bring your ideas to life</p>
                        <Link to="/explore">
                        <Button variant="ghost" className="bg-blue-300 mt-4 hover:bg-blue-500 text-white text-xl">Get Started</Button>
                        </Link>
                       
                        </div>  
                </div>
            </div>
            
            <div>
                <h1 className="text-center font-serif text-2xl">MY SERVICES</h1>
              
            </div>
        
        </>
    )
}

export default Home;