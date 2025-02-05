import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { Roles } from "../utility";
import bg from "../assets/images/bg-2.png";
import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import ArrowRight from "../assets/icons/ArrowRight";

const Main = () => {
    const user = JSON.parse(localStorage.getItem("authData"));
    const history = useHistory();

    // redirect the user to the required dashboard if user is present
    if (user?.role === Roles.ADMIN) {
        history.push("/admin/dashboard");
    }
    if (user?.role === Roles.MENTOR) {
        history.push("/mentor/dashboard");
    }
    if (user?.role === Roles.STUDENT) {
        history.push("/mentee/dashboard");
    }

    const [value, setValue] = useState("Admin");

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    console.log("selection", value);

    return (
        <div className="w-full h-screen flex items-center bg-gray-50">
        <div className="flex-2 bg-white h-full flex flex-col items-center justify-center shadow-md rounded-lg">
            <div className="w-full">
                <h1
                    style={{ fontSize: "42px", fontWeight: "700", letterSpacing: "0.5px", color: "#333" }}
                    className="w-full text-center mb-3"
                >
                    <span className="text-teal-600 animate-bounce">Welcome to</span> 
                </h1>
                <h1
                    style={{ fontSize: "36px", fontWeight: "600" }}
                    className="w-full text-center text-teal-600"
                >
                    STEPuHP Mentoring System
                </h1>
                <p className="text-center text-gray-600 text-sm font-light">
                Empowering premed students to succeed through mentorship.
            </p>
            </div>
                <img src={bg} alt="" className="w-1/2" />
            </div>
            <div className="h-full w-1/2 flex flex-col items-center justify-center bg-teal-600 text-white p-10 gap-8">
                <h1>Select Your User Role</h1>
                
                <FormControl>
                    <RadioGroup
                        value={value}
                        onChange={handleChange}
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel
                            value="Admin"
                            control={
                                <Radio
                                    sx={{
                                        color: "white",
                                        "&.Mui-checked": {
                                            color: "white",
                                        },
                                    }}
                                />
                            }
                            label="Admin"
                        />
                        <FormControlLabel
                            value="Mentor"
                            control={
                                <Radio
                                    sx={{
                                        color: "white",
                                        "&.Mui-checked": {
                                            color: "white",
                                        },
                                    }}
                                />
                            }
                            label="Mentor"
                        />
                        <FormControlLabel
                            value="Mentee"
                            control={
                                <Radio
                                    sx={{
                                        color: "white",
                                        "&.Mui-checked": {
                                            color: "white",
                                        },
                                    }}
                                />
                            }
                            label="Mentee"
                        />
                    </RadioGroup>
                </FormControl>
                <Link
                    to={{
                        pathname: `/${value.toLowerCase()}`,
                        state: value,
                    }}
                    className="bg-white py-2 px-3 rounded-full flex items-center justify-center gap-x-2 w-1/2 text-teal-700 group"
                >
                    Next
                    <ArrowRight
                        alt={false}
                        myStyle={"h-4 w-4 group-hover:translate-x-2 transform transition"}
                    />
                </Link>
            </div>
        </div>
    );
};

export default Main;
