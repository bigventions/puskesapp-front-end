import { useState, useEffect, useId } from "react";
import profil from '../assets/images/user.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from "../components/navbar";
// import Dropdown from "../components/dropDown";

export default function Main1 () {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-[3%,1fr] text-sm mx-3 my-3">
        {/* Sidebar */}
        <div className="bg-[#182e34] flex flex-col justify-between border rounded-lg w-full hover:w-[200px]">
          <div className="flex flex-col">
            <button className="bg-[#182e34] text-white py-1 my-2 hover:border-gray-800 hover:text-black hover:bg-[#389583] hover:rounded-lg">
              <FontAwesomeIcon icon="notes-medical" />
            </button>
            <button className="bg-[#182e34] text-white py-1 my-2 hover:border-gray-800 hover:text-black hover:bg-[#389583] hover:rounded-lg">
              <FontAwesomeIcon icon="heart-pulse" />
            </button>
            <button className="bg-[#182e34] text-white py-1 my-2 hover:border-gray-800 hover:text-black hover:bg-[#389583] hover:rounded-lg">
              <FontAwesomeIcon icon="user-plus" />
            </button>
            <button className="bg-[#182e34] text-white py-1 my-2 hover:border-gray-800 hover:text-black hover:bg-[#389583] hover:rounded-lg">
              <FontAwesomeIcon icon="list" />
            </button>
            <button className="bg-[#182e34] text-white py-1 my-2 hover:border-gray-800 hover:text-black hover:bg-[#389583] hover:rounded-lg">
              <FontAwesomeIcon icon="kit-medical" />
            </button>
            <button className="bg-[#182e34] text-white py-1 my-2 hover:border-gray-800 hover:text-black hover:bg-[#389583] hover:rounded-lg">
              <FontAwesomeIcon icon="heart-circle-plus" />
            </button>
          </div>
          <div className="flex flex-col">
            <button className="bg-[#182e34] text-white py-1 my-2 hover:border-gray-800 hover:text-black hover:bg-[#389583] hover:rounded-lg">
              <FontAwesomeIcon icon="door-open" />
            </button>
          </div>
        </div>
        {/* Main Content */}
        <div className="bg-[#182e34] flex flex-col justify-evenly border rounded-lg mx-3">
          <div className="grid grid-cols-[70%,10%,20%] content-start my-5 mx-5">
            <div className="flex items-center relative w-full pr-3">
              <FontAwesomeIcon icon="search" className="absolute left-3 text-gray-500" />
              <input type="text" placeholder="Search Product..." className="w-full pl-10 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="flex justify-around items-center relative border border-gray-500 rounded-lg">
              <button className="flex items-center text-white rounded-lg px-3 py-3 hover:rounded-lg hover:border-gray-800 hover:text-zinc-800">
                <FontAwesomeIcon icon="list-ul" />
              </button>
              <button className="flex items-center text-white rounded-lg px-3 py-3 hover:rounded-lg hover:border-gray-800 hover:text-zinc-800">
                <FontAwesomeIcon icon="layer-group" />
              </button>
            </div>
            <div className="flex justify-around items-center relative">
              <button className="flex items-center text-white rounded-lg px-3 py-3 hover:rounded-lg hover:border-gray-800 hover:text-zinc-800">
                <FontAwesomeIcon icon="ellipsis" />
              </button>
              <button className="bg-[#389583] text-white rounded-lg px-2 py-2">New Purchase</button>
            </div>
          </div>
          <div className="overflow-y-auto">
            <div className="grid grid-rows-[25%,25%,50%] bg-[#c0c0c0] border-1 border-gray-500 origin-center hover:scale-95 hover:ease-in duration-300 rounded-lg h-[150px] mx-5">
              <div className="grid grid-cols-[9%,1%,70%,20%] items-center px-5">
                <h1>PO-652</h1>
                <span className="border-l-2 h-full"></span>
                <h1>Men Cotton Polo Shirt</h1>
                <div className="flex justify-around items-center">
                  <h1>$68.00</h1>
                  <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Done</span>
                  <button className="flex items-center bg-[#389583] text-zinc-800 rounded-lg px-2 py-1 hover:rounded-lg hover:border-gray-800 hover:text-zinc-500">
                    <FontAwesomeIcon icon="ellipsis" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-[70%] items-center px-5">
                <button className="flex items-center text-sm pe-1 font-medium rounded-full md:me-0 dark:text-white" type="button">
                  <img className="w-8 h-8 me-2 rounded-full" src={profil} alt="user photo" />
                  <h1>Tanggerang</h1>
                  <FontAwesomeIcon icon="location-dot" className="mx-3"/>
                  <h1>Perumahan Citran Kencana Blok D6</h1>
                  <FontAwesomeIcon icon="money-bill-transfer" className="mx-3"/>
                  <h1>Billed</h1>
                </button>
              </div>
              <div className="grid grid-cols-[80%,20%] items-center bg-[#389583] border rounded-lg px-2 mx-2 my-1">
                <div className="grid grid-rows-2">
                  <h1 className=""><strong>Order is on shipping</strong> November 21, 2024</h1>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon="warehouse" />
                    <div className="bg-gray-200 rounded-full w-28 h-1 mx-2 dark:bg-gray-700">
                      <div className="bg-blue-600 w-8 h-1 rounded-full"></div>
                    </div>
                    <FontAwesomeIcon icon="clipboard-check" />
                    <div className="bg-gray-200 rounded-full w-28 h-1 mx-2 dark:bg-gray-700">
                      <div className="bg-blue-600 w-8 h-1 rounded-full"></div>
                    </div>
                    <FontAwesomeIcon icon="truck-fast" />
                    <div className="bg-gray-200 rounded-full w-28 h-1 mx-2 dark:bg-gray-700">
                      <div className="bg-blue-600 w-8 h-1 rounded-full"></div>
                    </div>
                    <FontAwesomeIcon icon="circle-check" />
                  </div>
                </div>
                <h1>Track Shipment</h1>
              </div>
            </div>
            <div className="grid grid-rows-[25%,25%,50%] bg-[#c0c0c0] border-1 border-gray-500 origin-center hover:scale-95 hover:ease-in duration-300 rounded-lg h-[150px] mx-5 my-2">
              <div className="grid grid-cols-[9%,1%,70%,20%] items-center px-5">
                <h1>PO-652</h1>
                <span className="border-l-2 h-full"></span>
                <h1>Men Cotton Polo Shirt</h1>
                <div className="flex justify-around items-center">
                  <h1>$68.00</h1>
                  <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Done</span>
                  <button className="flex items-center bg-[#389583] text-zinc-800 rounded-lg px-2 py-1 hover:rounded-lg hover:border-gray-800 hover:text-zinc-500">
                    <FontAwesomeIcon icon="ellipsis" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-[70%] items-center px-5">
                <button className="flex items-center text-sm pe-1 font-medium rounded-full md:me-0 dark:text-white" type="button">
                  <img className="w-8 h-8 me-2 rounded-full" src={profil} alt="user photo" />
                  <h1>Tanggerang</h1>
                  <FontAwesomeIcon icon="location-dot" className="mx-3"/>
                  <h1>Perumahan Citran Kencana Blok D6</h1>
                  <FontAwesomeIcon icon="money-bill-transfer" className="mx-3"/>
                  <h1>Billed</h1>
                </button>
              </div>
              <div className="grid grid-cols-[80%,20%] items-center bg-[#389583] border rounded-lg px-2 mx-2 my-1">
                <div className="grid grid-rows-2">
                  <h1 className=""><strong>Order is on shipping</strong> November 21, 2024</h1>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon="warehouse" />
                    <div className="bg-gray-200 rounded-full w-28 h-1 mx-2 dark:bg-gray-700">
                      <div className="bg-blue-600 w-8 h-1 rounded-full"></div>
                    </div>
                    <FontAwesomeIcon icon="clipboard-check" />
                    <div className="bg-gray-200 rounded-full w-28 h-1 mx-2 dark:bg-gray-700">
                      <div className="bg-blue-600 w-8 h-1 rounded-full"></div>
                    </div>
                    <FontAwesomeIcon icon="truck-fast" />
                    <div className="bg-gray-200 rounded-full w-28 h-1 mx-2 dark:bg-gray-700">
                      <div className="bg-blue-600 w-8 h-1 rounded-full"></div>
                    </div>
                    <FontAwesomeIcon icon="circle-check" />
                  </div>
                </div>
                <h1>Track Shipment</h1>
              </div>
            </div>
            <div className="grid grid-rows-[25%,25%,50%] bg-[#c0c0c0] border-1 border-gray-500 origin-center hover:scale-95 hover:ease-in duration-300 rounded-lg h-[150px] mx-5 my-2">
              <div className="grid grid-cols-[9%,1%,70%,20%] items-center px-5">
                <h1>PO-652</h1>
                <span className="border-l-2 h-full"></span>
                <h1>Men Cotton Polo Shirt</h1>
                <div className="flex justify-around items-center">
                  <h1>$68.00</h1>
                  <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Done</span>
                  <button className="flex items-center bg-[#389583] text-zinc-800 rounded-lg px-2 py-1 hover:rounded-lg hover:border-gray-800 hover:text-zinc-500">
                    <FontAwesomeIcon icon="ellipsis" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-[70%] items-center px-5">
                <button className="flex items-center text-sm pe-1 font-medium rounded-full md:me-0 dark:text-white" type="button">
                  <img className="w-8 h-8 me-2 rounded-full" src={profil} alt="user photo" />
                  <h1>Tanggerang</h1>
                  <FontAwesomeIcon icon="location-dot" className="mx-3"/>
                  <h1>Perumahan Citran Kencana Blok D6</h1>
                  <FontAwesomeIcon icon="money-bill-transfer" className="mx-3"/>
                  <h1>Billed</h1>
                </button>
              </div>
              <div className="grid grid-cols-[80%,20%] items-center bg-[#389583] border rounded-lg px-2 mx-2 my-1">
                <div className="grid grid-rows-2">
                  <h1 className=""><strong>Order is on shipping</strong> November 21, 2024</h1>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon="warehouse" />
                    <div className="bg-gray-200 rounded-full w-28 h-1 mx-2 dark:bg-gray-700">
                      <div className="bg-blue-600 w-8 h-1 rounded-full"></div>
                    </div>
                    <FontAwesomeIcon icon="clipboard-check" />
                    <div className="bg-gray-200 rounded-full w-28 h-1 mx-2 dark:bg-gray-700">
                      <div className="bg-blue-600 w-8 h-1 rounded-full"></div>
                    </div>
                    <FontAwesomeIcon icon="truck-fast" />
                    <div className="bg-gray-200 rounded-full w-28 h-1 mx-2 dark:bg-gray-700">
                      <div className="bg-blue-600 w-8 h-1 rounded-full"></div>
                    </div>
                    <FontAwesomeIcon icon="circle-check" />
                  </div>
                </div>
                <h1>Track Shipment</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<div className="grid grid-cols-[25%,1fr] my-3">
        <div className="pl-5">
          <h6 className="my-5"><strong>Purchase Order</strong></h6>
          <div className="bg-white text-black rounded-t-lg px-2 py-2 mt-5">
            <h6 className="text-zinc-500 px-2">PURCHASE STATUS</h6>
            <div className="grid grid-cols-2 py-1">
              <div className="flex justify-between border border-gray-500 rounded-md px-1 py-1 mx-1">
                <h1>All</h1>
                <div className="border border-gray-500 text-zinc-500 rounded-lg px-1">
                  <h1>10</h1>
                </div>
              </div>
              <div className="flex justify-between border border-gray-500 rounded-md px-1 py-1 mx-1">
                <h1>Verified</h1>
                <div className="border border-gray-500 text-zinc-500 rounded-lg px-1">
                  <h1>32</h1>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 py-1">
              <div className="flex justify-between border border-gray-500 rounded-md px-1 py-1 mx-1">
                <h1>Shipped</h1>
                <div className="border border-gray-500 text-zinc-500 rounded-lg px-1">
                  <h1>50</h1>
                </div>
              </div>
              <div className="flex justify-between border border-gray-500 rounded-md px-1 py-1 mx-1">
                <h1>Received</h1>
                <div className="border border-gray-500 text-zinc-500 rounded-lg px-1">
                  <h1>3</h1>
                </div>
              </div>
            </div>
            <h6 className="text-zinc-500 px-2">FILTER BY</h6>
            <Dropdown label="Location" />
            <Dropdown label="Order Date" />
            <Dropdown label="Vendor" />
            <Dropdown label="Product Status" />
            <h6 className="text-zinc-500 px-2">Total Amount Range</h6>
            <div className="flex items-center relative w-full max-w-sm my-2">
              <FontAwesomeIcon icon="dollar" className="absolute left-3 text-gray-500" />
              <input type="text" placeholder="Minimum Range" className="w-full pl-10 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="flex items-center relative w-full max-w-sm my-2">
              <FontAwesomeIcon icon="dollar" className="absolute left-3 text-gray-500" />
              <input type="text" placeholder="Maximum Range" className="w-full pl-10 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
          <button className="flex justify-center items-center bg-[#389583] border-1 border-gray-500 rounded-b-lg w-full py-3">
            <FontAwesomeIcon icon="rotate" className="text-black pr-2" />
            <h1 className="text-center text-white">Reset Filter</h1>
          </button>
        </div>
        <div className="">
          <div className="grid grid-cols-[70%,10%,20%] content-start mx-5 mb-5">
            <div className="flex items-center relative w-full pr-3">
              <FontAwesomeIcon icon="search" className="absolute left-3 text-gray-500" />
              <input type="text" placeholder="Search Product..." className="w-full pl-10 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="flex justify-around items-center relative border border-gray-500 rounded-lg">
              <button className="flex items-center text-zinc-500 rounded-lg px-3 py-3 hover:rounded-lg hover:border-gray-800 hover:text-zinc-800">
                <FontAwesomeIcon icon="list-ul" />
              </button>
              <button className="flex items-center text-zinc-500 rounded-lg px-3 py-3 hover:rounded-lg hover:border-gray-800 hover:text-zinc-800">
                <FontAwesomeIcon icon="layer-group" />
              </button>
            </div>
            <div className="flex justify-around items-center relative">
              <button className="flex items-center text-zinc-500 rounded-lg px-3 py-3 hover:rounded-lg hover:border-gray-800 hover:text-zinc-800">
                <FontAwesomeIcon icon="ellipsis" />
              </button>
              <button className="bg-[#389583] text-white rounded-lg px-2 py-2">New Purchase</button>
            </div>
          </div>
          <div className="overflow-y-auto h-4/5">
            <div className="grid grid-rows-[25%,25%,50%] bg-[#8de4af] border-1 border-gray-500 origin-center hover:scale-95 hover:ease-in duration-300 rounded-lg h-[150px] mx-5">
              <div className="grid grid-cols-[9%,1%,70%,20%] items-center px-5">
                <h1>PO-652</h1>
                <span className="border-l-2 h-full"></span>
                <h1>Men Cotton Polo Shirt</h1>
                <div className="flex justify-around items-center">
                  <h1>$68.00</h1>
                  <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Done</span>
                  <button className="flex items-center bg-[#389583] text-zinc-800 rounded-lg px-2 py-1 hover:rounded-lg hover:border-gray-800 hover:text-zinc-500">
                    <FontAwesomeIcon icon="ellipsis" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-[70%] items-center px-5">
                <button className="flex items-center text-sm pe-1 font-medium rounded-full md:me-0 dark:text-white" type="button">
                  <img className="w-8 h-8 me-2 rounded-full" src={profil} alt="user photo" />
                  <h1>Tanggerang</h1>
                  <FontAwesomeIcon icon="location-dot" className="mx-3"/>
                  <h1>Perumahan Citran Kencana Blok D6</h1>
                  <FontAwesomeIcon icon="money-bill-transfer" className="mx-3"/>
                  <h1>Billed</h1>
                </button>
              </div>
              <div className="grid grid-cols-[80%,20%] items-center bg-[#389583] border rounded-lg px-2 mx-2 my-1">
                <div className="grid grid-rows-2">
                  <h1 className=""><strong>Order is on shipping</strong> November 21, 2024</h1>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon="warehouse" />
                    <div className="bg-gray-200 rounded-full w-28 h-1 mx-2 dark:bg-gray-700">
                      <div className="bg-blue-600 w-8 h-1 rounded-full"></div>
                    </div>
                    <FontAwesomeIcon icon="clipboard-check" />
                    <div className="bg-gray-200 rounded-full w-28 h-1 mx-2 dark:bg-gray-700">
                      <div className="bg-blue-600 w-8 h-1 rounded-full"></div>
                    </div>
                    <FontAwesomeIcon icon="truck-fast" />
                    <div className="bg-gray-200 rounded-full w-28 h-1 mx-2 dark:bg-gray-700">
                      <div className="bg-blue-600 w-8 h-1 rounded-full"></div>
                    </div>
                    <FontAwesomeIcon icon="circle-check" />
                  </div>
                </div>
                <h1>Track Shipment</h1>
              </div>
            </div>
            <div className="grid grid-rows-[25%,25%,50%] bg-[#8de4af] border-1 border-gray-500 origin-center hover:scale-95 hover:ease-in duration-300 rounded-lg h-[150px] mx-5 my-2">
              <div className="grid grid-cols-[9%,1%,70%,20%] items-center px-5">
                <h1>PO-652</h1>
                <span className="border-l-2 h-full"></span>
                <h1>Men Cotton Polo Shirt</h1>
                <div className="flex justify-around items-center">
                  <h1>$68.00</h1>
                  <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Done</span>
                  <button className="flex items-center bg-[#389583] text-zinc-800 rounded-lg px-2 py-1 hover:rounded-lg hover:border-gray-800 hover:text-zinc-500">
                    <FontAwesomeIcon icon="ellipsis" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-[70%] items-center px-5">
                <button className="flex items-center text-sm pe-1 font-medium rounded-full md:me-0 dark:text-white" type="button">
                  <img className="w-8 h-8 me-2 rounded-full" src={profil} alt="user photo" />
                  <h1>Tanggerang</h1>
                  <FontAwesomeIcon icon="location-dot" className="mx-3"/>
                  <h1>Perumahan Citran Kencana Blok D6</h1>
                  <FontAwesomeIcon icon="money-bill-transfer" className="mx-3"/>
                  <h1>Billed</h1>
                </button>
              </div>
              <div className="grid grid-cols-[80%,20%] items-center bg-[#389583] border rounded-lg px-2 mx-2 my-1">
                <div className="grid grid-rows-2">
                  <h1 className=""><strong>Order is on shipping</strong> November 21, 2024</h1>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon="warehouse" />
                    <div className="bg-gray-200 rounded-full w-28 h-1 mx-2 dark:bg-gray-700">
                      <div className="bg-blue-600 w-8 h-1 rounded-full"></div>
                    </div>
                    <FontAwesomeIcon icon="clipboard-check" />
                    <div className="bg-gray-200 rounded-full w-28 h-1 mx-2 dark:bg-gray-700">
                      <div className="bg-blue-600 w-8 h-1 rounded-full"></div>
                    </div>
                    <FontAwesomeIcon icon="truck-fast" />
                    <div className="bg-gray-200 rounded-full w-28 h-1 mx-2 dark:bg-gray-700">
                      <div className="bg-blue-600 w-8 h-1 rounded-full"></div>
                    </div>
                    <FontAwesomeIcon icon="circle-check" />
                  </div>
                </div>
                <h1>Track Shipment</h1>
              </div>
            </div>
            <div className="grid grid-rows-[25%,25%,50%] bg-[#8de4af] border-1 border-gray-500 origin-center hover:scale-95 hover:ease-in duration-300 rounded-lg h-[150px] mx-5 my-2">
              <div className="grid grid-cols-[9%,1%,70%,20%] items-center px-5">
                <h1>PO-652</h1>
                <span className="border-l-2 h-full"></span>
                <h1>Men Cotton Polo Shirt</h1>
                <div className="flex justify-around items-center">
                  <h1>$68.00</h1>
                  <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Done</span>
                  <button className="flex items-center bg-[#389583] text-zinc-800 rounded-lg px-2 py-1 hover:rounded-lg hover:border-gray-800 hover:text-zinc-500">
                    <FontAwesomeIcon icon="ellipsis" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-[70%] items-center px-5">
                <button className="flex items-center text-sm pe-1 font-medium rounded-full md:me-0 dark:text-white" type="button">
                  <img className="w-8 h-8 me-2 rounded-full" src={profil} alt="user photo" />
                  <h1>Tanggerang</h1>
                  <FontAwesomeIcon icon="location-dot" className="mx-3"/>
                  <h1>Perumahan Citran Kencana Blok D6</h1>
                  <FontAwesomeIcon icon="money-bill-transfer" className="mx-3"/>
                  <h1>Billed</h1>
                </button>
              </div>
              <div className="grid grid-cols-[80%,20%] items-center bg-[#389583] border rounded-lg px-2 mx-2 my-1">
                <div className="grid grid-rows-2">
                  <h1 className=""><strong>Order is on shipping</strong> November 21, 2024</h1>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon="warehouse" />
                    <div className="bg-gray-200 rounded-full w-28 h-1 mx-2 dark:bg-gray-700">
                      <div className="bg-blue-600 w-8 h-1 rounded-full"></div>
                    </div>
                    <FontAwesomeIcon icon="clipboard-check" />
                    <div className="bg-gray-200 rounded-full w-28 h-1 mx-2 dark:bg-gray-700">
                      <div className="bg-blue-600 w-8 h-1 rounded-full"></div>
                    </div>
                    <FontAwesomeIcon icon="truck-fast" />
                    <div className="bg-gray-200 rounded-full w-28 h-1 mx-2 dark:bg-gray-700">
                      <div className="bg-blue-600 w-8 h-1 rounded-full"></div>
                    </div>
                    <FontAwesomeIcon icon="circle-check" />
                  </div>
                </div>
                <h1>Track Shipment</h1>
              </div>
            </div>
            <div className="grid grid-rows-[25%,25%,50%] bg-[#8de4af] border-1 border-gray-500 origin-center hover:scale-95 hover:ease-in duration-300 rounded-lg h-[150px] mx-5 my-2">
              <div className="grid grid-cols-[9%,1%,70%,20%] items-center px-5">
                <h1>PO-652</h1>
                <span className="border-l-2 h-full"></span>
                <h1>Men Cotton Polo Shirt</h1>
                <div className="flex justify-around items-center">
                  <h1>$68.00</h1>
                  <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Done</span>
                  <button className="flex items-center bg-[#389583] text-zinc-800 rounded-lg px-2 py-1 hover:rounded-lg hover:border-gray-800 hover:text-zinc-500">
                    <FontAwesomeIcon icon="ellipsis" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-[70%] items-center px-5">
                <button className="flex items-center text-sm pe-1 font-medium rounded-full md:me-0 dark:text-white" type="button">
                  <img className="w-8 h-8 me-2 rounded-full" src={profil} alt="user photo" />
                  <h1>Tanggerang</h1>
                  <FontAwesomeIcon icon="location-dot" className="mx-3"/>
                  <h1>Perumahan Citran Kencana Blok D6</h1>
                  <FontAwesomeIcon icon="money-bill-transfer" className="mx-3"/>
                  <h1>Billed</h1>
                </button>
              </div>
              <div className="grid grid-cols-[80%,20%] items-center bg-[#389583] border rounded-lg px-2 mx-2 my-1">
                <div className="grid grid-rows-2">
                  <h1 className=""><strong>Order is on shipping</strong> November 21, 2024</h1>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon="warehouse" />
                    <div className="bg-gray-200 rounded-full w-28 h-1 mx-2 dark:bg-gray-700">
                      <div className="bg-blue-600 w-8 h-1 rounded-full"></div>
                    </div>
                    <FontAwesomeIcon icon="clipboard-check" />
                    <div className="bg-gray-200 rounded-full w-28 h-1 mx-2 dark:bg-gray-700">
                      <div className="bg-blue-600 w-8 h-1 rounded-full"></div>
                    </div>
                    <FontAwesomeIcon icon="truck-fast" />
                    <div className="bg-gray-200 rounded-full w-28 h-1 mx-2 dark:bg-gray-700">
                      <div className="bg-blue-600 w-8 h-1 rounded-full"></div>
                    </div>
                    <FontAwesomeIcon icon="circle-check" />
                  </div>
                </div>
                <h1>Track Shipment</h1>
              </div>
            </div>
          </div>
        </div>
      </div>*/}
    </div>
  )
}