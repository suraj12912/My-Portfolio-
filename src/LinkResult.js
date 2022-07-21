 import { useState } from "react"
 import {CopyToClipboard} from 'react-copy-to-clipboard';

const LinkResult = ({inputValue}) => {
    console.log(inputValue)
    const [shortenLink,setShortenLink] = useState("hello world");
    const [copied,setCopied] = useState(false);

    useEffect(() => {
        const timer = setTimeout(()=> {
            setCopied(false);
        },1000);
    
        return () => clearTimeout(timer);
    }, [copied]);

    return (
        <div className="result">
            <p>{shortenLink}</p>
            <CopyToClipboard text="{shortenLink}" onCopy={()=>setCopied(true)}>
               <button className={copied ? "copied" : ""}>Copy to cilpboard</button>
            </CopyToClipboard>
        </div>
    )
}

export default LinkResult