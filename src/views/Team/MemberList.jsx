import React from 'react'

import {Link} from 'react-router-dom'

import {Typography} from 'antd'

import {motion} from 'framer-motion'

import { LinkOutlined} from '@ant-design/icons';


const {Title} = Typography

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

const MemberList = (props) => {

    return(
        <div style={{width: "100%", marginTop: "30px"}}>
        <Title level={2} style={{color: "#333", marginBottom: "10px"}}>
            {props.title} {!props?.noLink && <Link to={`/products/${props.title}`}><LinkOutlined className="link" style={{fontSize: "18px"}}/></Link>}
        </Title>
            <motion.div 
                variants={memberContainerVariants}
                style={{display: 'flex', flexWrap: "wrap", marginTop: "20px", alignItems: 'center'}}
            >
                {props.children}

            </motion.div>

        </div>
    )
}

export default MemberList