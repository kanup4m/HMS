import React from 'react';
import { Grid } from 'antd-mobile';
import left from '../assets/left.png'
import step from '../assets/step2.png'
const Floor = () => {
    const data = Array.from(new Array(32)).map((_val, i) => ({
        text: `Room ${i}`,
    }));


    return (
        <div>
            <img src={step} />
            <div className="sub-title">Room no</div>
            <Grid data={data}
                columnNum={4}
                hasLine={false}
                renderItem={dataItem => (
                    <div style={{ padding: '12.5px' }}>
                        <div className="box"> {dataItem.text}</div>
                    </div>
                )}
            />
            <button className="next-btn"><img src={left} /></button>
        </div>
    );
}

export default Floor;