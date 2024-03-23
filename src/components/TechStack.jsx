import reacticon from '../icons/reacticon.svg'
import reduxicon from '../icons/reduxicon.svg'
import tailwindicon from '../icons/tailwindicon.svg'
import jsicon from '../icons/jsicon.svg'
import giticon from '../icons/giticon.svg'
import bootstrapicon from '../icons/bootstrapicon.svg'
import firebaseicon from '../icons/firebaseicon.svg'
import cssicon from '../icons/cssicon.svg'
import htmlicon from '../icons/htmlicon.svg'
import githubicon from '../icons/githubicon.svg'
import vscodeicon from '../icons/vscodeicon.svg'
import mongodbicon from '../icons/mongodbicon.svg'
import express from '../icons/express.svg'
import nodeicon from '../icons/nodeicon.svg'


const TechStack = () => {
  return (
    <div className=''>
    <div className=' mx-auto grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 items-center place-items-center gap-4 '>
    <div className='w-[60px]   cursor-pointer hover:scale-110 duration-150 '>
        <img src={reacticon} className='scale-125' title="React" alt="REACT" />
    </div>
    <div className='w-[60px] cursor-pointer hover:scale-110 duration-150'>
        <img src={reduxicon} className='scale-125' title="Redux Toolkit" alt="REDUX" />
    </div>
    <div className='w-[60px] md:w-[80px] cursor-pointer hover:scale-110 duration-150'>
        <img src={tailwindicon} className='scale-110 ' title="Tailwind CSS" alt="tailwind" />
    </div>
    <div className='w-[60px] md:w-[80px] cursor-pointer hover:scale-110 duration-150'>
        <img src={jsicon} title="Javascript" alt="Javascript" />
    </div>
    <div className='w-[60px] md:w-[80px] cursor-pointer hover:scale-110 duration-150'>
        <img src={giticon} title="Git" alt="Git" />
    </div>
    <div className='w-[60px] md:w-[80px] cursor-pointer hover:scale-110 duration-150'>
        <img src={bootstrapicon} title="Bootstrap" alt="Bootstrap" />
    </div>
    <div className='w-[60px] md:w-[80px] cursor-pointer hover:scale-110 duration-150'>
        <img src={firebaseicon} title="Firebase" alt="Firebase" />
    </div>
    <div className='w-[60px] md:w-[80px] cursor-pointer hover:scale-110 duration-150'>
        <img src={cssicon} title="CSS" alt="CSS" />
    </div>
    <div className='w-[60px] md:w-[80px] cursor-pointer hover:scale-110 duration-150'>
        <img src={htmlicon} title="HTML5" alt="Html" />
    </div>
    <div className='w-[60px] md:w-[80px] cursor-pointer hover:scale-110 duration-150'>
        <img src={githubicon} title="Github" className='scale-125 md:scale-150' alt="Github" />
    </div>
    <div className='w-[60px] md:w-[80px] cursor-pointer hover:scale-110 duration-150'>
        <img src={vscodeicon} title="VSCode"  alt="VsCode" />
    </div>
    <div className='w-[60px] md:w-[80px] cursor-pointer hover:scale-110 duration-150'>
        <img src={mongodbicon} title="MongoDB" className='scale-50'  alt="MongoDB" />
    </div>
    <div className='w-[60px] md:w-[80px] cursor-pointer hover:scale-110 duration-150'>
        <img src={express} title="Express JS" className='scale-125' alt="ExpressJS" />
    </div>
    <div className='w-[60px] md:w-[80px] cursor-pointer hover:scale-110 duration-150'>
        <img src={nodeicon} title="Node JS" alt="NodeJS" />
    </div>
    </div>
    </div>
  )
}

export default TechStack