import React from "react"
import PropTypes from "prop-types"
import { View, StyleSheet } from "react-native";
import "./styles.css"

export default function Card({handleClick, id, type, flipped, height, width}){
    return <div className={`flipContainer ${flipped? 'flipped': ""}`}
    style={{width,height}} onclick={()=>handleClick(id)} >
        <div className="flipper" ><img  style={{height, width}} className={flipped? "front":"back"} src={flipped? `/img/${type}.png`:'/img/back.png'}/></div>
    </div>
}

Card.propTypes = {
    handleClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    flipped: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
}

// const styles = StyleSheet.create({
//     flipContainer:{
//         perspective: "1000px",
//         display: "inline-block",
//         border: "1px solid white",
//         background: "black",
//     },
    
//     flipContainer_flipped_flipper:{
//         transform:"rotateY(180deg)",
//     },
    
//     flipper:{
//         transition: "0.6s",
//         transformStyle: "preserve-3d",
//         position: "relative",
//     },
    
//     front_back:{
//         backfaceVisibility: "hidden",
//         position: "absolute",
//         left: 0,
//         top: 0,
//     },
    
//     back:{
//         zIndex: 2,
//         transform: "rotateY(0deg)",
//     },
    
//     front:{
//         transform:"rotateY(180deg)",
//     }
//   });

