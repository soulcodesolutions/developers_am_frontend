import React from 'react';
import { Link, navigate } from 'gatsby';
import { JustAppear,  } from './SlideAnimation';

export const NextIcon = (props) => {
    return (
        <svg className="w-[20px] ml-[10px] font-bold" fill="#991b1b" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m13.022 14.999v3.251c0 .412.335.75.752.75.188 0 .375-.071.518-.206 1.775-1.685 4.945-4.692 6.396-6.069.2-.189.312-.452.312-.725 0-.274-.112-.536-.312-.725-1.451-1.377-4.621-4.385-6.396-6.068-.143-.136-.33-.207-.518-.207-.417 0-.752.337-.752.75v3.251h-9.02c-.531 0-1.002.47-1.002 1v3.998c0 .53.471 1 1.002 1z" fill-rule="nonzero" /></svg>

    )
}

export const ViewAll = ({ to = "" }) => {
    return (<div className="text-red-800  items-center">
        <JustAppear>

        <Link to={to}>
            <div className="flex items-center">

            <div className='font-bold hidden sm:block cursor-pointer'>
                View all
            </div>
            <div className="">
                <NextIcon />
            </div>
            </div>
        </Link>
        </JustAppear>

    </div>);
};

export const GoBack = ({ to = "" }) => {

    const handleBackClick = () => {
        const { history } = window;
        console.log(history)
        if (history && history.length > 1) {
          // If there's a history and we're not on the initial page
          // Get the previous page path
          navigate(-1)
        } else {
            navigate("/")
        }

        

    }

    return (<div className="text-red-800  items-center ">
        <JustAppear>

        <div onClick={() => handleBackClick()} className='cursor-pointer'>
            <div className="flex items-center">
            <div className="rotate-180">
                <NextIcon />
            </div>

            <div className='font-bold hidden sm:block cursor-pointer'>
                Back
            </div>
            </div>
        </div>
        </JustAppear>

    </div>);
};
