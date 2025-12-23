import React from 'react'
import { Link } from 'react-router'

const ResumeCard = ({ resume }: { resume: Resume }) => {
  return (
    <div className="resume-card bg-amber-400">
      <Link to={`/resume/${resume.id}`} className='resume-card-1 animate-in fade-in duration-1500'>
        <div className="flex flex-col gap-2">
            <h2 className='!text-black font-bold break-words '>
                {resume.companyName}
            </h2>

            <h3 className='text-lg break-words text-shadow-gray-500'> {resume.jobTitle} </h3>
        </div>
      </Link>
    </div>
  )
}

export default ResumeCard
