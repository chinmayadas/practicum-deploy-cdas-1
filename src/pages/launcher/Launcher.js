import React from "react";
import { oauth2 as SMART } from "fhirclient";

// Source: https://codesandbox.io/s/fhir-client-react-react-router-context-0q3n8?file=/src/components/Launcher.js:0-1625

// Authenticate using React Component
export default function Launcher() {
    // Component Mount
    SMART.authorize({
        // clientId: Obtained from SMART-on-FHIR authenticator after registration (e.g. Cerner)
        clientId: "",
        scope: "launch profile fhirUser openid online_access user/Patient.read user/Observation.read",
        // redirectUri: Endpoint for your application frontend
        redirectUri: "http://0.0.0.0:8300/",
        completeInTarget: true,
        // TESTING: Define fhirServiceUrl to bypass authentication
        fhirServiceUrl: "http://hapi.fhir.org/baseR4",
        // Local server
        // fhirServiceUrl: "http://0.0.0.0:8301/hapi-fhir-jpaserver/fhir/"
        // iss: for standalone launch
    });

    // Render prior to redirect
    return (
        <div>Launching...</div>
    );

}