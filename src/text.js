import React from 'react';
import photo from './images/photo.jpg';


import PhotoCarousel from './carse';

function Text()  {  
    return(

<div>
<h2>Our school is the best</h2>
<img src={photo}  height= "400px" width="800px" align="center" alt="a"/>
<h2 style ={{ color:'blueviolet' }}><u>MISSION</u></h2>
<p >
<b>Academic Excellence:</b> Students excel academically through a challenging and comprehensive curriculum that prepares them for higher education and future careers.<br/>
<b>Innovation and Creativity:</b> Innovation and creativity are at the forefront of our teaching methods, encouraging students to think outside the box and develop unique solutions to real-world problems.<br/>
<b>Character Development: </b>Integrity, respect, and empathy are cultivated, ensuring that students grow into ethical and socially responsible individuals.<br/>
<b>Global Awareness:</b> Our diverse and inclusive environment promotes cultural understanding and global awareness, preparing students to thrive in a multicultural world.<br/>
<b>Community Engagement:</b> Strong partnerships with families, local organizations, and the broader community enhance the educational experience and create opportunities for meaningful contributions and service.<br/>
<b>Well-rounded Development: </b>Extracurricular activities, arts, sports, and social events are integral to the school experience, promoting a balanced and holistic development for all students.<br/>
<b>Lifelong Learning:</b> The love for learning is instilled in every student, fostering curiosity and the desire for continuous growth throughout their lives.<br/><br/>
<h2 style={{ color: 'blue' }}>Customizing the Vision Statement</h2>
<h3>To make this vision statement specific to your school, consider the following steps:</h3><br/>

<b>Identify Core Values:<br/></b> Reflect on the core values and principles that your school community holds dear. Incorporate these values into the vision statement.<br/>

<b>Set Long-term Goals: </b><br/>Think about the long-term goals you want to achieve. This could include academic achievements, community involvement, or advancements in technology and facilities.<br/>

<b>Engage Stakeholders:</b><br/> Involve teachers, students, parents, and other stakeholders in the process. Their input can provide valuable insights and ensure that the vision resonates with the entire school community.<br/>

<b>Be Inspirational: </b><br/>The vision statement should inspire and motivate. Use positive and aspirational language to paint a picture of the future you want to create.<br/>
</p><h2 style={{ color: 'blue' }}>OPCOMING EVENTS</h2>
<PhotoCarousel/>

</div>

);
}
export default Text;