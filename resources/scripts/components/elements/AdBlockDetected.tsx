import React from 'react';
import { Button } from '@/components/elements/button/index';


const AdBlockDetectedFrame = () => {
    function refreshPage() {
        window.location.reload();
    }
    return(
        <div className='flex flex-col text-center justify-center items-center'>
            <div>
               <img src="https://i.imgur.com/3fPLTAL.png" alt="TeroHost" width="128" height="128"/>
               <br>
            </div>
            <div>
               <h1 className='Text-xl' >ADBLOCKER DETECTED</h1>
               <br>
            </div>
            <div>
               It looks like you're using an ad blocker. That's okay.  Who doesn't?  
            </div>
            <div>
               But without advertising-income, we can't keep making this site awesome.
               <br>
            </div>
            <Button  onClick={refreshPage}  className={' mt-4'}>I understand, I have disabled my ad blocker.  Let me in!</Button>
        </div>
    )
};

export default AdBlockDetectedFrame;

