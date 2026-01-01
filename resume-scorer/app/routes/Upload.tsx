import React, { useState, type FormEvent } from 'react'
import Navbar from '~/components/Navbar';


const Upload = () => {

    const [isProcessing, setIsProcessing] = useState(false);
    const [statusText, setStatusText] = useState("");
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }


  return (
    
    <>
    <main>
        <Navbar/>
            <section className="main-section bg-[url('public/imgs/bg-main.svg')] bg-cover">
                <div className="page-heading py-15">
                    <h1>Smart Feedback To Accomplish Your Goal</h1>
                    {isProcessing ? (
                        <>
                            <h2>{statusText}</h2>
                            <img src="resume-scorer/public/images/search.gif" alt="" />
                        </>
                    ) : (
                        <h2>Drop your resume , for ATS score and enchancement tips.</h2>
                    )
                    }

                    {!isProcessing && (
                        <form id='upload-form' onSubmit={handleSubmit} className='flex-col flex gap-4 mt-10'>
                            <div className="form">
                                <label htmlFor="company-name">Company-Name</label>
                                <input type="text" name='company-name' placeholder='Company Name' id='company-name' />
                            </div>
                            <div className="form">
                                <label htmlFor="job-title">Job-Title</label>
                                <input type="text" name='job-title' placeholder='Job Title' id='job-title' />
                            </div>
                            <div className="form">
                                <label htmlFor="description">Job-description</label>
                                <textarea rows={5} name='job-description' placeholder='Job Title' id='job-description' />
                            </div>
                            <div className="form">
                                <label htmlFor="uploader">Upload Resume</label>
                                <div>Uploader</div>
                            
                            </div>

                            <button className='primary-button' type='submit'>Analyze Resume</button>
                        </form>
                    )}
                </div>
            </section>
    </main>
    </>
  )
}

export default Upload
