import React from 'react'
import "./Skills.css"
import { skillArr } from "../Assets/Data"
import SkillBox from './SkillBox';


function Skills() {
    return (
        <div className="skillsBG">
            <h2 className="stageHeadline"> Skills/ Portfolio </h2>

            <div className="gridBox">
                {skillArr.map((item) =>
                    <div key={item.titel} className="gridItem">
                        <SkillBox item={item} />
                    </div>
                )}

            </div>

            <div className="skillsWave " >

                <svg width="1266px" height="435px" viewBox="0 0 1266 435" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                    <title>wave1</title>
                    <defs>
                        <linearGradient x1="50%" y1="14.2240376%" x2="50%" y2="100%" id="linearGradient-1">
                            <stop stop-color="#FF6E49" offset="0%"></stop>
                            <stop stop-color="#421D9E" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <g id="1.0-Desktop-View" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="2.-Skills" transform="translate(-24.000000, -248.000000)" fill="url(#linearGradient-1)">
                            <g id="Group-4" transform="translate(2.000000, 182.000000)">
                                <path d="M98.0479167,435.061841 C154.314583,435.061841 205.904167,382.740892 252.5,298.722915 C299.095833,214.704938 368.792125,66 465.5,66 C562.207875,66 723.138093,316.747079 845.34168,316.747079 C967.545268,316.747079 1037.87827,479.323186 1128.87159,479.323186 C1189.5338,479.323186 1242.5766,486.548791 1288,501 L22,501 C35.1875,457.041227 60.5368056,435.061841 98.0479167,435.061841 Z" id="wave1"></path>
                            </g>
                        </g>
                    </g>
                </svg>

            </div>
            <div className="skillsWave " >

                <svg width="1438px" height="465px" viewBox="0 0 1438 465" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                    <title>wave2</title>
                    <defs>
                        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                            <stop stop-color="#D23152" offset="0%"></stop>
                            <stop stop-color="#421D9E" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <g id="1.0-Desktop-View" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="2.-Skills" transform="translate(-2.000000, -218.000000)" fill="url(#linearGradient-1)">
                            <g id="Group-4" transform="translate(2.000000, 182.000000)">
                                <path d="M42.0079588,246.74509 C74.5287889,121.831523 90.0076651,42.6249519 144.007335,42.6249519 C198.007004,42.6249519 282.506487,313.539552 437.005542,313.539552 C591.504596,313.539552 575.000955,36 731,36 C886.999045,36 788.001034,313.5 957,313.5 C1027.65034,313.5 1071.80591,388.94787 1114,405.5 C1172.73617,428.541351 1244.00027,379.865229 1288,430 C1317.33315,463.423181 1367.99982,487.089847 1440,501 L0,501 C6.32475253,414.772439 20.3274055,330.020802 42.0079588,246.74509 Z" id="wave2"></path>
                            </g>
                        </g>
                    </g>
                </svg>

            </div>
            <div className="skillsWave " >

                <svg width="1438px" height="501px" viewBox="0 0 1438 501" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                    <title>wave3</title>
                    <defs>
                        <linearGradient x1="50%" y1="2.91599961%" x2="50%" y2="100%" id="linearGradient-1">
                            <stop stop-color="#9E1D62" offset="0%"></stop>
                            <stop stop-color="#421D9E" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <g id="1.0-Desktop-View" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="2.-Skills" transform="translate(-2.000000, -182.000000)" fill="url(#linearGradient-1)">
                            <g id="Group-4" transform="translate(2.000000, 182.000000)">
                                <path d="M92.0030397,404 C171.496124,373.736475 212.50304,367 310.00304,385.5 C407.50304,404 461.00412,269.889926 603.50304,268.5 C746.00196,267.110074 690.3219,-33.1765806 857.996538,3.23017391 C1025.67117,39.6369285 1006.49541,354.429153 1125.99451,415.341713 C1245.4936,476.254273 1294.99323,368.705534 1350.9928,368.705534 C1388.32585,368.705534 1417.99593,412.803689 1440.00304,501 L0,501 C8.33997036,456.509016 39.0076502,424.175683 92.0030397,404 Z" id="wave3" transform="translate(720.001520, 250.584322) scale(-1, 1) translate(-720.001520, -250.584322) "></path>
                            </g>
                        </g>
                    </g>
                </svg>

            </div>
            <div className="skillsBGbottom" />
        </div>
    )
}

export default Skills
