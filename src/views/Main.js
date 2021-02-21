import React, {useState} from "react";

import Navbar from "./../components/Navbar.js";
import ThreeBoxes from "../components/ThreeBoxes";
import SearcContent from "../components/SearchContent";
import {DONE, INITIAL, LOADING} from "../utils/consts";
import Loader from '../components/Loader'
import Results from "../components/Results";

export default function Landing() {
    const [status, setStatus] = useState(INITIAL)
    const [result, setResult] = useState()
    const handleAnalyze = async (text) => {
        setStatus(LOADING)
        const res = await fetch(`${process.env.REACT_APP_ELASTIC_URL}/efsa/_search`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                "query": {
                    "multi_match": {
                        "query": text,
                        "fields": ["concluded_part.english_stemmed^4", "conclusion.english_stemmed^2", "abstract.english_stemmed^2", "title.english_stemmed"]
                    }
                }
            })
        })
        const json = await res.json()
        setResult(json)
        setStatus(DONE)
    }
    const handleReset = () => {
        setStatus(INITIAL)
    }
    return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
            style={{
              minHeight: "75vh"
            }}>
          <div className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: "url('https://www.txstate.edu/cache78a0c25d34508c9d84822109499dee61/imagehandler/scaler/gato-docs.its.txstate.edu/jcr:21b3e33f-31c9-4273-aeb0-5b5886f8bcc4/fake-fact.jpg?mode=fit&width=1600')"
              }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
              {status === LOADING ? (
                  <Loader />
              ) : status === DONE ? (
                  <Results result={result} reset={handleReset}/>
              ) : (
                  <SearcContent onAnalyze={handleAnalyze}/>
              )}
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px", transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <ThreeBoxes />
      </main>
    </>
    );
}