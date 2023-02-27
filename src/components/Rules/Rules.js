import React from 'react'
import {saveAs} from 'file-saver';
import filePath1 from "../../utils/Annexure1.pdf";
import filePath2 from "../../utils/Annexure2.pdf";
import "./Rules.css";
function Rules() {
  const handleAnnexureI=()=>{
    saveAs(filePath1,"Annexure1.pdf");
  }
  const handleAnnexureII=()=>{
    saveAs(filePath2,"Annexure2.pdf");
  }
  return (
    <div className='absolute'>
      <div className='flex flex-col justify-center
      mt-[75px] relative'>
        {/* Eligibility */}
        <div className='flex flex-col my-[2.5rem] border-[2px]  border-solid mx-[20px]'>
          <div className='flex justify-center items-center mt-[15px] mb-[30px] text-3xl font-bold '>
            <h1>Eligibility Criterias</h1>
          </div>
          <div className='p-[50px] text-[21px]'>
            <h2>
              ➢Only students of Nit Arunachal Pradesh who are in the
              <strong> Final Year </strong>of their respective courses are eligible for On-campus placement.
            </h2>
            <h2>
              ➢Students who are interested in placements must submit <strong>Annexure-I </strong>of the declaration form provided below before the commencement of Placement for that year.
            </h2>
            <h2>
              ➢Students not interested in Placement activities must fill <strong> Annexure-II</strong> with appropriate reasons.
            </h2>
          </div>
          <div className='flex flex-row items-center justify-center p-[2px] mb-[15px] text-[20px]'>
            <div>
              <h2>Download : </h2>
            </div>
            <div className='button mx-[19px] text-center'>
              <button id="downloadBtn1" onClick={handleAnnexureI}value="download1">Annexure-I</button>
            </div>
            <div className='button mx-[19px] text-center'>
              <button id="downloadBtn2" onClick={handleAnnexureII}value="download2">Annexure-II</button>
            </div>
            
          </div>
        </div>
        {/*Rules*/}
        <div className='flex flex-col my-[2.5rem] border-[2px]  border-solid mx-[20px]'>
          <div className='flex justify-center items-center mt-[15px] mb-[30px] text-3xl font-bold '>
            <h1>Rules & regulations</h1>
          </div>
          <div className='p-[50px] text-[21px]'>
            <h2>
              ➢Students must provide with the correct documents concerning them to both companies and placement cell, Failing which student will be removed from the placement process.
            </h2>
            <h2>
              ➢Students must apply for all the companies for which they are eligible.
            </h2>
            <h2>
              ➢ Students must attend all the general meetings organized by T&P Coordinator for placements irrespective of the
              excuses.
            </h2>
            <h2>
              ➢ Students must  attend all the Pre-Placement Talks organized by Employers/Organizations.
            </h2>
            <h2>
              ➢ Students must attend all Mock Interview Sessions, GDs, Skill Development Programs forming part of the Placement
              Process under any circumstances
            </h2>
            <h2>
              ➢ Students must not remain absent during the Placement Season without the consent of the TPO office or T&P Branch
              Coordinator.
            </h2>
            <h2>
              ➢ Students must abide by all rules and regulations of T&P cell of NIT Arunachal Pradesh.
            </h2>
          </div>
        </div>
        {/*Offers Criteria*/}
        <div className='flex flex-col my-[2.5rem] border-[2px]  border-solid mx-[20px] p-[50px] pt-[17px] text-[21px]'>
          <div className='flex justify-center items-center  mb-[30px] text-3xl font-bold '>
            <h1>Job Offers</h1>
          </div>
          <div className=' flex flex-col'>
            <div className='flex flex-row'>
            <div>➢</div>
            <div><h2>Students are eligible for 1 job offer in any 3 out of the 4 ranges, that are :
            </h2>
            </div>
            </div>
            <div>
            <ul className='ml-[1.3%]'>
              <li>
                1-7 LPA:
              </li>
              <li>
                7-10 LPA:
              </li>
              <li>
                10-16 LPA:
              </li>
              <li>
                16+ LPA:
              </li>
            </ul>
            </div>
            <div>
              <h2>
                ➢A student can secure  maximum of <b>3</b> offers after which He/She will be removed from the placement process.
              </h2>
              <h2>
                ➢If a Student has secured an offer in a higher range then He/She will not be permitted to apply for companies offering package below that range.
              </h2>
              <h2>
                ➢A student can apply in many companies in a given range simultaneously, until they recieve an offer in that range.
              </h2>
              <h2>
                ➢It is students responsibility to inform about their offers with the placement cell.
              </h2>
              <h2>
                ➢All the decisions regarding if a offer is valid or not will solely be taken by Placement cell.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rules
