import React, {useState} from 'react'
import {Typography, Button, Drawer, Divider} from 'antd'
import { CodeOutlined, DesktopOutlined, TeamOutlined, MenuOutlined, QuestionOutlined, HomeOutlined, UserAddOutlined, MailOutlined} from '@ant-design/icons';

import {Link} from 'react-router-dom'

import logo from "../../assets/logo.png"

import useMedia from '../shared/useMedia'

const {Title, Text} = Typography

const Navbar = () => {

    const mobile = useMedia(['(min-width: 750px)', '(max-width: 750px)'], [false, true])
    const [navV, setNavV] = useState(false)



    return(
        <div style={{width: '100%', height: "70px", background: "#fefefe", display: 'flex', justifyContent: 'space-between', alignItems: "center", padding: "10px 20px"}}>
            <div style={{display: 'flex', alignItems: 'center', width: mobile ? "70%": "30%"}}>
                <Link to="/"><img src={logo} style={{cursor: 'pointer', height: "40px"}}></img></Link>
                <Title level={3} style={{margin: "0px 10px"}}> HSE Apps </Title>
            </div>

            {mobile ? 
            <>
                <MenuOutlined onClick={() => setNavV(true)} style={{fontSize: "20px", color: "black"}}/>
                <Drawer
                    placement="right"
                    closable={true}
                    visible={navV}
                    onClose={()=> setNavV(false)}
                >
                        <p style={{fontSize: "15px"}}><Link to='/' onClick={() => setNavV(false)}> <HomeOutlined style={{marginRight: '5px'}}/> Home </Link></p>
                        <p style={{fontSize: "15px"}}><Link to='/products' onClick={() => setNavV(false)}> <DesktopOutlined style={{marginRight: '5px'}}/> Products</Link></p>
                        <p style={{fontSize: "15px"}}><Link to='/resources' onClick={() => setNavV(false)}> <CodeOutlined style={{marginRight: '5px'}}/> Resources </Link></p>
                        <p style={{fontSize: "15px"}}><Link to='/team' onClick={() => setNavV(false)}> <TeamOutlined style={{marginRight: '5px'}}/> Team</Link></p>
                        <p style={{fontSize: "15px"}}><Link to='/about' onClick={() => setNavV(false)}> <QuestionOutlined style={{marginRight: '5px'}}/> About </Link></p>
                        <Divider></Divider>
                        <p style={{fontSize: "15px"}}><Link to='/about' onClick={() => setNavV(false)}> <MailOutlined style={{marginRight: '5px'}}/> Contact </Link></p>
                        <p style={{fontSize: "14px"}}><Link to='/about' onClick={() => setNavV(false)}> <UserAddOutlined style={{marginRight: '5px'}}/> Join </Link></p>



                        {/* 
                        <p style={{fontSize: "14px"}}><a target="_blank" href="https://www.youtube.com/watch?v=sQ_NAfJxbFg&feature=emb_title"> <YoutubeFilled style={{marginRight: '5px'}}/> Youtube</a></p> */}
                        {/* <p style={{fontSize: "15px"}}><a> <TwitterOutlined style={{marginRight: '5px'}}/> Twitter</a></p> */}

                </Drawer>
            </>

            :
            <>
                <div style={{display: 'flex', alignItems: 'center',width : '350px', justifyContent: "space-evenly", justifySelf: 'center'}}>   
                    <Link to="/products"><Text >Products</Text></Link> 
                    <Link to="/resources"><Text>Resources</Text></Link> 
                    <Link to="/team"><Text>Team</Text></Link> 
                    <Link to="/about"><Text>About</Text></Link> 

                </div>
                <div style={{width: "30%", display: "flex", justifyContent: "flex-end", alignItems: "center"}}>
                    <Typography.Link style={{margin: "0px 20px"}}>Contact Us</Typography.Link>
                    <Button type="primary">Join Us</Button>
                </div>
            </>
            }
        </div>
    )
}

export default Navbar