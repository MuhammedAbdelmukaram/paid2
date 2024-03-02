import React from 'react';

const TokenEntry = ({title, subtitle, percentage, amount, color}) => {
    return (
        <div style={{width:440}}>
            <div style={{height:113}}>
            <p style={{fontSize: 28, fontWeight: "bold", marginBottom:16}}>{title}</p>
            <p style={{fontSize: 15, marginBottom:16}}>{subtitle}</p>
            </div>

            <div style={{display: "flex", alignItems: "center", height:"fit-content"}}> {/* Added alignItems for better alignment */}

                {/* Apply the color prop here */}
                <p style={{fontSize: 34, color: color, fontWeight:"bold", marginRight:20}}>{percentage}</p>

                {/* Separator or additional styling can go here */}
                <div style={{width: 3,  backgroundColor:"#fff",height:36, borderRadius:24}}></div> {/* This is a spacer, adjust as needed */}

                <div style={{marginLeft:30}}>
                    <p style={{margin: 0}}>Amount:</p> {/* Removed margin for alignment */}
                    <p style={{margin: 0}}>{amount} $PAID</p> {/* Removed margin for alignment */}
                </div>

            </div>
        </div>
    );
};

export default TokenEntry;
