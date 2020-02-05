import React, { useEffect } from 'react';
import Child from './Child';
import { connect } from 'react-redux';
// import Spinner from '../layout/Spinner';
import { getAllChildren } from '../../Actions/Children';

function ChildCard(props){

    // const loading = props.loading;

    useEffect(() => {
        setTimeout(() => {
            props.getAllChildren()
         }, 500)
    }, [] )

    // if(loading) {
    // return <Spinner />
    // } else {
        console.log(props.allChildren);
    return(
            <div>
                    {props.allChildren &&
                        props.allChildren.map(child =>{
                            return(
                                <Child 
                                    key={child.id}
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
    allChildren: childReducer.allChildren
})

export default connect(mapStateToProps, { getAllChildren })(ChildCard);

// export default ChildCard;