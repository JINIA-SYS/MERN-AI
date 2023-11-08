
import { surpriseMePrompts } from "../constants"
import FileSaver from "file-saver"



//Random Prompt Generating Function
export const Prompts = (prompts) => {

    const randomindex = Math.floor(Math.random() * surpriseMePrompts.length)
    const randomPrompts = surpriseMePrompts[randomindex]
    console.log(randomPrompts)
    if (randomPrompts === prompts) { return Prompts(prompts) }
    return randomPrompts;
}

//Image File Downloading Function
export const filedownloader=async(_id,Images)=>{
    FileSaver.saveAs(Images,`AI-Image-${_id}.jpg`)


}