"use client";
import React, { useRef, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import LoadingBar from "@/app/components/LoadingBar";
import styles from "./Tokenomics.module.css";
import TokenEntry from "@/app/components/TokenEntry";
import Image from "next/image";

// Register the necessary components for the Doughnut chart
ChartJS.register(ArcElement, Tooltip, Legend);

const Tokenomics = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            const chart = chartRef.current;
            const ctx = chart.ctx;
            const { width, height, chartArea } = chart;

            if (!chartArea) {
                return;
            }

            const gradientBlue = ctx.createLinearGradient(0, 0, width, height);
            gradientBlue.addColorStop(0, '#599aef');
            gradientBlue.addColorStop(1, '#12329d');

            const gradientGreen = ctx.createLinearGradient(0, 0, width, height);
            gradientGreen.addColorStop(0, '#76E2AE');
            gradientGreen.addColorStop(1, '#006c4a');

            const gradientPurple = ctx.createLinearGradient(0, 0, width, height);
            gradientPurple.addColorStop(0, '#8926EA');
            gradientPurple.addColorStop(1, '#d385f5');

            const gradientPink = ctx.createLinearGradient(0, 34, width, height);
            gradientPink.addColorStop(0, '#e735c9');
            gradientPink.addColorStop(1, '#6c003b');

            chart.data.datasets[0].backgroundColor = [gradientBlue, gradientGreen, gradientPurple, gradientPink];
            chart.update();
        }
    }, []);

    // Data for Doughnut Chart
    const data = {
        labels: ['DEX & CEX', ' MARKETING & COLLABS', 'TREASURY', 'TEAM'],
        datasets: [
            {
                label: '% Share',
                data: [68.6, 16.3, 10.1, 5],
                backgroundColor: [], // This will be populated by the gradients
                borderColor: [

                ],
                borderWidth: 2,
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        cutout: '78%',
        plugins: {
            legend: {
                position: 'bottom', // Positions the legend at the bottom of the chart
                labels: {
                    marginTop:30,
                    padding: 20
                    // Adds padding around the legend labels (increase this value for more space)
                }
            }
        },
        layout: {
            padding: {
                // Adds padding at the bottom of the chart (increase this value for more space between chart and legend)
            }
        }
    };

    return (
        <div style={{width:"100%", padding:"20px 10%", marginTop:130, display:"flex", flexDirection:"column", alignItems:"center"}} id="tokenomics">
            <p style={{fontSize:38,  alignSelf:"flex-start",marginBottom:40}}>
                TOKENOMICS
            </p>
            <div style={{display:"flex", marginLeft:24,justifyContent:"flex-start", width:"100%"}}>
                <p>Total Amount:</p>
                <p style={{marginLeft:10, fontWeight:"bold"}}>10,000,000</p>
            </div>

            <div style={{width:"100%", display:"flex" ,marginTop:36,  marginLeft:24}}>
                <p style={{fontSize:16, marginRight:40, fontWeight:"bold", width:"max-content", minWidth:220}}>% of tokens in Circulation:</p>
                <LoadingBar/>
            </div>



            {/* Doughnut chart container */}
            <div style={{marginTop:100, display:"flex", gap:130, width:"100%"}}>


                <div style={{height: '600px', width:'700px', marginLeft:30}}>
                    <Doughnut data={data} options={options} ref={chartRef} />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: '80px', width:"100%", marginTop:30}}> {/* Adjust gap for vertical spacing */}
                    <div style={{display: "flex", gap: '20px'}}> {/* Adjust gap for horizontal spacing between the first two TokenEntry components */}
                        <TokenEntry
                            title={"DEX & CEX"}
                            subtitle={"Ensures a stable and reliable market for PAID tokens"}
                            percentage={"68.6%"}
                            amount={"6,860,000"}
                            color={"#3379CD"} // You can put any color code here
                        />

                        <TokenEntry
                            title={"MARKETING & COLLABS"}
                            subtitle={"Tokens fuel partnerships, ecosystem growth, and attract new investors."}
                            percentage={"16.3%"}
                            amount={"1,630,000"}
                            color={"#76E2AE"} // You can put any color code here
                        />
                    </div>
                    <div style={{display: "flex", gap: '20px'}}> {/* Adjust gap for horizontal spacing between the second two TokenEntry components */}
                        <TokenEntry
                            title={"TREASURY"}
                            subtitle={"Treasury reserves for growth, operations, and future contingencies."}
                            percentage={"10.1%"}
                            amount={"1,010,000"}
                            color={"#8926EA"} // You can put any color code here
                        />

                        <TokenEntry
                            title={"TEAM"}
                            subtitle={"Lorem Ipsum sit amet lome 33 alias lorem "}
                            percentage={"5%"}
                            amount={"500,000"}
                            color={"#C555B0"} // You can put any color code here
                        />
                    </div>

                    <div>
                        <div style={{height:3, width:"50%", backgroundColor:"#fff"}}>

                        </div>
                        <p style={{marginTop:30, fontSize:14}}>
                            Lorem Ipsum sti amet Lorem Ipsum sti amet Lorem Ipsum sti amet Lorem Lorem Ipsum sti amet Lorem Ipsum sti amet Lorem Ipsum sti amet Lorem Lorem Ipsum sti amet Lorem Ipsum sti
                        </p>

                        <div style={{display:"flex", justifyContent:"flex-end", marginRight:50, marginTop:40}}>


                            <div style={{display:"flex", padding:"11px 24px",borderRadius:4, backgroundColor:"#fff", width:"fit-content", alignItems:"flex-end"}}>
                                <Image
                                    src="/WpBlack.png"
                                    alt="Logo"
                                    width={20}
                                    height={20}
                                    priority
                                />
                                <p style={{color:"#000", fontWeight:"bold"}}> Whitepaper</p>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
            <div style={{  height: 3,
                width: "14%",
                backgroundColor:"#fff",
                marginTop: 60}}>

            </div>
        </div>
    );
};

export default Tokenomics;

