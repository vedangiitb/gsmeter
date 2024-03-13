import React from "react";
import { Bigheader,Points, } from "./MainContent";


function SurveyDescript({toShow}){
    if (toShow==1){
        return (
            <div>
                <Bigheader>GS Satisfaction Survey</Bigheader>
                <Points>The GS Satisfaction Survey, conducted in February, aimed to go beyond the General Secretaries’ manifestos in terms of gauging the institute’s satisfaction with the General Secretaries, their councils and their functioning. The survey was filled by 171 respondents with the following composition:</Points>
                <Points>78.95 Male, 15.2% Female, 0.58% Non-Binary, 5.26% Prefer not to say</Points>
                <Points>84.12% UG, 15.88% PG</Points>
                <Points>Note: Only PG responses have been taken into account for the analysis for GSAA (PG).</Points>
                <br></br>
            </div>
        )
    }

    else if (toShow ==2){
        return (
            <div>
                <Bigheader>GS Satisfaction Survey</Bigheader>
                <Points>The GS Satisfaction Survey, conducted in February, aimed to go beyond the General Secretaries’ manifestos in terms of gauging the institute’s satisfaction with the General Secretaries, their councils and their functioning. The survey was filled by 171 respondents with the following composition:</Points>
                <Points>78.95 Male, 15.2% Female, 0.58% Non-Binary, 5.26% Prefer not to say</Points>
                <Points>84.12% UG, 15.88% PG</Points>
                <Points>Note: Only PG responses have been taken into account for the analysis for GSAA (UG).</Points>
                <br></br>
            </div>
        )
    }
    else{
        return (
            <div>
                <Bigheader>GS Satisfaction Survey</Bigheader>
                <Points>The GS Satisfaction Survey, conducted in February, aimed to go beyond the General Secretaries’ manifestos in terms of gauging the institute’s satisfaction with the General Secretaries, their councils and their functioning. The survey was filled by 171 respondents with the following composition:</Points>
                <Points>78.95 Male, 15.2% Female, 0.58% Non-Binary, 5.26% Prefer not to say</Points>
                <Points>84.12% UG, 15.88% PG</Points>
                <br></br>
            </div>
        )
    }


}

export default SurveyDescript;