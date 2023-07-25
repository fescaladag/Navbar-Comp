import './NavBar.css'
import lupa from './assets/lupa.png'
import insta_icon from './assets/insta-icon-bw.png'
import fb_icon from './assets/fb-icon-bw.png'


const NavBar = (props) => {
  return (
    <div className='main-ctn'>
        <div className='upper-nav'>
            <div className='logo-ctn'>
                <p className='logo'>{props.logotxt}</p>                
            </div>

            <div className='left-ctn'>    
                <div className='social-ctn'>
                    <img  src= {insta_icon} className='search-icon'></img>
                    <img  src= {fb_icon} className='search-icon' ></img>
                </div>

                <div className='search-ctn'>
                    <input type="text" className='search-box' autoComplete='off' placeholder='Search albums, artists, genres etc'></input>
                    <img  src= {lupa} className='search-icon' ></img>
                </div>    
            </div>


        </div>
        


        <div className='lower-nav'>

            <div className='nav-ctn'>
                <div className='items'><a href={props.link1}>{props.item1}</a></div>
                <div className='items'><a href={props.link2}>{props.item2}</a></div>
                <div className='items'><a href={props.link3}>{props.item3}</a></div>
                <div className='items'><a href={props.link4}>{props.item4}</a></div>
                <div className='items'><a href={props.link5}>{props.item5}</a></div>
                <div className='items'><a href={props.link6}>{props.item6}</a></div>
            </div>

            <div className="Btn-ctn">
                <button className='sign-btn'>Sign In</button>  
            </div>  

        </div>    

    </div>
  )
}

export default NavBar