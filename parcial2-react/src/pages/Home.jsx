import { useEffect, useState } from "react"; 
import { getCountries } from "../services/api"; 
import CountryGrid from "../components/CountryGrid"; 

const Home = () => { 
    const [countries, setCountries] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 
    
    useEffect(() => { 
        const fetchData = async () => { 
        try { 
            const data = await getCountries(); 
            setCountries(data); } 
        
        catch (err) { 
            console.error(err); 
            setError("Error al cargar datos"); } 
            
        finally { 
            setLoading(false); } };
            
        
        fetchData(); }, []); 
        
        if (loading) return <p>Cargando...</p>; 
        if (error) return <p>{error}</p>; 
        
        return <CountryGrid countries={countries} />; }; 
        
export default Home;