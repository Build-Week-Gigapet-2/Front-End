import React, { useEffect } from 'react';
import Child from './Child';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card'
// import Spinner from '../layout/Spinner';
import { getAllChildren } from '../../Actions/Children';

function ChildCard(props, id){

    // const loading = props.loading;
    
    
    useEffect(() => {
        setTimeout(() => {
            props.getAllChildren(1)
         }, 500)
    }, [] )
    console.log(props)
    // if(loading) {
    // return <Spinner />
    // } else {
       
    return(
            <div>
                    {props.allChildren &&
                        props.allChildren.map(child  =>{
                            return(
                               

                                <Child 
                                    key={child.id}
                                    id={child.id}
                                    name={child.child} 
                                  />
                            )
                           
                        })
                    }
            </div>
    )
         
    }


const mapStateToProps = ({ childReducer }) => ({
    // loading: childReducer.loading,
    allChildren: childReducer.allChildren,
    child: childReducer.child,
    children: childReducer.children,
})

export default connect(mapStateToProps, { getAllChildren })(ChildCard);

// export default ChildCard;