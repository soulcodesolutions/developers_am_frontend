import React from 'react';
import { motion } from "framer-motion"


export const SlideLeft = ({ duration = 1, delay = 0,initial = {},whileInView = {}, ...props}) => {

    return (
        <motion.div
            initial={{ opacity: 0, x: 30 , ...initial}}
            whileInView={{ opacity: 1, x: 0, ...whileInView }}
            transition={{ duration, delay }}
            viewport={{ once: true }}
            className={props.className}
            
            >
                {props?.children}
        </motion.div>

    )
}

export const SlideRight = ({ duration = 1, delay = 0, initial = {},whileInView = {},  ...props}) => {

    return (
        <motion.div
            initial={{ opacity: 0, x: -30 , ...initial}}
            whileInView={{ opacity: 1, x: 0, ...whileInView  }}
            transition={{ duration, delay }}
            viewport={{ once: true }}
            className={props.className}>
                {props?.children}
        </motion.div>

    )
}

export const JustAppear = ({ duration = 1, delay = 0,initial = {},whileInView = {}, ...props}) => {

    return (
        <motion.div
            initial={{ opacity: 0  ,...initial}}
            whileInView={{ opacity: 1, ...whileInView  }}
            transition={{ duration, delay}}
            viewport={{ once: true }}
            className={props.className}>
                {props?.children}
        </motion.div>

    )
}

export const SlideBottom = ({ duration = 1, delay = 0,initial = {},whileInView = {}, ...props}) => {

    return (
        <motion.div
            initial={{ opacity: 0, y : -30 ,...initial}}
            whileInView={{ opacity: 1,  y : 0 ,...whileInView }}
            transition={{ duration, delay}}
            viewport={{ once: true }}
            className={props.className}>
                {props?.children}
        </motion.div>

    )
}

export const SlideTop = ({ duration = 1, delay = 0,initial = {},whileInView = {}, ...props}) => {

    return (
        <motion.div
            initial={{ opacity: 0, y : 30 ,...initial}}
            whileInView={{ opacity: 1, y : 0 , ...whileInView }}
            transition={{ duration, delay}}
            viewport={{ once: true }}
            className={props.className}>
                {props?.children}
        </motion.div>

    )
}