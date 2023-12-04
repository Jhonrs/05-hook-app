import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./index";



export const MultipleCustomHooks = () => {


    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://api.adviceslip.com/advice/${ counter }`);
    
    const { slip: { slip_id, advice } } = 
        !!data ? data : { slip: { slip_id:'', advice:'' }};
       

  return (
        <>
            <h1>Breakingbad Quotes</h1>
            <hr />


            {
            ( isLoading ) 
                ? <LoadingQuote />
                :  <Quote advice={advice} />
            }
        
        <button className="btn btn-primary" 
        disabled = {isLoading}
        onClick={ () => increment(1) } >Next Quote</button>

        </>
    )
}
