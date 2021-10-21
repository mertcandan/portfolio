import React, {useState} from 'react'
import PlayCircleIcon from '@material-ui/icons/PlayCircleFilled';
import './ProjectContainer.css'
import { Box, Modal } from '@material-ui/core'
import ReactPlayer from 'react-player'

const style = {
  position: 'absolute',
  top: '10vh',
  left: '10vw',
  width: '80vw',
  height: '80vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  // backgroundColor: 'yellow',
  paddingLeft: '5vw',
  paddingRight: '5vw',
  display: 'flex',
  flexDirection: 'row',
};


const ProjectContainer = ({ project }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Modal
        open={isOpen}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
           <ReactPlayer
            width="40vw"
            height="100%"
            url={project.videoUrl} />
           <div className='info'
           >
             <div className='project'>
               <h3 className='section__title'>{project.name}</h3>
               <p className='project__description'>{project.description}</p>
               <br />
               <h4 className='section__title'>Details</h4>
               {
                 project.details.map((detail) =>
                   <li className='project__detail'>{detail}</li>
                 )
               }
             </div>
           </div>
        </Box>
      </Modal>
      <div className='project'>
        <h3>{project.name}</h3>

        <img src={project.appIcon} alt="app icon" className="app-icon"/>
        <br />

        <p className='project__short__description'>{project.short_description}</p>

        {project.livePreview && (
          <button
            type="button"
            onClick={()=> setOpen(true)}
            aria-label='source code'
            className='link link--icon'
            style={{
              marginTop: 20,
            }}
          >
            <PlayCircleIcon />
          </button>
        )}
      </div>
    </>
  )
}

export default ProjectContainer
