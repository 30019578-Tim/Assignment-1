import React, { Component } from "react";
import SCP from "./data.json";

const SCPData = SCP.map(

    (SCP) =>
    {
        return(
            <div key={SCP.id}>
                <div class="container shadow-lg sec">
                    <h2 className="card-title section">Item #: {SCP.SCP}</h2>
                    <h4 className="card-text section">Object Class:</h4>
                    <p className="card-text section">{SCP.ObjectClass}</p>
                    <h4 className="card-text section">Image:</h4>
                    <img class="imgs" src={SCP.Images} />
                    <h4 className="card-text section">Procedures:</h4>
                    <p className="card-text section">{SCP.Procedures}</p>
                    <h4 className="card-text section">Description:</h4>
                    <p className="card-text section">{SCP.Desicription}</p>
                    <h4 className="card-text section">Reference:</h4>
                    <p className="card-text section">{SCP.Reference}</p>
                    <p></p>
                </div>
            </div>
        );
    }

);

class Content extends Component
{
    render()
    {
        return(
            <div class="album py-5 colour">
                <div class="container">
                    {SCPData}
                </div>
            </div>
        );
    }
}
export default Content;