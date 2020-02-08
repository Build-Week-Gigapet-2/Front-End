import React from 'react';
import { Link } from 'react-router-dom';
import { getAllChildren, deleteChild } from '../../Actions/Children';
import { connect } from 'react-redux';
import AddChild from '../User/addChild';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const Child = (props) => {
    console.log(props)
    const handleDelete = (e) => {
        console.log('Handle Delete')
        e.preventDefault();
        props.deleteChild(props.child);
    }

    const styledFonts = makeStyles({
        root:{
            fontSize: '1.5rem',
            
        }
    })



    const styles = styledFonts();

    return (
        <div>
            <div >
                <div className="homebutton">
                   <Button variant="outlined"> <Link to='/'>
                        Home
                    </Link></Button>
                    <Button variant="outlined"><Link to='/api/users/:id/children'/>Add Child</Button>
                </div>
            </div>
            
        <div className="childcard">
                <h4 className="childname">
                Name: {props.name}
                </h4>
                <div className="childButtons">
                <Button size="small" color="primary" variant="outlined"><Link to='/api/users/:id/children/:id'>View Child</Link></Button>
                <Button size="small" color="primary" variant="outlined"><Link to='/api/users/:id/children/:id'>Edit Child</Link></Button>
                <Button size="small" color="primary" variant="outlined" className="btn" onClick={handleDelete}>Delete</Button>
                </div>
        </div>

        {/* <Link to='/' className="btn">Let's Eat!</Link> */}
        </div>
    )
}

const mapStateToProps = ({ childReducer }) => ({
    // loading: childReducer.loading,
    allChildren: childReducer.allChildren
})

export default connect(mapStateToProps, { getAllChildren, deleteChild })(Child);
// export default Child;