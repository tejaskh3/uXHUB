import { HuddleIframe } from "@huddle01/iframe";
import { iframeApi } from '@huddle01/iframe';

function Huddle() {

    return (

        <div>
            <HuddleIframe roomUrl="https://iframe.huddle01.com/" style={{width:'1500px',height:'1000px' }} />
        </div>
    );
}
export default Huddle
