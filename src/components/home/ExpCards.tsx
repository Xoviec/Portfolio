import React from "react"
import  {useRef, useState } from "react";
import { ExpCard } from "./ExpCard"

export const ExpCards = ({readyProjects}) =>{

    // console.log(readyProjects ? console.log('dsa') : console.log('dsadas'))
    return(
        <div className="flex flex-col justify-center items-center">

            <div className="flex justify-between gap-10 m-10 lg:gap-2 lg:m-2 md:gap-[0.02rem] md:m-1 md:flex-wrap md:justify-center sm:gap-0">
                <ExpCard name={'HTML'} svg={<svg className="group-hover:fill-[#e54c21] duration-200" fill="#626e80" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="100px" height="100px"><path d="M 5.28125 2 C 4.765625 2.09375 4.410156 2.574219 4.46875 3.09375 L 8 42.53125 C 8.046875 42.933594 8.332031 43.265625 8.71875 43.375 L 24.71875 47.96875 C 24.902344 48.023438 25.097656 48.023438 25.28125 47.96875 L 41.28125 43.375 C 41.667969 43.265625 41.953125 42.933594 42 42.53125 L 45.53125 3.09375 C 45.558594 2.8125 45.464844 2.535156 45.273438 2.324219 C 45.082031 2.117188 44.8125 2 44.53125 2 L 5.46875 2 C 5.4375 2 5.40625 2 5.375 2 C 5.34375 2 5.3125 2 5.28125 2 Z M 6.5625 4 L 43.4375 4 L 40.09375 41.65625 L 25 45.9375 L 9.90625 41.65625 Z M 12.53125 10.0625 C 12.015625 10.15625 11.660156 10.636719 11.71875 11.15625 L 13.0625 25.9375 C 13.09375 26.453125 13.515625 26.859375 14.03125 26.875 L 30 26.875 L 29.5625 31.46875 L 25.03125 32.4375 L 20.4375 31.46875 L 20.28125 29.84375 C 20.25 29.316406 19.808594 28.90625 19.28125 28.90625 L 14.40625 28.90625 C 14.125 28.90625 13.855469 29.023438 13.664063 29.230469 C 13.472656 29.441406 13.378906 29.71875 13.40625 30 L 13.96875 36.125 C 14 36.527344 14.269531 36.875 14.65625 37 L 24.59375 40.03125 L 24.71875 40.0625 C 24.902344 40.117188 25.097656 40.117188 25.28125 40.0625 L 35.34375 37 C 35.742188 36.886719 36.027344 36.539063 36.0625 36.125 L 37.375 21.09375 C 37.402344 20.816406 37.3125 20.542969 37.128906 20.335938 C 36.945313 20.128906 36.683594 20.007813 36.40625 20 L 19.375 20 L 19.125 16.90625 L 36.84375 16.90625 C 37.363281 16.910156 37.796875 16.515625 37.84375 16 L 38.28125 11.15625 C 38.308594 10.875 38.214844 10.597656 38.023438 10.386719 C 37.832031 10.179688 37.5625 10.0625 37.28125 10.0625 L 12.71875 10.0625 C 12.65625 10.054688 12.59375 10.054688 12.53125 10.0625 Z M 13.8125 12.0625 L 36.1875 12.0625 L 35.9375 14.90625 L 18.03125 14.90625 C 17.75 14.90625 17.480469 15.023438 17.289063 15.230469 C 17.097656 15.441406 17.003906 15.71875 17.03125 16 L 17.5 21.09375 C 17.546875 21.597656 17.964844 21.988281 18.46875 22 L 35.3125 22 L 34.125 35.28125 L 25 38.03125 L 15.875 35.28125 L 15.5 30.90625 L 18.375 30.90625 L 18.5 32.375 C 18.53125 32.816406 18.847656 33.183594 19.28125 33.28125 L 24.84375 34.4375 C 24.976563 34.464844 25.117188 34.464844 25.25 34.4375 L 30.71875 33.28125 C 31.152344 33.183594 31.46875 32.816406 31.5 32.375 L 32.09375 25.9375 C 32.109375 25.660156 32.011719 25.390625 31.824219 25.191406 C 31.632813 24.988281 31.371094 24.875 31.09375 24.875 L 14.9375 24.875 Z"/></svg>}/>
                <ExpCard name={'CSS'} svg={<svg className="group-hover:fill-[#0270bb] duration-200" fill="#626e80" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="100px" height="100px" fill-rule="evenodd"><path fill-rule="evenodd" d="M 39 40 L 25 44 L 11 40 L 8 6 L 42 6 C 41 17.332031 40 28.667969 39 40 Z M 39.816406 8 L 10.183594 8 L 12.871094 38.453125 L 25 41.921875 L 37.128906 38.453125 Z M 16.800781 28 L 20.800781 28 L 20.898438 30.5 L 25 31.898438 L 29.101563 30.5 L 29.398438 26 L 20.601563 26 L 20.398438 22 L 29.601563 22 L 29.898438 18 L 16.101563 18 L 15.800781 14 L 34.101563 14 L 33.601563 22 L 32.898438 33.5 L 25 36.101563 L 17.101563 33.5 Z"/></svg>}/>
                <ExpCard name={'Tailwind CSS'} svg={<svg className="group-hover:fill-[#38bdf8] duration-200" fill="#626e80" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="100px" height="100px"><path  d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"/></svg>}/>
                <ExpCard name={'JavaScript'} svg={<svg className="group-hover:fill-[#f7df1d] duration-200" fill="#626e80" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="100px" height="100px"><path d="M 5.4648438 2 A 1.0001 1.0001 0 0 0 4.46875 3.0898438 L 7.9882812 42.515625 A 1.0001 1.0001 0 0 0 8.7089844 43.388672 L 24.71875 47.960938 A 1.0001 1.0001 0 0 0 25.267578 47.960938 L 41.292969 43.388672 A 1.0001 1.0001 0 0 0 42.013672 42.515625 L 45.53125 3.0898438 A 1.0001 1.0001 0 0 0 44.535156 2 L 5.4648438 2 z M 6.5585938 4 L 43.441406 4 L 40.083984 41.654297 L 24.994141 45.960938 L 9.9199219 41.654297 L 6.5585938 4 z M 19 10 A 1.0001 1.0001 0 0 0 18 11 L 18 29.628906 L 12.267578 28.041016 A 1.0001 1.0001 0 0 0 11 29.003906 L 11 33.949219 A 1.0001 1.0001 0 0 0 11.732422 34.912109 L 22.732422 37.962891 A 1.0001 1.0001 0 0 0 24 37 L 24 11 A 1.0001 1.0001 0 0 0 23 10 L 19 10 z M 27 10 A 1.0001 1.0001 0 0 0 26 11 L 26 28 A 1.0001 1.0001 0 0 0 27.169922 28.986328 L 32.917969 27.996094 L 32.798828 29.767578 L 26.734375 31.435547 A 1.0001 1.0001 0 0 0 26 32.398438 L 26 37 A 1.0001 1.0001 0 0 0 27.265625 37.964844 L 37.265625 35.214844 A 1.0001 1.0001 0 0 0 37.996094 34.335938 L 39.050781 22.085938 A 1.0001 1.0001 0 0 0 37.914062 21.009766 L 32 21.847656 L 32 16 L 38.654297 16 A 1.0001 1.0001 0 0 0 39.650391 15.085938 L 39.996094 11.085938 A 1.0001 1.0001 0 0 0 39 10 L 27 10 z M 20 12 L 22 12 L 22 35.685547 L 13 33.189453 L 13 30.318359 L 18.732422 31.908203 A 1.0001 1.0001 0 0 0 20 30.945312 L 20 12 z M 28 12 L 37.910156 12 L 37.736328 14 L 31 14 A 1.0001 1.0001 0 0 0 30 15 L 30 23 A 1.0001 1.0001 0 0 0 31.140625 23.990234 L 36.951172 23.166016 L 36.0625 33.470703 L 28 35.6875 L 28 33.162109 L 34.015625 31.507812 A 1.0001 1.0001 0 0 0 34.748047 30.611328 L 34.998047 26.861328 A 1.0001 1.0001 0 0 0 33.830078 25.808594 L 28 26.8125 L 28 12 z"/></svg>}/>
                <ExpCard name={'TypeScript'} svg={<svg className="group-hover:fill-[#3178c6] duration-200" fill="#626e80" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="100px" height="100px"><path d="M 5 4 A 1.0001 1.0001 0 0 0 4 5 L 4 45 A 1.0001 1.0001 0 0 0 5 46 L 45 46 A 1.0001 1.0001 0 0 0 46 45 L 46 5 A 1.0001 1.0001 0 0 0 45 4 L 5 4 z M 6 6 L 44 6 L 44 44 L 6 44 L 6 6 z M 15 23 L 15 26.445312 L 20 26.445312 L 20 42 L 24 42 L 24 26.445312 L 29 26.445312 L 29 23 L 15 23 z M 36.691406 23.009766 C 33.576782 22.997369 30.017578 23.941219 30.017578 28.324219 C 30.017578 34.054219 37.738281 34.055625 37.738281 36.640625 C 37.738281 36.885625 37.842187 38.666016 35.117188 38.666016 C 32.392187 38.666016 30.121094 36.953125 30.121094 36.953125 L 30.121094 41.111328 C 30.121094 41.111328 42.001953 44.954062 42.001953 36.289062 C 42.000953 30.664063 34.208984 30.945391 34.208984 28.150391 C 34.208984 27.067391 34.978375 26.054687 37.109375 26.054688 C 39.240375 26.054688 41.126953 27.3125 41.126953 27.3125 L 41.267578 23.607422 C 41.267578 23.607422 39.113892 23.019408 36.691406 23.009766 z"/></svg>}/>
                <ExpCard name={'ReactJS'} svg={<svg fill="#626e80" className="group-hover:fill-[#62dafc] duration-200" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="100px" height="100px">    <path d="M 10.679688 4.1816406 C 10.068687 4.1816406 9.502 4.3184219 9 4.6074219 C 7.4311297 5.5132122 6.8339651 7.7205462 7.1503906 10.46875 C 4.6127006 11.568833 3 13.188667 3 15 C 3 16.811333 4.6127006 18.431167 7.1503906 19.53125 C 6.8341285 22.279346 7.4311297 24.486788 9 25.392578 C 9.501 25.681578 10.067687 25.818359 10.679688 25.818359 C 11.982314 25.818359 13.48785 25.164589 15 24.042969 C 16.512282 25.164589 18.01964 25.818359 19.322266 25.818359 C 19.933266 25.818359 20.499953 25.681578 21.001953 25.392578 C 22.570814 24.486793 23.167976 22.279432 22.851562 19.53125 C 25.388297 18.431178 27 16.81094 27 15 C 27 13.188667 25.387299 11.568833 22.849609 10.46875 C 23.165872 7.7206538 22.56887 5.5132122 21 4.6074219 C 20.499 4.3174219 19.932312 4.1816406 19.320312 4.1816406 C 18.017686 4.1816406 16.51215 4.8354109 15 5.9570312 C 13.487763 4.8354109 11.981863 4.1816406 10.679688 4.1816406 z M 10.679688 5.9316406 C 11.461321 5.9316406 12.49496 6.3472486 13.617188 7.1171875 C 12.95737 7.7398717 12.311153 8.4479321 11.689453 9.2363281 C 10.681079 9.3809166 9.7303472 9.5916908 8.8496094 9.8554688 C 8.8448793 9.7943902 8.8336776 9.7303008 8.8300781 9.6699219 C 8.7230781 7.8899219 9.114 6.5630469 9.875 6.1230469 C 10.1 5.9930469 10.362688 5.9316406 10.679688 5.9316406 z M 19.320312 5.9316406 C 19.636312 5.9316406 19.9 5.9930469 20.125 6.1230469 C 20.886 6.5620469 21.276922 7.8899219 21.169922 9.6699219 C 21.166295 9.7303008 21.155145 9.7943902 21.150391 9.8554688 C 20.2691 9.5915252 19.317669 9.3809265 18.308594 9.2363281 C 17.686902 8.4480417 17.042616 7.7397993 16.382812 7.1171875 C 17.504962 6.3473772 18.539083 5.9316406 19.320312 5.9316406 z M 15 8.2285156 C 15.27108 8.4752506 15.540266 8.7360345 15.8125 9.0214844 C 15.542718 9.012422 15.274373 9 15 9 C 14.726286 9 14.458598 9.0124652 14.189453 9.0214844 C 14.461446 8.7363308 14.729174 8.4750167 15 8.2285156 z M 15 10.75 C 15.828688 10.75 16.614128 10.796321 17.359375 10.876953 C 17.813861 11.494697 18.261774 12.147811 18.681641 12.875 C 19.084074 13.572033 19.439938 14.285488 19.753906 15 C 19.439896 15.714942 19.084316 16.429502 18.681641 17.126953 C 18.263078 17.852044 17.816279 18.500949 17.363281 19.117188 C 16.591711 19.201607 15.800219 19.25 15 19.25 C 14.171312 19.25 13.385872 19.203679 12.640625 19.123047 C 12.186139 18.505303 11.738226 17.854142 11.318359 17.126953 C 10.915684 16.429502 10.560194 15.714942 10.246094 15 C 10.559972 14.285488 10.915926 13.572033 11.318359 12.875 C 11.737083 12.149909 12.183612 11.499051 12.636719 10.882812 C 13.408289 10.798393 14.199781 10.75 15 10.75 z M 19.746094 11.291016 C 20.142841 11.386804 20.524253 11.490209 20.882812 11.605469 C 20.801579 11.97252 20.702235 12.346608 20.589844 12.724609 C 20.461164 12.483141 20.336375 12.240903 20.197266 12 C 20.054139 11.752196 19.895244 11.529558 19.746094 11.291016 z M 10.251953 11.292969 C 10.103305 11.530776 9.9454023 11.752991 9.8027344 12 C 9.6636666 12.240944 9.5387971 12.483106 9.4101562 12.724609 C 9.29751 12.345829 9.1965499 11.971295 9.1152344 11.603516 C 9.4803698 11.48815 9.86083 11.385986 10.251953 11.292969 z M 7.46875 12.246094 C 7.6794464 13.135714 7.9717297 14.057918 8.3476562 14.998047 C 7.9725263 15.935943 7.6814729 16.856453 7.4707031 17.744141 C 5.7292327 16.903203 4.75 15.856373 4.75 15 C 4.75 14.121 5.701875 13.119266 7.296875 12.322266 C 7.3513169 12.295031 7.4131225 12.272692 7.46875 12.246094 z M 22.529297 12.255859 C 24.270767 13.096797 25.25 14.143627 25.25 15 C 25.25 15.879 24.298125 16.880734 22.703125 17.677734 C 22.648683 17.704969 22.586877 17.727308 22.53125 17.753906 C 22.32043 16.863764 22.030541 15.940699 21.654297 15 C 22.028977 14.062913 22.318703 13.142804 22.529297 12.255859 z M 15 13 C 13.895 13 13 13.895 13 15 C 13 16.105 13.895 17 15 17 C 16.105 17 17 16.105 17 15 C 17 13.895 16.105 13 15 13 z M 9.4101562 17.275391 C 9.5388794 17.516948 9.6655262 17.759008 9.8046875 18 C 9.9476585 18.247625 10.104915 18.470608 10.253906 18.708984 C 9.857159 18.613196 9.4757466 18.509791 9.1171875 18.394531 C 9.1984813 18.02725 9.2976676 17.653633 9.4101562 17.275391 z M 20.589844 17.277344 C 20.702364 17.655759 20.803517 18.02905 20.884766 18.396484 C 20.51963 18.51185 20.13917 18.614014 19.748047 18.707031 C 19.896695 18.469224 20.054598 18.247009 20.197266 18 C 20.336044 17.759557 20.461449 17.518344 20.589844 17.277344 z M 8.8496094 20.144531 C 9.7309004 20.408475 10.682331 20.619073 11.691406 20.763672 C 12.313288 21.552345 12.957085 22.261935 13.617188 22.884766 C 12.495042 23.654481 11.461272 24.070312 10.679688 24.070312 C 10.363687 24.070312 10.1 24.006953 9.875 23.876953 C 9.114 23.437953 8.7230781 22.112031 8.8300781 20.332031 C 8.8337424 20.271023 8.8447938 20.206253 8.8496094 20.144531 z M 21.150391 20.144531 C 21.155182 20.206253 21.166285 20.271023 21.169922 20.332031 C 21.276922 22.112031 20.886 23.436953 20.125 23.876953 C 19.9 24.006953 19.637312 24.070313 19.320312 24.070312 C 18.538728 24.070312 17.504958 23.654609 16.382812 22.884766 C 17.042964 22.261863 17.688542 21.552454 18.310547 20.763672 C 19.318921 20.619083 20.269653 20.408309 21.150391 20.144531 z M 14.1875 20.978516 C 14.457282 20.987578 14.725627 21 15 21 C 15.274373 21 15.542718 20.987578 15.8125 20.978516 C 15.540266 21.263964 15.27108 21.524765 15 21.771484 C 14.72892 21.524749 14.459734 21.263966 14.1875 20.978516 z"/></svg>}/>
            </div>
            <h1 className="text-[3.1rem] font-bold text-[#a4b8d5] text-center sm:text-[1.3rem]"> Also I used to work with:</h1>
            <div className="flex justify-between gap-10 m-10 lg:gap-2 lg:m-2 sm:m-0 sm:gap-0 sm:flex-wrap sm:justify-center">
                <ExpCard name={'tRPC'} svg={<svg className="group-hover:fill-[#3698d9] duration-200" fill="#626e80" width="100px" height="100px" viewBox="0 0 256 180" xmlns="http://www.w3.org/2000/svg" ><path  d="M186.379603,92.4020709 L224.865879,114.62108 L224.865879,159.084107 L186.379603,181.303116 L169.294598,171.422722 L127.749927,195.407248 L86.4540783,171.560262 L69.6078929,181.303116 L31.1216177,159.046596 L31.1216177,114.62108 L69.6078929,92.4020709 L108.094168,114.62108 L108.094168,159.046596 L96.4507571,165.779818 L127.749927,183.853863 L159.297919,165.642278 L147.893328,159.046596 L147.893328,114.62108 L186.379603,92.4020709 Z M157.896259,126.199473 L157.896259,153.319918 L181.378138,166.873889 L181.378138,139.753443 L157.896259,126.199473 Z M214.862948,126.161962 L191.381069,139.715932 L191.381069,166.873889 L214.862948,153.282407 L214.862948,126.161962 Z M41.1245482,126.161962 L41.1245482,153.282407 L64.6064277,166.836378 L64.6064277,139.715932 L41.1245482,126.161962 Z M98.0912377,126.161962 L74.6093582,139.715932 L74.6093582,166.836378 L98.0912377,153.282407 L98.0912377,126.161962 Z M186.379603,103.980463 L162.897724,117.534434 L186.379603,131.100908 L209.861483,117.534434 L186.379603,103.980463 Z M69.6078929,103.942952 L46.1260135,117.534434 L69.6078929,131.063397 L93.0897724,117.534434 L69.6078929,103.942952 Z M88.7510013,35.0227606 L88.7510013,46.5636417 L53.1405685,67.1321676 L53.1405685,101.904855 L43.137638,107.681547 L43.137638,61.3554752 L88.7510013,35.0227606 Z M127.237277,0 L165.748559,22.2190095 L165.748559,34.4375891 L212.362215,61.3554752 L212.362215,107.393963 L202.359285,101.617271 L202.359285,67.1321676 L165.748559,45.9909739 L165.748559,66.6570284 L127.262284,88.8760379 L88.7760086,66.6570284 L88.7760086,22.2190095 L127.237277,0 Z M98.7789391,33.7598906 L98.7789391,60.880336 L122.235811,74.4343069 L122.235811,47.3263651 L98.7789391,33.7598906 Z M155.720621,33.7598906 L132.263749,47.3263651 L132.263749,74.4218033 L155.720621,60.880336 L155.720621,33.7598906 Z M127.237277,11.5533848 L103.780404,25.1073557 L127.237277,38.6613266 L150.719156,25.1073557 L127.237277,11.5533848 Z" ></path></svg>}/>
                <ExpCard name={'Prisma'} svg={<svg className="group-hover:fill-[#000000] duration-200" fill="#626e80" viewBox="0.34 -0.059977834648891726 33.11668247084116 39.96397783464889" xmlns="http://www.w3.org/2000/svg" width="100" height="100"><path d="M32.908 30.475L19.151 1.26a2.208 2.208 0 0 0-1.88-1.257 2.183 2.183 0 0 0-2.01 1.042L.34 25.212a2.26 2.26 0 0 0 .025 2.426L7.66 38.935a2.346 2.346 0 0 0 2.635.969l21.17-6.262a2.32 2.32 0 0 0 1.457-1.258 2.27 2.27 0 0 0-.013-1.91zm-3.08 1.253L11.864 37.04c-.548.163-1.074-.312-.96-.865l6.418-30.731c.12-.575.914-.666 1.165-.134l11.881 25.23a.858.858 0 0 1-.541 1.188z" clip-rule="evenodd" fill-rule="evenodd"/></svg>}/>
                <ExpCard name={'PlanetScale'} svg={<svg className="group-hover:fill-[#000000] duration-200" fill="#626e80" width="100px" height="100px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M256,128.044218 C255.976145,198.701382 198.701382,255.976145 128.044218,256 L128.044218,256 Z M128,0 C179.977309,0 224.718545,30.9806545 244.765091,75.4833455 L75.4833455,244.765091 C68.2193455,241.492945 61.3149091,237.562764 54.84736,233.050182 L159.8976,128 L128,128 L37.4903855,218.509382 C14.3269236,195.346036 0,163.346036 0,128 C0,57.30752 57.3075782,0 128,0 Z" ></path></svg>}/>
                <ExpCard name={'NextJS'} svg={<svg className="group-hover:fill-[#96f2fd] duration-200" fill="#626e80" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="100px" height="100px">    <path d="M 10.679688 4.1816406 C 10.068687 4.1816406 9.502 4.3184219 9 4.6074219 C 7.4311297 5.5132122 6.8339651 7.7205462 7.1503906 10.46875 C 4.6127006 11.568833 3 13.188667 3 15 C 3 16.811333 4.6127006 18.431167 7.1503906 19.53125 C 6.8341285 22.279346 7.4311297 24.486788 9 25.392578 C 9.501 25.681578 10.067687 25.818359 10.679688 25.818359 C 11.982314 25.818359 13.48785 25.164589 15 24.042969 C 16.512282 25.164589 18.01964 25.818359 19.322266 25.818359 C 19.933266 25.818359 20.499953 25.681578 21.001953 25.392578 C 22.570814 24.486793 23.167976 22.279432 22.851562 19.53125 C 25.388297 18.431178 27 16.81094 27 15 C 27 13.188667 25.387299 11.568833 22.849609 10.46875 C 23.165872 7.7206538 22.56887 5.5132122 21 4.6074219 C 20.499 4.3174219 19.932312 4.1816406 19.320312 4.1816406 C 18.017686 4.1816406 16.51215 4.8354109 15 5.9570312 C 13.487763 4.8354109 11.981863 4.1816406 10.679688 4.1816406 z M 10.679688 5.9316406 C 11.461321 5.9316406 12.49496 6.3472486 13.617188 7.1171875 C 12.95737 7.7398717 12.311153 8.4479321 11.689453 9.2363281 C 10.681079 9.3809166 9.7303472 9.5916908 8.8496094 9.8554688 C 8.8448793 9.7943902 8.8336776 9.7303008 8.8300781 9.6699219 C 8.7230781 7.8899219 9.114 6.5630469 9.875 6.1230469 C 10.1 5.9930469 10.362688 5.9316406 10.679688 5.9316406 z M 19.320312 5.9316406 C 19.636312 5.9316406 19.9 5.9930469 20.125 6.1230469 C 20.886 6.5620469 21.276922 7.8899219 21.169922 9.6699219 C 21.166295 9.7303008 21.155145 9.7943902 21.150391 9.8554688 C 20.2691 9.5915252 19.317669 9.3809265 18.308594 9.2363281 C 17.686902 8.4480417 17.042616 7.7397993 16.382812 7.1171875 C 17.504962 6.3473772 18.539083 5.9316406 19.320312 5.9316406 z M 15 8.2285156 C 15.27108 8.4752506 15.540266 8.7360345 15.8125 9.0214844 C 15.542718 9.012422 15.274373 9 15 9 C 14.726286 9 14.458598 9.0124652 14.189453 9.0214844 C 14.461446 8.7363308 14.729174 8.4750167 15 8.2285156 z M 15 10.75 C 15.828688 10.75 16.614128 10.796321 17.359375 10.876953 C 17.813861 11.494697 18.261774 12.147811 18.681641 12.875 C 19.084074 13.572033 19.439938 14.285488 19.753906 15 C 19.439896 15.714942 19.084316 16.429502 18.681641 17.126953 C 18.263078 17.852044 17.816279 18.500949 17.363281 19.117188 C 16.591711 19.201607 15.800219 19.25 15 19.25 C 14.171312 19.25 13.385872 19.203679 12.640625 19.123047 C 12.186139 18.505303 11.738226 17.854142 11.318359 17.126953 C 10.915684 16.429502 10.560194 15.714942 10.246094 15 C 10.559972 14.285488 10.915926 13.572033 11.318359 12.875 C 11.737083 12.149909 12.183612 11.499051 12.636719 10.882812 C 13.408289 10.798393 14.199781 10.75 15 10.75 z M 19.746094 11.291016 C 20.142841 11.386804 20.524253 11.490209 20.882812 11.605469 C 20.801579 11.97252 20.702235 12.346608 20.589844 12.724609 C 20.461164 12.483141 20.336375 12.240903 20.197266 12 C 20.054139 11.752196 19.895244 11.529558 19.746094 11.291016 z M 10.251953 11.292969 C 10.103305 11.530776 9.9454023 11.752991 9.8027344 12 C 9.6636666 12.240944 9.5387971 12.483106 9.4101562 12.724609 C 9.29751 12.345829 9.1965499 11.971295 9.1152344 11.603516 C 9.4803698 11.48815 9.86083 11.385986 10.251953 11.292969 z M 7.46875 12.246094 C 7.6794464 13.135714 7.9717297 14.057918 8.3476562 14.998047 C 7.9725263 15.935943 7.6814729 16.856453 7.4707031 17.744141 C 5.7292327 16.903203 4.75 15.856373 4.75 15 C 4.75 14.121 5.701875 13.119266 7.296875 12.322266 C 7.3513169 12.295031 7.4131225 12.272692 7.46875 12.246094 z M 22.529297 12.255859 C 24.270767 13.096797 25.25 14.143627 25.25 15 C 25.25 15.879 24.298125 16.880734 22.703125 17.677734 C 22.648683 17.704969 22.586877 17.727308 22.53125 17.753906 C 22.32043 16.863764 22.030541 15.940699 21.654297 15 C 22.028977 14.062913 22.318703 13.142804 22.529297 12.255859 z M 15 13 C 13.895 13 13 13.895 13 15 C 13 16.105 13.895 17 15 17 C 16.105 17 17 16.105 17 15 C 17 13.895 16.105 13 15 13 z M 9.4101562 17.275391 C 9.5388794 17.516948 9.6655262 17.759008 9.8046875 18 C 9.9476585 18.247625 10.104915 18.470608 10.253906 18.708984 C 9.857159 18.613196 9.4757466 18.509791 9.1171875 18.394531 C 9.1984813 18.02725 9.2976676 17.653633 9.4101562 17.275391 z M 20.589844 17.277344 C 20.702364 17.655759 20.803517 18.02905 20.884766 18.396484 C 20.51963 18.51185 20.13917 18.614014 19.748047 18.707031 C 19.896695 18.469224 20.054598 18.247009 20.197266 18 C 20.336044 17.759557 20.461449 17.518344 20.589844 17.277344 z M 8.8496094 20.144531 C 9.7309004 20.408475 10.682331 20.619073 11.691406 20.763672 C 12.313288 21.552345 12.957085 22.261935 13.617188 22.884766 C 12.495042 23.654481 11.461272 24.070312 10.679688 24.070312 C 10.363687 24.070312 10.1 24.006953 9.875 23.876953 C 9.114 23.437953 8.7230781 22.112031 8.8300781 20.332031 C 8.8337424 20.271023 8.8447938 20.206253 8.8496094 20.144531 z M 21.150391 20.144531 C 21.155182 20.206253 21.166285 20.271023 21.169922 20.332031 C 21.276922 22.112031 20.886 23.436953 20.125 23.876953 C 19.9 24.006953 19.637312 24.070313 19.320312 24.070312 C 18.538728 24.070312 17.504958 23.654609 16.382812 22.884766 C 17.042964 22.261863 17.688542 21.552454 18.310547 20.763672 C 19.318921 20.619083 20.269653 20.408309 21.150391 20.144531 z M 14.1875 20.978516 C 14.457282 20.987578 14.725627 21 15 21 C 15.274373 21 15.542718 20.987578 15.8125 20.978516 C 15.540266 21.263964 15.27108 21.524765 15 21.771484 C 14.72892 21.524749 14.459734 21.263966 14.1875 20.978516 z"/></svg>}/>

            </div>

        </div>
        
    )
}