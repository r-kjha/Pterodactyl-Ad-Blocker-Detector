# Pterodactyl-Ad-Blocker-Detector

This will block adblockers on all of the server pages, The ad blocked page is very easy to edit so you can make it look nicer.

<img width="620" alt="Screenshot 2022-08-30 at 00 14 36" src="https://user-images.githubusercontent.com/84676487/187314765-58c5e1d6-7ce9-4b0e-be1a-85dbeda2af0a.png">

### Warning, This may break any themes or addons you have on the panel, If it does send me a message and I can see why it isnt working.

Install instructions:
Run these:
- If you do not have yarn installed run through this https://pterodactyl.io/community/customization/panel.html
- ```yarn add adblock-detect-react```
- Download all folders and upload them to the panel.
- Run ```yarn build:production```


If you run into any issues or want to commision me for custom work dm me on discord Reflex#4444


```typescript
import PageContentBlock, { PageContentBlockProps } from '@/components/elements/PageContentBlock';
import React from 'react';
import { ServerContext } from '@/state/server';

------------2 lines Below This 
import { useDetectAdBlock } from 'adblock-detect-react';
import AdBlockDetectedFrame from './AdBlockDetected'
-------------------------

interface Props extends PageContentBlockProps {
    title: string;
}

const ServerContentBlock: React.FC<Props> = ({ title, children, ...props }) => {
    const name = ServerContext.useStoreState((state) => state.server.data!.name);
--------1 Line below this
    const adBlockDetected = useDetectAdBlock();
-------------------------

    return (
        <PageContentBlock title={`${name} | ${title}`} {...props}>

-------2 Lines Below this {Children} already exists 
            {!adBlockDetected && <div>{children}</div>}
            {adBlockDetected && <AdBlockDetectedFrame/>}
-------------------------------------------
        </PageContentBlock>
    );
};

export default ServerContentBlock;
```
