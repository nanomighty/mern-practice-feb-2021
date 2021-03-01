import React from 'react';

const Tabs = (props) => {

    const {items, indx, setIndx} = props;
    
    const setSelectedTab = (index) => {
        setIndx(index);
    }


    return (
        <div>
            {
                items.map((item, index) => {
                    return (
                        <button key={index} onClick={(e) => setSelectedTab(index)}>{item.label}</button>
                    )
                })
            }

            <div id="contentBox">
                {items[indx].content}
            </div>
        </div>
    )
}
export default Tabs;