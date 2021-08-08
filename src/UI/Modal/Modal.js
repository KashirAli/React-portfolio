import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import {IconButton,Button} from '@material-ui/core'
import { useSpring, animated } from 'react-spring'; // web.cjs is required for IE 11 support
import InputFile from '../InputFile/InputFile';
import  EditIcon from '@material-ui/icons/Edit';
import './Modal.css'
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export default function SpringModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [title,setTitle] = useState('');
  const [github,setGithub] = useState('');
  const [type,setType] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const submitPortfolioDetail = ()=>{
    if(title && github) {
        handleClose();
    } 
    props.setTitle(title)
    props.setGithub(github)
    props.setType(type)
      
  }
  return (
    <div>
      <Button type="button" onClick={handleOpen}>
       
        <IconButton color="primary" aria-label="upload picture" component="span">
          <EditIcon />
        </IconButton>
      </Button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
       style={{width:'30%',margin:'60px auto'}}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div style={{width:'100%',height:'auto',background:'white', borderRadius:'15px',position:'relative'}}>
                    <h2 style={{textAlign:'center',fontFamily:'Poppins',display:'inline-block', padding:'15px 0 0 20px'}}>Add a Portfolio</h2>
                    <hr/>
            <form style={{width:'80%',margin:'0 auto'}}>
            <div className="form-group">
    <label className="labelStyle"  for="exampleInputEmail1">Title of Image:</label>
    <input type="text" class="form-control"  aria-describedby="emailHelp" placeholder="Title of Image" onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div className="form-group">
    <label  className="labelStyle" for="exampleInputEmail1">Github Link:</label>
    <input type="text" class="form-control"  aria-describedby="emailHelp" placeholder="Github Link" onChange={(e)=>setGithub(e.target.value)}/>
            </div>
            <div className="form-group">
    <label  className="labelStyle" for="exampleInputEmail1">Type:</label>
    <input type="text" class="form-control"  aria-describedby="emailHelp" placeholder="Enter Type" onChange={(e)=>setType(e.target.value)}/>
            </div>
            <div className="form-group">
    <label className="labelStyle" for="exampleInputEmail1">Upload Image</label>
    <InputFile file={props.file} setFile={props.setFile}/>
           </div>
                <div style={{width:'100px', height:'40px',position:'absolute',bottom:'15px',  right:'38px'}}>
                    <Button onClick={submitPortfolioDetail} variant="contained" color='primary'>Submit</Button>
                </div>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
