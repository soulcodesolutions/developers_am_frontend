import React from 'react';
import MarkdownView from 'react-showdown';

const Instagram_icon = () => {
    return (<>
        <svg xmlns="http://www.w3.org/2000/svg" fill='#7f1d1d' width="24" height="24" viewBox="0 0 24 24"><path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z" /></svg>
    </>)
}

const Facebook_icon = () => {
    return (<>
        <svg xmlns="http://www.w3.org/2000/svg" fill='#7f1d1d' width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg>
    </>)
}

const Website_icon = () => {
    return (<>
       <svg width="24" height="24" fill='#7f1d1d' xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12m2.557 16h-5.115c.546 2.46 1.441 4.114 2.558 5.744 1.194-1.741 2.041-3.41 2.557-5.744m-7.157 0h-4.567c1.236 2.825 3.704 4.972 6.755 5.716-1.048-1.733-1.783-3.658-2.188-5.716m13.767 0h-4.567c-.391 1.988-1.095 3.887-2.175 5.694 3.012-.763 5.517-2.895 6.742-5.694m-14.005-6h-4.962c-.267 1.313-.267 2.685 0 4h4.915c-.119-1.329-.101-2.672.047-4m7.661 0h-5.647c-.165 1.326-.185 2.672-.053 4h5.753c.133-1.328.111-2.673-.053-4m6.977 0h-4.963c.148 1.328.166 2.671.048 4h4.915c.26-1.285.273-2.648 0-4m-12.156-7.729c-3.077.732-5.567 2.886-6.811 5.729h4.653c.435-2.042 1.178-3.985 2.158-5.729m2.355-.048c-1.089 1.77-1.91 3.453-2.a463 5.777h4.927c-.534-2.246-1.337-3.948-2.464-5.777m2.368.069c1.013 1.812 1.733 3.76 2.146 5.708h4.654c-1.232-2.816-3.762-4.958-6.8-5.708"/></svg>
    </>)
}

const SocialMedias = (props) => {
    const { instgram :_Instgram, facebook :_Facebook, website : _Website } = props

    return (<div>
        <div className="flex justify-left items-center mt-[20px]">
            {
                _Facebook &&

                <div className="mr-[15px]">
                    <a href={`${_Facebook}`} target='_blank'>
                       
                        <Facebook_icon />
                    </a>
                </div>
            }
            {
                _Instgram &&
                <div className="mr-[15px]">
                    <a href={`${_Instgram}`} target='_blank'>
                        <Instagram_icon />
                    </a>
                </div>
            }
            {
                _Website &&
                <div className="mr-[15px]">
                    <a href={`${_Website}`} target='_blank'>
                        <Website_icon />
                    </a>
                </div>
            }
        </div>
    </div>)
}



function PopupContent(props) {

    const { item = {} } = props



    return (<div className=''>
        <div className="photo mx-auto rounded-xl overflow-hidden  max-w-[200px]">
            <div className=" min-h-[150px] max-h-[200px]">
                <img src={process.env.GATSBY_STRAPI_API_URL + item?.photo?.url} alt="" />
            </div>
        </div>
        <div className="text-[20px] text-center pt-[20px]">
            {item?.name}
        </div>
        <div className="text-[16px] text-center  text-slate-500">
            {item?.position}
        </div>
        <div className="text-[16px] text-  pt-[20px] popup_container">
            <MarkdownView
                markdown={item?.description?.data?.description}
                options={{
                    openLinksInNewWindow: true,
                    simplifiedAutoLink: true,
                }}
                components={{ SocialMedias }}

            />

        </div>
    </div>);
}

export default PopupContent;