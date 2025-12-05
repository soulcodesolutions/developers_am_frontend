import React, { useState } from "react";
// import YouTube from 'react-youtube';
import ReactPlayer from 'react-player'
import Popup from '../Popup';


function VideoSection({ videoSection = [] }) {

    const [selectedItem, setSelectedItem] = useState(null)

    return (
        <div className="">
            {
                videoSection?.length > 0 && <>
                    <div className="p-[20px] rounded-lg bg-slate-100 mt-[50px]">
                        {/* {console.log(videoSection)} */}
                        <div className="grid grid-cols-1  sm:grid-cols-2  lg:grid-cols-3 gap-[20px] py-[20px]">
                            {
                                videoSection?.map(item => 
                                <div
                                    key={item?.video_url}
                                    onClick={() => setSelectedItem(item)}>
                                    <VideoPreviewCards item={item} />
                                </div>
                                )
                            }

                        </div>

                    </div>

                </>
            }
            <Popup
                onClose={() => setSelectedItem(null)}
                isOpen={selectedItem}
                heading={selectedItem?.name || ""}
            >
                {
                    selectedItem && <VideoFUll item={selectedItem} />
                }
            </Popup>
        </div>);
}

const VideoPreviewCards = ({ item }) => {

    

    return (<div className="  shadow rounded-xl bg-white overflow-hidden relative" >
        <div className="absolute w-full h-full _bg-red-100/50 bg-transparent left-0 top-0 z-[30]"></div>

        <div className="max-h-[250px] overflow-hidden">

            <ReactPlayer
                className='react-player bg-black'
                url={normalizeUrl(item?.video_url)}
                // url="https://youtu.be/UGUTb6QaGTU?si=jnQFFLpqDyeFoPuV"
                width='100%'
                height='100%'

            />
        </div>
        <div className="bg-white p-[10px] font-bold text-[18px] truncate py-[20px]">

            { item?.title}
        </div>
    </div>)

}


const VideoFUll = ({ item }) => {

    

    return (<div className="  bg-white overflow-hidden relative h-full min-h-screen" >
        {/* <div className="absolute w-full h-full bg-transparent"></div> */}

        <div className="h-full">

            <ReactPlayer
                className='react-player sm:min-h-[550px] h-full bg-black '
                url={normalizeUrl(item?.video_url)}
                // url={"https://www.facebook.com/watch/?v=1877345239521187"}
                width='100%'
                controls={true}
                height={window?.innerWidth <= 450 ? '100%' : undefined}

            />
        </div>
        {/* <div className="bg-white p-[10px] font-bold text-[18px]">

            {item?.title}
        </div> */}
    </div>)

}

const normalizeUrl = (url) => {
    if (!url) return url;
    
    // Convert Facebook Reels URL to a format react-player can handle
    if (url.includes('facebook.com/reel')) {
        // Extract reel ID and convert to watch format
        const reelIdMatch = url.match(/\/reel\/(\d+)/);
        if (reelIdMatch) {
            return `https://www.facebook.com/watch/?v=${reelIdMatch[1]}`;
        }
    }
    
    // Handle share URLs
    if (url.includes('fb.watch')) {
        return url; // react-player should handle these
    }
    
    return url;
};


export default VideoSection;