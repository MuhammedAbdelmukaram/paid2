import React from 'react';

const EarnedMoney = () => {
    return (
    <div style={{ padding:30, width:"1000px", marginTop:120}}>

        <h1 style={{marginBottom:20}}>OUR TEAM IS OUR STRENGTH</h1>
        <div style={{marginBottom:20}}>
            <p> Our Impressive Track Record of Scaling Web 2 Brands to 7 Figures is a Testament to our Success, We here to dominate Web 3 Commerce. </p>
        </div>

        <div style={{padding:"20px 30px", backgroundColor:"#121312",border:"1px solid #3E3E3E", borderRadius:4, display:"flex", justifyContent:"center",alignItems:"center", width:"fit-content"}}>

            <p style={{fontSize:22}}>
                REVENUE GENERATED THIS MONTH:
            </p>

            <p style={{fontSize:42, marginLeft:20}}>
                $XXX,XXX
            </p>

            <p style={{color:"#2BEA2A", marginLeft:10, fontSize:20}}>
                XX%
            </p>

        </div>



    </div>
    );
};

export default EarnedMoney;