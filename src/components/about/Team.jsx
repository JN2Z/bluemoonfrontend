import React from 'react'
import './team.css'
import Jaime from '../../assets/jaime.png'
import Jhastine from '../../assets/jhastine.png'
import Jona from '../../assets/jona.png'
import Boogs from '../../assets/boogs.png'
import Derwin from '../../assets/derwin.png'


const team = [
  { name: 'JAIME OQUIAS, JR.', role: 'Back-end Developer', image: Jaime, facebook:'https://www.facebook.com/jaime.oquias',github: 'https://github.com/JN2Z',portfolio: 'https://www.github.com',background:'#30323B'},
  { name: 'JONALIE ESTOYA', role: 'Front-end Developer', image: Jona, facebook:'https://www.facebook.com/jonalie.estoya',github: 'https://github.com/Jonalieestoya' ,portfolio: 'https://www.github.com',background:'#7B5035'},
  { name: 'LESLIE JOHN FLOGEN', role: 'Back-end Developer', image: Boogs, facebook:'https://www.facebook.com/booglort01',github: 'https://github.com/boogsiee',portfolio: 'https://www.github.com',background:'#482220'},
  { name: 'JHASTINE MACALINO', role: 'UI/UX Designer & Front-end Developer', image: Jhastine, facebook:'https://www.facebook.com/mangteeno',github: 'https://github.com/just-teen' ,portfolio: 'https://www.github.com',background:'#1F2528'},
  { name: 'DERWIN BERNALES', role: 'Front-end Developer', image: Derwin, facebook:'https://www.facebook.com/mirana.nightshade.3133',github: 'https://github.com/derwinbernales9',portfolio: 'https://www.github.com',background:'#0C182E'}
];

const Team = () => {

  return (
    <>
    <div className="about__team">
    <h1>About the Team</h1>
    <p>The Blue Moon Hotel website was designed and developed by a talented team<br /> of web developers who are experts in their field.</p>
    <div className="team__holder">
    { team.map(({name,index,role,image,facebook,github,portfolio,style,background})=>{
      return(
        <div class="person">
      <div class="container">
        <div class="container-inner">
         <div class="circle" style={{position:'absolute',background:background,height:'380px',width:'380px',top:'210px',left:'10px',borderRadius:'50%'}}></div>
             <img src={image} alt="" />
        </div>
      </div>
      <div class="divider"></div>
        <h3>{name}</h3>
        <p>{role}</p>
        <ul className='portfolio__social-links'>
          <li><a href={facebook} target='_blank'><i class="fa-brands fa-facebook"></i></a></li>
          <li><a href={github} target='_blank'><i class="fa-brands fa-github"></i></a></li>

        </ul>
        <a href={portfolio} rel='noopener' target='_blank' className='view__portfolio'>View Portfolio <i class="fa-solid fa-briefcase"></i></a>
        
    </div>
      ) 
    })
    }
    </div>
    </div>
    </>
  );
}

export default Team
