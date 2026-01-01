import React, { useState, type FormEvent } from 'react'
import Navbar from '~/components/Navbar';


const Upload = () => {

    const [isProcessing, setIsProcessing] = useState(false);
    const [statusText, setS tatusText] = useState("");
    const handleSubmit = (e:FormEvent<HTMLHtmlElement) => {

    }

  return (
    
    <>
    <main>
        <Navbar/>
            <section className="main-section bg-[url('resume-scorer/public/imgs/bg-main.svg')] bg-cover">
                <div className="page-heading">
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

                    (!isProcessing && (
                        <form id='upload-form' onSubmit={handleSubmit} action=""></form>
                    ))
                </div>
            </section>
    </main>
    </>
  )
}

export default Upload
