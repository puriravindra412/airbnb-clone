import React from 'react';
import Button from '../utility/button';
const Menu=(props)=>{
    
    return(
        <div className="menu">
                <div className="static">
                    {props.staticName.map((index)=>
                            
                                <Button name={index.static}></Button>
                            
                            
                        
                        
                        )}
                       
                    
                </div>
                <div className='scrollable'>
                {props.normalName.map((index)=>
                            
                    <Button name={index.normal}></Button>
                
                
            
            
            )}
                </div>
                
        </div>
    );
}
export default Menu;