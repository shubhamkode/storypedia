import React from 'react';
import StoryList from './StoryList';

import { useSelector,useDispatch } from "react-redux";
import { RootState } from "../store";
import { storyActions } from "../store/storySlice";

interface IBodyProps{

}

const Body:React.FC<IBodyProps> = ():JSX.Element =>{

    const storyData = useSelector((state: RootState) => state.stories.stories);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(storyActions.fillStory());
        dispatch(storyActions.addStory({
            id: "eatohseu",
            dateCreated: new Date().toString(),
            longDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus explicabo maiores commodi. Tempora vero consequatur dolores, praesentium expedita nam maxime",
            shortDesc:"One",
            headline: "New Story",
        },),);
        dispatch(storyActions.addStory({
            id: "eatohs",
            dateCreated: new Date().toString(),
            longDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus explicabo maiores commodi. Tempora vero consequatur dolores, praesentium expedita nam maxime",
            shortDesc:"two",
            headline: "New Story",
        },),);
     }, []);

    return (
        <div className='relative top-[6rem] text-white p-3 rounded-full'>
            <div className="">
                <div className="">
                    <StoryList storyData={storyData}/>
                </div>
            </div>
        </div>
    )
}
export default Body;