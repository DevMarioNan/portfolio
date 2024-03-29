import React,{useEffect} from 'react'
import "aos/dist/aos.css";
import AOS from "aos";
import npmIcon from './npm.png'


const Skills = () => {
    const frontend = ['html', 'css', 'javascript','typescript', 'react', 'redux', 'materialui', 'tailwind', 'bootstrap'];
    const backend = ['nodejs', 'express', 'mongodb', 'mysql', 'postgresql','firebase'];
    const Miscellaneous = ['git','github','heroku','netlify','vscode','jest']
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset:120
        });
        AOS.refresh();
    }, []);

    return (
        <div className='FullPage-section bg-black flex flex-col items-center pb-40' >
            <h1 className='text-white text-center pt-10 text-3xl md:text-6xl font-bold '  data-aos="fade">SKILLS</h1>
            
            <h1 className='text-white text-left text-xl md:text-4xl font-bold pt-10 ' data-aos="fade">Front-End</h1>
            <div className="frontend-skills flex gap-10 py-5 flex-wrap items-center justify-center mx-4"  >
                {frontend.map((skill) => (
                    <div className='flex flex-col justify-center items-center gap-4 w-20 ' key={skill} data-aos="fade-right">
                        <img src={`https://skillicons.dev/icons?i=${skill}`} alt="" className='w-20' />
                        <p className='text-white text-lg'>{skill}</p>
                    </div>
                ))}
            </div>

            <h1 className='text-white text-left text-xl md:text-4xl font-bold pt-10 ' data-aos="fade">Back-End</h1>
            <div className="frontend-skills flex gap-10 py-5 flex-wrap items-center justify-center mx-4" >
                {backend.map((skill) => (
                    <div className='flex flex-col justify-center items-center gap-4 w-20 ' key={skill} data-aos="fade-right">
                        <img src={`https://skillicons.dev/icons?i=${skill}`} alt="" className='w-20' />
                        <p className='text-white text-lg'>{skill}</p>
                    </div>
                ))}
            </div>
            
            <h1 className='text-white text-left text-xl md:text-4xl font-bold pt-10 ' data-aos="fade">Miscellaneous</h1>
            <div className="frontend-skills flex gap-10 py-5 flex-wrap items-center justify-center mx-4"  >
                {Miscellaneous.map((skill) => (
                    <div className='flex flex-col justify-center items-center gap-4 w-20 ' key={skill} data-aos="fade-right">
                        <img src={`https://skillicons.dev/icons?i=${skill}`} alt="" className='w-20'/>
                        <p className='text-white text-lg'>{skill}</p>
                    </div>
                ))}
                <div className='flex flex-col justify-center items-center gap-4 ' data-aos="fade-right" >
                    <img src={npmIcon} className='w-20 ' alt="npm logo"  />
                    <p className='text-white text-lg' >NPM</p>
                </div>
            </div>
            
            
        </div>
    )
}

export default Skills