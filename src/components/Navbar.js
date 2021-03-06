import React from 'react'

export default function Navbar(props) {

    return (
        <div className="row">
            <div className="col-md-6">
                <h1 className="title">NotifyWeather</h1>
            </div>

            <div className="col-md-6">
                <form className="region" onSubmit={(e) => { props.changeLocation(e) }}>
                    <input type="text" className="regioninput" placeholder="Select your region" onChange={(e) => { props.changeRegion(e.target.value) }} />
                </form>
            </div>

        </div>
    )
}

