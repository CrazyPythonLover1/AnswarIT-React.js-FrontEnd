import React from 'react';
import './CoreValueItem.scss';

const CoreValueItem = ({feature}) => {
    console.log(feature)
    return (
        <div className="core-value-item" style={{width: " 100%"}}>
            <div className="featured-box">
                <div className="thumbnail">
                    <img src={require(`../../../Image/about/${feature.img}.jpg`).default} alt="img"/>
                </div>
                <div className="box-content">
                    <h4> {feature.title} </h4>
                    <p> {feature.text} </p>
                </div>
            </div>
        </div>
    );
};

export default CoreValueItem;