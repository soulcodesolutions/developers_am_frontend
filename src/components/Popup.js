import React from 'react';

import Outsideclick from './OustsideClick';

const IconClose = () => <svg fill='currentColor' width="16" height="16" viewBox="0 0 24 24"><path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" /></svg>;


function Popup(props) {

    const { isOpen = true, content = null } = props

    const PopupContainer = () => {
        return (
            <div className="fixed top-0 left-0 bg-black/50 w-full h-full z-[100]">
                <div className="flex justify-center h-screen items-center">
                    <div className="absolute  rounded-xl w-fit overflow-auto ">
                        <Outsideclick onOutsideClick={props.onClose}>
                            <div className="w-full">

                            <div className="min-w-[300px] font-bold p-5 text-white bg-red-900 rounded-t-xl">
                                <div className="flex items-center justify-between">
                                    <div>
                                        {props?.heading}
                                    </div>
                                    <div className='cursor-pointer' onClick={props.onClose}>
                                        <IconClose />
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white h-full w-full rounded-b-xl  p-5 overflow-y-scroll max-h-[50vh]">
                                {props?.children}
                            </div>
                            </div>
                        </Outsideclick>
                    </div>
                </div>
            </div>
        )
    }

    return (<div>

        {isOpen && <PopupContainer />}
    </div>);
}

export default Popup;