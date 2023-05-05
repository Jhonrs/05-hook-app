import { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({ advice }) => {

    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

    useLayoutEffect(() => {
      /*   const { height, width } = pRef.current.getBoundingClientRect() ; */
      console.log(  pRef.current.getBoundingClientRect() );
       /*  setBoxSize({ height, width }); */

    }, [advice])



    return (
       <>
        <blockquote 
            className="blockquote text-end"
            style={{display:'flex'}}
                >
            <p ref={ pRef } className="mb-2">{advice}</p>
            <footer className="blockquote-footer mt-2">Jhon Reyes</footer>
        </blockquote>
        <code>{JSON.stringify(boxSize)}</code>
       </>
    );
};
