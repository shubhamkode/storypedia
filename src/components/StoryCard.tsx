import React from 'react';

interface Story{
    id: string, 
    headline: string,
    shortDesc: string,
    longDesc: string,
    dateCreated: Date,
}

interface IStoryCardProps{
    story: Story
}

const StoryCard:React.FC<IStoryCardProps> = ({story}):JSX.Element =>{


    return (
        <div className='p-2 mb-3 border rounded-md cursor-pointer min-w-[300px]'>
            <a className="block">
                <img className='object-cover w-full h-56 shadow-xl rounded-xl'
                    src="https://www.hyperui.dev/photos/university-1.jpeg"
                />
                <div className="p-4">
                    <h5 className="text-2xl font-bold text-slate-300">
                        {story.headline}
                    </h5>
                    <p className='mt-2 text-white'>{story.shortDesc+"..."}</p>
                </div>
            </a>
        </div>
    )
}
export default StoryCard;