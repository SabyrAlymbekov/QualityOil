import Product from "@components/Product/Product.jsx";
import {useMemo, useState} from "react";
import '@components/Product/productShow.sass'
export default function ProductShow({data, limit}) {
    const chunks = useMemo(()=>{
        let chunks2 = [];
        let j = -1;
        for (let i = 0; i < data.length; i++) {
            if (i % limit === 0) {
                j++;
                chunks2.push([]);
            }
            chunks2[j].push(data[i]);
        }
        return chunks2
    }, [data.length]);
    const [cur, setCur] = useState(0);
    const nextChunk = ()=>{
        if (cur === chunks.length-1) setCur(0)
        else setCur(cur + 1)
    }
    const previousChunk = ()=>{
        if (cur === 0) setCur(chunks.length-1)
        else setCur(cur-1)
    }
    return <div className="products-wrapper">
        <div className="products">
            {chunks[cur].map((type, index) => (<Product data={type} key={index}></Product>))}
        </div>
        <div className="controls">
            <button className="controls__prev controls__control" onClick={previousChunk} name='previous products page'>{'<'}</button>
            {chunks.map((type, index) => (<button className="controls__control" onClick={()=>{setCur(index)}} key={index} name={`${index+1} products page`}>{index + 1}</button>))}
            <button className="controls__next controls__control" onClick={nextChunk} name='next products page'>{'>'}</button>
        </div>
    </div>
}