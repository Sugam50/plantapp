import React,{useState} from 'react';
import '../Style/Cards.css';
import {Button} from 'react-bootstrap';

function Cards() {
    const [Option, setOption] = useState(false);
   
    return (
        <>
        <div className='Cards_list' onClick={()=>setOption(!Option)}>
            <img src="" alt="" />
            <div className="details">
                <h5>Name</h5>
                <p>bvbsfdv
                    hvbivdbv
                    nvbivhuovhsdv
                </p>
            </div>
            <div className="amount">
                Amount <br/>
                50
            </div>
        </div>
        <div className={Option?"Options ":"Options hide"}>
        <Button variant="dark">Donate</Button>
        <Button variant="dark">Show Profile</Button>
        </div>
        </>
    )
}

export default Cards
