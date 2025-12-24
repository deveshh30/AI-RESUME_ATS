import React from 'react'
import { Link } from 'react-router'
import Score from './Score'

const ResumeCard = ({ resume }: { resume: Resume }) => {
  return (
    <div className="resume-card bg-gray-200">
      <Link to={`/resume/${resume.id}`} className='resume-card-1 animate-in fade-in duration-1500 flex flex-row items-center justify-between gap-4 w-full'>
        
        <div className="flex-1 flex flex-col gap-1">
            <h2 className='!text-black font-bold break-words '>
                {resume.companyName}
            </h2>

            <h3 className='text-lg break-words text-shadow-gray-500'> {resume.jobTitle} </h3>
        </div>

        <div className="flex-shrink-0">
          <Score score={resume.feedback?.overallScore ?? 0} />
        </div>
      </Link>

      <div className='mt-2 animate-in duration-1500 fade-in'>
        <div className="w-full h-[35vh] rounded-md ">
          <img src={resume.imagePath} alt={`${resume.companyName} logo`} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
    
  )
}



export default ResumeCard
