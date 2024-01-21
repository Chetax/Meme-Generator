import logo from './image.png';
const Navbar = () => {
    return ( <>
    <div className="container-fluid" style={{backgroundColor:'rgba(155,37,196,255)', height:'60px'}}>
      <div className="container " style={{height:'60px'}}>
       <div className="row">
        <div className="col-3 " style={{height:"60px"}}>
            <div className="cotainer">
        <span ><img src={logo} alt="" className='p-2' style={{width:'80px'}}/><span style={{fontSize:'18px',position:'absolute' ,top:"2.5%",fontWeight:'bold',color:'white'}}>Meme Generator</span> </span>
            </div>
        </div>
        <div className="col-5 " style={{height:"60px"}}></div>
        <div className="col-4  d-flex align-items-center justify-content-center " style={{height:"60px",fontSize:'18px' ,fontWeight:'bold' }}>
        <p style={{marginTop:'17px',color:'white'}}>React Course - Project 3</p>
        </div>
       </div>
      </div>

    </div>
    </> );
}
 
export default Navbar;