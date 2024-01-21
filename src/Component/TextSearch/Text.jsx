import img from './img.png';
import data from '../memedata.js'
import { useState } from 'react';
//import ImageHero from '../ImageHero/ImageHero';
const Text = () => {

    const [image ,setimage]=useState("");
    const getrandomimg=()=>{
        const randomIndex = Math.floor(Math.random() * 100);
            const src=data.data.memes[randomIndex].url;
            console.log('Image URL:', src);
      setimage(src);
    }
    return ( <>
    <div className="container mt-5" style={{height:'40vh'}}>
     <div className="row"style={{height:'15vh'}}>
        <div className="col-2 "></div>
        <div className="col-4 ">
            <p style={{fontSize:'18px' ,fontFamily:'sans-serif'}}>Top Text</p>  <input placeholder="Enter Thought " style={{height:'40px',width:'20vw',borderRadius:'5px'}} type="text" />      </div>
        <div className="col-4   " style={{display:"flex",justifyContent:'end'}}>
        <div className="div" >
        <p style={{fontSize:'18px',fontFamily:'sans-serif'}}>Bottom Text</p>
        <input placeholder="Enter Thought " style={{height:'40px',width:'20vw',borderRadius:'5px'}} type="text" />  
        </div>
        </div>
        <div className="col-2 "></div>
        
     </div>
     <div className="row mt-5" style={{height:'7vh'}}>
        <div className="col-2"></div>
        <div className="col-8  " style={{borderRadius:'10px',backgroundColor:'rgba(155,37,196,255)'}}>
            <div className="div mt-1" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <span style={{fontSize:'21px'}} onClick={getrandomimg}>Get a new meme image </span><img src={img} style={{width:'42px' ,marginTop:'5px'}} alt="" />
            </div>
        </div>
        <div className="col-2"></div>

     </div>
     </div>
     <div className="container" style={{ height: '40vh' }}>
      <div className="row" style={{ height: '40vh' }}>
        <div className="col-2"></div>
        <div className="col-8" style={{ borderRadius: '10px' }}>
          <img
            src={image}
        
            alt=""
            className='img-fluid'
            style={{ width: '100%', height: '90%', objectFit: 'cover' }}
          />
        </div>
        <div className="col-2"></div>
      </div>
    </div>
    
    </>);
}
 
export default Text;