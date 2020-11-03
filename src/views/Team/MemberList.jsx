import React from 'react'

import {Link} from 'react-router-dom'

import {Typography} from 'antd'

import {motion} from 'framer-motion'

import { LinkOutlined} from '@ant-design/icons';

import useMedia from '../shared/useMedia'

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

    const smallerLayout = useMedia(['(min-width: 720px)', '(max-width: 720px)'], [false, true])



    return(
        <div style={{width: "100%", marginTop: "30px"}}>
        <Title level={2} style={{color: "#333", marginBottom: "10px", marginLeft: smallerLayout ? '0px' : '25px', textAlign: smallerLayout ? "center" : "left"}}>
            {props.title} {!props?.noLink && <Link to={`/products/${props.title}`}><LinkOutlined className="link" style={{fontSize: "18px"}}/></Link>}
        </Title>
            <motion.div 
                variants={memberContainerVariants}
                style={{display: 'flex', flexWrap: "wrap", marginTop: "20px", alignItems: 'center', justifyContent: smallerLayout ? 'center' : 'flex-start'}}
            >
                {props.children}

            </motion.div>

        </div>
    )
}

export default MemberList