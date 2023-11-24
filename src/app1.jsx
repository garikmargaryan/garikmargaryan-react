import { useState } from 'react'
export default function App1(){
    let [count, setCount] = useState(0);
    function gnacucak(k) {
        if(k <= 1) k = 1;
        if(k >= 10) k= 10;
        setCount(k)
    }
    
    return(
        <div className="contener">
            <img src={require('../src/img/banana.jpg')} />
            <div className='contener_1'>
                <h1>Product</h1>
                <p><b>Product:Banana</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aliquid obcaecati recusandae incidunt minima. Harum, et! Commodi laudantium labore non.</p>
            </div>
             <div className='contener_2'>
                  <h1>Gin{count * 10}$</h1>
                  <span >Qani anqames gnum{count + 0}</span>
                  <button onClick={() => gnacucak(count - 1)}>-</button>
                  <button  onClick={() => gnacucak(count + 1)}>+</button>
                 
             </div>
        </div>
    )
}