import { useState } from 'react'
import './App.css'

function App() {

    const [x, setX] = useState(false);
    const [y, setY] = useState(false);
    const [selectedOption, setSelectedOption] = useState(1);
    const [submittedValue, setSubmittedValue] = useState("");

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
        setSubmittedValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // جلوگیری از بارگذاری مجدد صفحه
        console.log('wswswswsw',submittedValue)
    };

  return (
    <>

        <div className="flex justify-center m-5">
            <button onClick={()=>setX(true)}  id="updateProductButton" data-modal-target="updateProductModal" data-modal-toggle="updateProductModal" className="block text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800" type="button">
                rating us
            </button>
        </div>


        {x &&
            <div  className="overflow-y-auto  overflow-x-hidden fixed flex top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
            <div className="relative  p-4 w-full mx-auto  max-w-md h-full md:h-auto place-self-center">

                <div className="relative p-4 bg-white rounded-lg shadow-xl dark:bg-neutral-800 sm:p-5">

                    <div className="flex justify-between items-center  rounded-t mb-4 dark:border-neutral-600">
                        <div className="text-lg font-semibold bg-neutral-100 dark:bg-neutral-700 p-2 rounded-full fill-orange-500 text-neutral-900 dark:text-white">
                            <svg className="w-8 h-8 text-neutral-800 dark:text-white"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="inherit" viewBox="0 0 24 24">
                                <path stroke="inherit" strokeWidth="1" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"/>
                            </svg>
                        </div>
                        <button onClick={()=>setX(false)} type="button" className="text-neutral-400 bg-transparent hover:bg-neutral-200 hover:text-neutral-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-neutral-600 dark:hover:text-white" data-modal-toggle="updateProductModal">
                            <svg  className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <h5 className="text-xl text-start font-bold dark:text-white">How did we do?</h5>
                    <p className="mb-3 text-start text-neutral-500 dark:text-neutral-400">Please let us know how we did with your support request. All feedback is appreciated
                        to help us improve our offering! </p>
                    <form action="#" onSubmit={handleSubmit} >
                        <ul className="items-center my-10 w-full text-sm font-medium text-neutral-900   rounded-lg sm:flex gap-3  dark:border-neutral-600 dark:text-white">
                            <li className="w-full dark:border-neutral-600">
                                <div className="flex items-center ">
                                    <input id="rate1" type="radio" value="1" name="list-radio" className="hidden peer" onChange={handleChange}/>
                                        <label htmlFor="rate1" className="inline-flex items-center justify-center w-full p-2 text-neutral-500 bg-white border border-neutral-200 rounded-full cursor-pointer dark:hover:text-neutral-300 dark:border-neutral-700 dark:peer-checked:text-orange-500 peer-checked:border-orange-600 dark:peer-checked:border-orange-600 peer-checked:text-orange-600 hover:text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:bg-neutral-800 dark:hover:bg-neutral-700">1</label>
                                </div>
                            </li>
                            <li className="w-full  dark:border-neutral-600">
                                <div className="flex items-center">
                                    <input id="rate2" type="radio" value="2" name="list-radio" className="hidden peer" onChange={handleChange}/>
                                        <label htmlFor="rate2" className="inline-flex items-center justify-center w-full p-2 text-neutral-500 bg-white border border-neutral-200 rounded-full cursor-pointer dark:hover:text-neutral-300 dark:border-neutral-700 dark:peer-checked:text-orange-500 peer-checked:border-orange-600 dark:peer-checked:border-orange-600 peer-checked:text-orange-600 hover:text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:bg-neutral-800 dark:hover:bg-neutral-700">2</label>
                                </div>
                            </li>
                            <li className="w-full  dark:border-neutral-600">
                                <div className="flex items-center">
                                    <input id="rate3" type="radio" value="3" name="list-radio" className="hidden peer" onChange={handleChange}/>
                                        <label htmlFor="rate3" className="inline-flex items-center justify-center w-full p-2 text-neutral-500 bg-white border border-neutral-200 rounded-full cursor-pointer dark:hover:text-neutral-300 dark:border-neutral-700 dark:peer-checked:text-orange-500 peer-checked:border-orange-600 dark:peer-checked:border-orange-600 peer-checked:text-orange-600 hover:text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:bg-neutral-800 dark:hover:bg-neutral-700">3</label>
                                </div>
                            </li>
                            <li className="w-full  dark:border-neutral-600">
                                <div className="flex items-center">
                                    <input id="rate4" type="radio" value="4" name="list-radio" className="hidden peer" onChange={handleChange}/>
                                        <label htmlFor="rate4" className="inline-flex items-center justify-center w-full p-2 text-neutral-500 bg-white border border-neutral-200 rounded-full cursor-pointer dark:hover:text-neutral-300 dark:border-neutral-700 dark:peer-checked:text-orange-500 peer-checked:border-orange-600 dark:peer-checked:border-orange-600 peer-checked:text-orange-600 hover:text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:bg-neutral-800 dark:hover:bg-neutral-700">4</label>
                                </div>
                            </li>
                            <li className="w-full dark:border-neutral-600">
                                <div className="flex items-center">
                                    <input id="rate5" type="radio" value="5" name="list-radio" className="hidden peer" onChange={handleChange}/>
                                        <label htmlFor="rate5" className="inline-flex items-center justify-center w-full p-2 text-neutral-500 bg-white border border-neutral-200 rounded-full cursor-pointer dark:hover:text-neutral-300 dark:border-neutral-700 dark:peer-checked:text-orange-500 peer-checked:border-orange-600 dark:peer-checked:border-orange-600 peer-checked:text-orange-600 hover:text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:bg-neutral-800 dark:hover:bg-neutral-700">5</label>
                                </div>
                            </li>
                        </ul>
                        <div className="flex items-center space-x-4">
                            <button type="submit" onClick={()=>{
                                setX(false);
                                setY(true)
                            }} className="text-white w-full bg-orange-500 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                                submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        }
        {y &&
            <div  className="overflow-y-auto  overflow-x-hidden fixed flex top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
            <div className="relative  p-4 w-full mx-auto  max-w-md h-full md:h-auto place-self-center">

                <div className="relative p-4 bg-white rounded-lg shadow-xl dark:bg-neutral-800 sm:p-5">

                    <div className="flex justify-between items-center  rounded-t mb-4 dark:border-neutral-600">
                        <button onClick={()=>setY(false)} type="button" className="text-neutral-400 bg-transparent hover:bg-neutral-200 hover:text-neutral-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-neutral-600 dark:hover:text-white" data-modal-toggle="updateProductModal">
                            <svg  className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="flex justify-center"><svg width="162" height="108" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="M30 93.744h-.044a23.456 23.456 0 0 1-1.61-.189.543.543 0 0 1 .155-1.076c.52.076 1.04.135 1.563.178a.538.538 0 0 1-.043 1.076l-.022.01Zm5.37-.205a.538.538 0 0 1-.08-1.076 19.51 19.51 0 0 0 1.54-.306.536.536 0 0 1 .645.403.538.538 0 0 1-.397.646c-.537.129-1.074.236-1.611.323l-.097.01Zm-12.137-1.312a.536.536 0 0 1-.183-.033 24.346 24.346 0 0 1-1.525-.608.539.539 0 0 1 .424-.99c.483.21.983.404 1.472.587a.538.538 0 0 1-.188 1.044Zm18.759-.829a.538.538 0 0 1-.242-1.022c.467-.226.934-.479 1.39-.742a.536.536 0 1 1 .538.93c-.478.275-.967.538-1.45.78a.536.536 0 0 1-.258.054h.022Zm-24.994-2.292a.536.536 0 0 1-.29-.08c-.457-.29-.913-.597-1.36-.91a.536.536 0 1 1 .612-.882c.436.307.876.597 1.322.883a.538.538 0 0 1-.284.99Zm30.772-1.544a.537.537 0 0 1-.408-.193.539.539 0 0 1 .06-.759l.117-.124c.355-.306.715-.624 1.074-.957a.537.537 0 1 1 .73.79c-.375.345-.74.673-1.106.985l-.123.102a.537.537 0 0 1-.344.156Zm-36.326-2.69a.537.537 0 0 1-.36-.14c-.402-.37-.8-.747-1.18-1.124a.539.539 0 0 1 .751-.769c.376.371.763.737 1.155 1.076a.538.538 0 0 1 .032.764.537.537 0 0 1-.398.194Zm41.305-2.21a.537.537 0 0 1-.398-.899c.355-.393.715-.79 1.074-1.2a.537.537 0 1 1 .806.71c-.365.415-.725.818-1.074 1.21a.537.537 0 0 1-.408.152v.026ZM6.724 79.723a.537.537 0 0 1-.424-.204 41.79 41.79 0 0 1-.989-1.308.539.539 0 0 1 .124-.753.536.536 0 0 1 .746.124c.312.425.629.85.962 1.27a.539.539 0 0 1-.42.871Zm50.579-2.383a.539.539 0 0 1-.419-.877c.338-.414.677-.828 1.015-1.253a.537.537 0 1 1 .838.672l-1.02 1.259a.537.537 0 0 1-.414.199ZM2.9 73.887a.537.537 0 0 1-.473-.312c-.257-.5-.499-1-.714-1.485a.539.539 0 0 1 .685-.72c.133.052.24.154.298.285.21.462.44.946.687 1.425a.539.539 0 0 1-.483.786v.021Zm58.753-2.028a.537.537 0 0 1-.424-.866l.988-1.275a.537.537 0 1 1 .848.656l-.988 1.275a.537.537 0 0 1-.424.188v.022ZM.682 67.286a.537.537 0 0 1-.537-.462A17.06 17.06 0 0 1 0 65.16a.538.538 0 1 1 1.074 0c.018.519.063 1.036.134 1.55a.539.539 0 0 1-.462.607l-.064-.032Zm65.24-.973a.537.537 0 0 1-.43-.867l.984-1.28a.536.536 0 0 1 .853.65l-.993 1.265a.537.537 0 0 1-.414.21v.022Zm88.49-2.96a.724.724 0 0 1-.15 0 .537.537 0 0 1-.366-.666c.134-.474.28-.99.424-1.544a.538.538 0 0 1 .655-.388.537.537 0 0 1 .382.662c-.145.538-.29 1.076-.43 1.565a.537.537 0 0 1-.515.372Zm-84.247-2.592a.536.536 0 0 1-.424-.867l.983-1.28a.54.54 0 1 1 .854.662l-.989 1.275a.537.537 0 0 1-.413.183l-.01.027Zm-68.924-.382a.536.536 0 0 1-.156 0 .538.538 0 0 1-.355-.673 21.47 21.47 0 0 1 .537-1.565.537.537 0 1 1 .994.403c-.193.49-.37.985-.537 1.474a.537.537 0 0 1-.473.334l-.01.027Zm154.782-3.863a.311.311 0 0 1-.102 0 .538.538 0 0 1-.43-.624c.097-.538.188-1.044.28-1.582a.545.545 0 1 1 1.073.178c-.09.538-.182 1.076-.279 1.614a.537.537 0 0 1-.542.414ZM74.46 55.209a.537.537 0 0 1-.424-.872l1.004-1.27a.537.537 0 1 1 .838.673l-.999 1.264a.537.537 0 0 1-.408.205h-.01ZM4.436 54.165a.539.539 0 0 1-.43-.855c.323-.436.666-.872 1.02-1.297a.537.537 0 1 1 .822.694 22.92 22.92 0 0 0-.977 1.237.537.537 0 0 1-.435.221Zm74.408-4.417a.539.539 0 0 1-.414-.877l1.026-1.248a.537.537 0 1 1 .843.667l-1.02 1.243a.537.537 0 0 1-.435.215Zm78.124-.161h-.043a.538.538 0 0 1-.494-.576c.043-.538.075-1.076.107-1.614a.538.538 0 0 1 .564-.538c.295.018.52.27.505.565a54.253 54.253 0 0 1-.107 1.614.538.538 0 0 1-.532.549ZM9.28 49.13a.537.537 0 0 1-.338-.958c.8-.646 1.316-.99 1.337-1.006a.536.536 0 0 1 .59.898s-.499.334-1.25.942a.536.536 0 0 1-.35.124h.011Zm74.075-4.74a.537.537 0 0 1-.403-.888c.35-.408.704-.817 1.074-1.22a.537.537 0 1 1 .806.71c-.355.403-.71.806-1.074 1.215a.537.537 0 0 1-.414.183h.01Zm73.742-1.797a.537.537 0 0 1-.537-.505 54.325 54.325 0 0 0-.118-1.614.54.54 0 1 1 1.074-.097c.048.538.091 1.076.118 1.614 0 .285-.221.52-.505.538l-.032.064Zm-69.064-3.416a.537.537 0 0 1-.392-.904c.365-.398.735-.79 1.106-1.178a.536.536 0 0 1 .779.737l-1.074 1.173a.537.537 0 0 1-.44.172h.02Zm68.092-3.502a.537.537 0 0 1-.537-.409 22.668 22.668 0 0 0-.408-1.533.539.539 0 0 1 1.03-.307c.151.538.296 1.05.425 1.587a.539.539 0 0 1-.398.651l-.112.01Zm-63.221-1.512a.537.537 0 0 1-.376-.92l1.165-1.13a.537.537 0 1 1 .763.76c-.387.365-.768.741-1.155 1.118a.537.537 0 0 1-.419.172h.022Zm5.14-4.745a.537.537 0 0 1-.355-.941l1.235-1.076a.539.539 0 1 1 .693.828c-.408.34-.817.689-1.225 1.039a.537.537 0 0 1-.37.15h.021Zm55.197-.575c-.247-.468-.505-.931-.779-1.378a.537.537 0 1 1 .918-.554c.285.463.537.947.811 1.431a.539.539 0 0 1-.478.791.537.537 0 0 1-.472-.29ZM103.5 25.055a.539.539 0 0 1-.322-.974c.44-.322.88-.634 1.32-.946a.537.537 0 0 1 .845.394.54.54 0 0 1-.227.488l-1.3.93a.536.536 0 0 1-.338.108h.022Zm46.132-1.56a.537.537 0 0 1-.381-.161c-.359-.359-.74-.717-1.144-1.076a.536.536 0 1 1 .709-.807c.408.36.81.742 1.197 1.135a.539.539 0 0 1 0 .759.537.537 0 0 1-.403.15h.022Zm-40.279-2.28a.537.537 0 0 1-.274-1.001c.473-.275.946-.538 1.418-.797a.54.54 0 0 1 .81.474.542.542 0 0 1-.273.468c-.467.253-.929.538-1.39.785a.536.536 0 0 1-.344.07h.053Zm34.737-1.894a.504.504 0 0 1-.258-.07c-.451-.248-.924-.49-1.407-.716a.539.539 0 0 1 .462-.974c.499.237.988.49 1.46.748a.538.538 0 0 1-.257 1.012Zm-28.49-1.195a.537.537 0 0 1-.2-1.038c.505-.204 1.01-.398 1.52-.581a.537.537 0 0 1 .366 1.011c-.495.178-.989.366-1.483.57a.536.536 0 0 1-.247.038h.043Zm22.045-1.452a.777.777 0 0 1-.156 0c-.505-.15-1.02-.29-1.53-.41a.553.553 0 0 1 .252-1.075c.537.129 1.074.269 1.611.425a.542.542 0 0 1-.15 1.076l-.027-.016Zm-15.456-.597a.537.537 0 0 1-.118-1.066c.537-.107 1.074-.21 1.61-.29a.543.543 0 0 1 .59.735.544.544 0 0 1-.423.34c-.537.082-1.036.178-1.557.286a.365.365 0 0 1-.102-.005Zm8.555-.603h-.038a32.41 32.41 0 0 0-1.579-.06.538.538 0 0 1 0-1.075c.537 0 1.074.027 1.638.06a.538.538 0 0 1-.032 1.075h.01Z" fill="#E6E6E6"/><path fill="#39475F" d="M119.847 100.221H58.146L70.332.793h55.025l5.747 7.601z"/><path fill="#61728D" d="M113.172 100.221H51.465L63.651.793h61.706z"/><path fill="#181F27" d="M110.132 81.354H58.576l8.791-71.695h51.557z"/><path fill="#1E252E" d="m92.743 50.055 14.897.177-.29 2.308-14.607-.252z"/><path fill="#39475F" d="m51.465 100.221 7.422 6.864 60.037.915.923-7.779z"/><path d="M99.096 29.058s2.572.183 3.888 5.03c1.316 4.847.865 18.377.865 18.377l-11.096-.177s-5.537-20.137 6.343-23.23Z" fill="#2D394B"/><path fill="#FC7614" d="M5.42 32.843 45.778 0l21.18 26.119L26.603 58.96z"/><path fill="#FFF" d="M27.49 21.931 45.56 7.226l3.497 4.313-18.07 14.706z"/><path d="m25.272 45.175 5.338-4.345a2.772 2.772 0 0 1 3.902.404 2.781 2.781 0 0 1-.404 3.91l-5.338 4.344a2.772 2.772 0 0 1-3.903-.404 2.781 2.781 0 0 1 .405-3.91ZM37.33 35.365l16.89-13.743a2.772 2.772 0 0 1 3.902.404 2.781 2.781 0 0 1-.405 3.909L40.83 39.679a2.772 2.772 0 0 1-3.903-.404 2.781 2.781 0 0 1 .405-3.91Z" fill="#FFF" opacity=".46"/><ellipse fill="#FFF" opacity=".3" cx="17.937" cy="33.636" rx="3.673" ry="3.68"/><ellipse fill="#FFF" opacity=".3" cx="21.664" cy="30.284" rx="3.673" ry="3.68"/><path d="M99.096 29.058s-5.838 2.103-3.803 18.581c1.493 12.073-3.55 28.056-11.004 28.25-7.454.193-21.202-.463-21.202-.463s7.159-18.56 5.676-34.145a14.786 14.786 0 0 1 .763-6.456c.87-2.373 2.487-4.842 5.494-5.245 6.004-.818 24.076-.522 24.076-.522Z" fill="#BAD6FA"/><path d="m58.957 76.63 26.342-.537s-4.017-3.992-4.27-14.154l-36.234.538a31.494 31.494 0 0 0 2.841 7.531 12.547 12.547 0 0 0 11.32 6.623Z" fill="#546F8D"/><path fill="#2D394B" d="m78.21 14.834-.918 6.041h26.621l.806-6.041z"/><path d="M85.54 86.19c-2.872-2.517-7.416-2.022-9.446 1.222a4.955 4.955 0 0 0-.8 2.647c0 3.98 2.744 6.59 8.227 5.492 4.184-.839 5.779-6.073 2.02-9.36Z" fill="#FFF" opacity=".48"/><ellipse fill="#FC7614" cx="147.188" cy="81.542" rx="14.812" ry="14.837"/><path d="M73.731 35.75a.537.537 0 0 1-.038-1.076c.113 0 11.343-.828 17.363-.29a.54.54 0 0 1-.096 1.076c-5.908-.538-17.079.274-17.186.285l-.043.005Zm-.891 7.279a.538.538 0 0 1-.038-1.076c.113 0 11.342-.828 17.363-.29a.54.54 0 0 1-.097 1.076c-5.907-.538-17.073.28-17.185.285l-.043.005Zm-.102 7.564a.538.538 0 0 1-.043-1.076c.112 0 11.347-.829 17.362-.29a.54.54 0 0 1-.096 1.075c-5.908-.538-17.073.28-17.186.286l-.037.005Zm-.715 7.564a.537.537 0 0 1-.037-1.076c.112 0 11.342-.829 17.362-.285a.54.54 0 0 1-.096 1.076c-5.908-.538-17.073.28-17.186.285h-.043Z" fill="#FFF"/></g></svg></div>
                    <h6 className="text-sm mx-auto px-2 py-0.5 text-center w-fit rounded-full dark:bg-neutral-700 font-regular text-orange-500 my-3">You selected {submittedValue} out of 5</h6>
                    <h5 className="text-xl text-center font-bold dark:text-white my-3">Thank you!</h5>
                    <p className="mb-3 text-center text-neutral-500 dark:text-neutral-400"> We appreciate you taking the time to give a rating. If you ever need more support,
                        don’t hesitate to get in touch!</p>
                </div>
            </div>
        </div>
        }

    </>
  )
}

export default App
