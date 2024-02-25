import React from 'react'

export default function Form2() {
    return (
        <div>
            <form>
                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label htmlFor="validationDefault01">Nitrogen</label>
                        <input type="text" className="form-control" id="validationDefault01" placeholder="Nitrogen" value="" required/>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="validationDefault02">Potassium</label>
                        <input type="text" className="form-control" id="validationDefault02" placeholder="Potassium" value="" required/>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="validationDefault02">Phosphorus</label>
                        <input type="text" className="form-control" id="validationDefault02" placeholder="Phosphorus" value="" required/>
                    </div>
                    <div className="col-md-4 mb-3">
                        <select className="custom-select">
                            <option selected>Type of Soil</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="custom-select custom-select-lg mb-3">
                        <select className="custom-select">
                            <option selected>Type of Crop</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="validationDefault02">Temperature</label>
                        <input type="text" className="form-control" id="validationDefault02" placeholder="Temperature" value="" required/>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="validationDefault02">Rainfall</label>
                        <input type="text" className="form-control" id="validationDefault02" placeholder="Rainfall" value="" required/>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="validationDefault02">Humidity</label>
                        <input type="text" className="form-control" id="validationDefault02" placeholder="Humidity" value="" required/>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="validationDefault02">pH</label>
                        <input type="text" className="form-control" id="validationDefault02" placeholder="" value="" required/>
                    </div>

                </div>
                <button className="btn btn-primary" type="submit">Submit form</button>
            </form>
        </div>
    )
}
