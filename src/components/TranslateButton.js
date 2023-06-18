import React from "react";

export default function TranslateButton({ location,  }) {
    const languages = []
    let translatedUrl = location.pathName.repla
    return (
        <>
            <p>
                Go to
                <Link to="/home"> home</Link>
            </p>
        </>
    )
}
