import img from './img.png';
const ImageHero = () => {
    return ( 
<div className="container " style={{height:'40vh'}}>
     
     <div className="row " style={{height:'40vh'}}>
        <div className="col-2"></div>
        <div className="col-8" style={{borderRadius:'10px' }}>
           <img  src={img}
        alt=""
        className='img-fluid'
        style={{ width: '100%', height: '90%', objectFit: 'cover' }}/>
        </div>
        <div className="col-2"></div>

     </div>
    </div>
    );
}
 
export default ImageHero;