import React from 'react';

const EarnedMoney = () => {
    return (
    <div style={{border:"1px solid #8D8D8D", padding:30, width:"fit-content"}}>

        <h1 style={{marginBottom:20}}>Our Team is Our Strength</h1>
        <div style={{marginBottom:20}}>
            <p> Our Impressive Track Record & Current Brand are a Testament to our Success, Generating $500K per month and on Track to Double that by Years end.</p>
        </div>

        <div style={{padding:"20px 60px", backgroundColor:"#121312",border:"1px solid #3E3E3E", borderRadius:4, display:"flex", justifyContent:"center",alignItems:"center", width:"fit-content"}}>

            <p style={{fontSize:22}}>
                REVENUE GENERATED THIS MONTH:
            </p>

            <p style={{fontSize:42, marginLeft:20}}>
                $554,566
            </p>

            <p style={{color:"#2BEA2A", marginLeft:10, fontSize:20}}>
                33%
            </p>
        </div>


    </div>
    );
};

export default EarnedMoney;