
import React, { useState } from "react";
import "../Progress/progress.scss";
import Accordion from "react-bootstrap/Accordion";

export default function Progress() {
  const [info] = useState([{title:"Hard Skills", descr:"HTML5, CSS/SASS/SCSS/Less, JavaScript, React,   Bootstrap, Tailwinds css, Node js(basic), Figma, Photoshop, API, Git/GitHub"},
                           {title:"Soft Skills", descr:"Conveying technical concepts clearly. Active listening and collaboration with team members.Analyzing and creatively resolving complex issues. Adaptability in the face of challenges. Writing clean, meticulous code.Thorough testing and debugging. Working harmoniously within cross-functional teams.Prioritizing tasks to meet deadlines.Efficient multitasking across projects. Willingness to mentor and share knowledge. Staying updated on industry trends.Eagerness to learn new languages and frameworks." },
                           {title:"Languages", descr:"Armenian: Native, Russian: Proficient, English: Independent"},
                           {title:"Education", descr:"GITC, ARDA - 01/08/2022 – 27/12/2023 "},
                           {title:"Experiance", descr:"Development - 08/01/2024 – Current "}])

  return (
      <div className="progress">
        <Accordion defaultActiveKey="0">
          {
            info.map((el,index)=>  <Accordion.Item key={index} eventKey={index}>
            <Accordion.Header>{el.title}</Accordion.Header>
            <Accordion.Body>
              {el.descr}
            </Accordion.Body>
            </Accordion.Item>)
          }
        </Accordion>
      </div>
        
   
  )
}
