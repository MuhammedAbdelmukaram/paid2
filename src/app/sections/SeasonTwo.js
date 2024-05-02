import React from 'react';

const SeasonTwo = () => {
    return (
        <div style={{
            backgroundColor: 'black', // Set background color to black
            color: 'white', // Set text color to white
            padding: '40px', // Add padding around the content
            textAlign: 'center' // Center align the text
        }}>
            <h1 style={{
                color: '#2BEA2A', // Green color for the heading
                fontSize: '48px', // Larger font size for the heading
                marginBottom: '20px' // Margin bottom for spacing
            }}>
                SEASON TWO
            </h1>
            <h2 style={{
                color: '#2BEA2A', // Green color for the subheading
                fontSize: '36px', // Font size for subheading
                marginBottom: '40px' // Margin bottom for spacing
            }}>
                3SQUARES
            </h2>
            <p style={{
                fontSize: '20px', // Font size for the paragraph
                margin: '10px 0' // Margin top and bottom for spacing
            }}>
                XP will Play a Crucial Role in Development of sPAID<br/>
                Advice: Make sure to stake your Member Cards.
            </p>
            <p style={{
                fontSize: '20px', // Font size for the paragraph
                fontStyle: 'italic' // Italic style for emphasis
            }}>
                We deem Loyalty as the Highest form of Flattery<br/>
                And Plan to Reward it Appropriately.
            </p>
        </div>
    );
};

export default SeasonTwo;
