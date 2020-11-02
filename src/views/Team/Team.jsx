import React, {useState} from 'react'

import {Typography, Tag, Radio} from 'antd'

import {motion} from 'framer-motion'

import TeamCard from './TeamCard'

import ethan from '../../assets/people/ethan.png'
import { LinkOutlined} from '@ant-design/icons';

import MemberList from './MemberList'


const {Title, Text} = Typography




const bigContainerVariants = {
    hidden:{
        opacity: 0
    },
    visible:{
        opacity: 1,
        transition: {
            staggerChildren: "0.4"
        }
    }
}

const memberContainerVariants = {
    hidden:{
        opacity: 0
    },
    visible:{
        opacity: 1,
        transition: {
            staggerChildren: "0.1"
        }
    }
}



const Team = () => {

    const [view, setView] = useState("role")


    return(
        <div style={{marginTop: "100px", width: "100%", background: "#fefefe", position: 'static', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.7}} style={{textAlign: 'center'}}>
                <Title level={1} style={{color: "#333", marginBottom: "10px"}}>Meet Us</Title>
                <Text>See who's behind the magic</Text>
            </motion.div>
            <motion.div 
               
                style={{width: "100%", display: 'flex', background: "#fafdff", height: "100vh", display: "flex", alignItems: "center", flexDirection: "column", position: "static" }}
            >
                <svg style={{filter: "drop-shadow(0px -5px 5px rgb(0,118,220,0.15)", transform: "scaleY(0.8)", position: "absolute", zIndex: "1", top: "200px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fafdff" fill-opacity="1" d="M0,128L40,122.7C80,117,160,107,240,117.3C320,128,400,160,480,160C560,160,640,128,720,138.7C800,149,880,203,960,224C1040,245,1120,235,1200,213.3C1280,192,1360,160,1400,144L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
                <motion.div  initial={{x: "100vh"}} animate={{x: 0, transition: {type: 'spring', duration: 1}}}  style={{marginTop: 'calc(100% * .10)', display: 'flex', zIndex: 4, boxShadow: " 2px 2px 10px rgb(0,118,220,0.1) ", borderRadius: "10px"}}>
                    {/* <div onClick={() => setView("role")} style={{width: "110px", height: "45px", display: 'flex', borderRadius: "10px 0px 0px 10px",justifyContent: 'center', alignItems: "center", background: view == "role" ? "white" : "transparent", boxShadow: view == "role" ? " 2px 2px 10px rgb(0,118,220,0.18) " : "none", cursor: 'pointer'}}>
                        <Text>By Role</Text>
                    </div>
                    <div onClick={() => setView("project")} style={{width: "110px", height: "45px", display: 'flex', borderRadius: "0px 10px 10px 0px",justifyContent: 'center', alignItems: "center", background: view == "project" ? "white" : "transparent", boxShadow: view == "project" ? " 2px 2px 10px rgb(0,118,220,0.18) " : "none", cursor: 'pointer'}}>
                        <Text>By Product</Text>
                    </div> */}
                </motion.div>
                {view == "role" &&
                <motion.div 
                    key={2}
                    variants={bigContainerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{width: "80%", zIndex: "3"}}
                >

                    <MemberList title="Board" noLink={true}>
                        <TeamCard info={{
                                        name: "Preston McCrary", 
                                        li: "https://www.linkedin.com/in/preston-mccrary-62b90a178/", 
                                        gh: "https://github.com/prestonmccrary", 
                                        roles: ['Director', 'Fullstack', 'Design']
                                    }}
                        />
                        <TeamCard info={{name: "Arnav Mehra", img: "https://cdn.discordapp.com/attachments/701265165525450834/765037663849152532/Screen_Shot_2020-10-11_at_10.26.27_PM.png", li: "https://www.linkedin.com/in/preston-mccrary-62b90a178/", gh: "https://github.com/prestonmccrary", roles: ['Fullstack']}}/>
                        <TeamCard info={{name: "Chris Farber", img: "https://media-exp1.licdn.com/dms/image/C4E03AQFLj0i5TFRsPg/profile-displayphoto-shrink_800_800/0?e=1608163200&v=beta&t=E2_7dzX_QW06JVc7zKi4eJMNOCVjunRuTGNTPMrL2U0", li: "https://www.linkedin.com/in/preston-mccrary-62b90a178/", gh: "https://github.com/prestonmccrary", roles: ['Fullstack', 'Mobile'], }}/>
                        <TeamCard info={{name: "Aaron Ni", img: "https://indianahax.org/static/media/aaron.bf25d95f.png", li: "https://www.linkedin.com/in/preston-mccrary-62b90a178/", gh: "https://github.com/prestonmccrary", roles: ['Frontend', 'Mobile']}}/>

                    </MemberList>

                    <MemberList title="Members" noLink={true}>
                        <TeamCard info={{name: "Ethan Donahue", li: "https://www.linkedin.com/in/preston-mccrary-62b90a178/", gh: "https://github.com/prestonmccrary", roles: ['Frontend'], img: ethan}}/>
                        <TeamCard info={{name: "Meglan O'mera", li: "https://www.linkedin.com/in/preston-mccrary-62b90a178/", gh: "https://github.com/prestonmccrary", roles: ['Frontend', 'Design'], img: "https://media.discordapp.net/attachments/598666996053180416/765732880873291776/unknown.png?width=921&height=921"}}/>

                    </MemberList>

                   
                </motion.div>
                }
                {/* <motion.div
                    key={1}
                    variants={bigContainerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{width: "80%", zIndex: "3"}}
                >
                    <MemberList title="Clubs">
                        <TeamCard info={{name: "Preston McCrary", li: "https://www.linkedin.com/in/preston-mccrary-62b90a178/", gh: "https://github.com/prestonmccrary", roles: ['Project Lead']}}/>
                    </MemberList>

                    <MemberList title="Tutoring">
                        <TeamCard info={{name: "Preston McCrary", li: "https://www.linkedin.com/in/preston-mccrary-62b90a178/", gh: "https://github.com/prestonmccrary", roles: ['Project Lead']}}/>
                    </MemberList>

                    <MemberList title="Courses">
                        <TeamCard info={{name: "Arnav Mehra", li: "https://www.linkedin.com/in/preston-mccrary-62b90a178/", gh: "https://github.com/prestonmccrary",roles: ['Project Lead'], img: "https://cdn.discordapp.com/attachments/353975020143247360/764959795970965534/20201011_171926.jpg"}}/>
                    </MemberList>
                   
                    <MemberList title="Schedule">
                        <TeamCard info={{name: "Ethan Donahue", li: "https://www.linkedin.com/in/preston-mccrary-62b90a178/", gh: "https://github.com/prestonmccrary", roles: ['Project Lead'], img: ethan}}/>

                    </MemberList>

                    <MemberList title="Busing">
                    <TeamCard info={{name: "Chris Farber", img: "https://media-exp1.licdn.com/dms/image/C4E03AQFLj0i5TFRsPg/profile-displayphoto-shrink_800_800/0?e=1608163200&v=beta&t=E2_7dzX_QW06JVc7zKi4eJMNOCVjunRuTGNTPMrL2U0", li: "https://www.linkedin.com/in/preston-mccrary-62b90a178/", gh: "https://github.com/prestonmccrary", roles: ['Project Lead'], }}/>
                    </MemberList>
                         

                    
                   
                   
                </motion.div> */}
                
            </motion.div>
        </div>
    )
}

export default Team