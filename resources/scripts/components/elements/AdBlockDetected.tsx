import React from 'react';
import { Button } from '@/components/elements/button/index';


const AdBlockDetectedFrame = () => {
    function refreshPage() {
        window.location.reload();
    }
    return(
        <div className='flex flex-col text-center justify-center items-center'>
            <div>
               <h1>AdBlocker Detected</h1>
            </div>
            <div>
               It looks like you're using an ad blocker. That's okay.  Who doesn't?  
            </div>
            <div>
                But without advertising-income, we can't keep making this site awesome.
            </div>
            <Button  onClick={refreshPage}  className={' mt-4'}>I understand, I have disabled my ad blocker.  Let me in!</Button>
        </div>
    )
};

export default AdBlockDetectedFrame;

