import React from "react";
import { features } from "./ProductFeatures";


export default function Features() {
    return (
        <>
            <div className="container-fluid pt-2">
                <div className="row px-xl-5 pb-3">
                    {features.map((val, ky) => (
                        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">

                            <div className="d-flex align-items-center bg-info mb-4"
                                style={{ padding: "30px" }}>
                                <h5 className="px-3">{val.icon}</h5>
                                <h5 className="font-weight-semi-bold m-0">{val.title}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
