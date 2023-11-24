import { useState } from 'react'

export default function App(){
    let [count, setCount] = useState(0);
    function gnacucak(k) {
        if(k <= 1) k = 1;
        if(k >= 10) k= 10;
        setCount(k)
    }
    
    return(
        <div className="contener">
            <img src={require('../src/img/abrikos1.jpg')} />
            <div className='contener_1'>
                <h1>Product</h1>
                <p><b>Product:Abrikos</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aliquid obcaecati recusandae incidunt minima. Harum, et! Commodi laudantium labore non.</p>
            </div>
             <div className='contener_2'>
                  <h1>Gin{count * 20}$</h1>
                  <span >Qani anqames gnum{count + 0}</span>
                  <button onClick={() => gnacucak(count - 1)}>-</button>
                  <button  onClick={() => gnacucak(count + 1)}>+</button>
                 
             </div>
        </div>
    )
}
