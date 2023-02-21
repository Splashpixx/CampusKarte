import React, { useState, useRef, useLayoutEffect, useReducer, Suspense, useEffect  } from "react";
import {RenderChild, Thing, AddNewPointRandom, BadCode} from "./buildingGen"
import {MeshClickable, MeshNOTClickable, ImportMeshesFromOBJ, meshcollection} from "./test/MeshFunctions";
import {findPath, findPathSimple} from "./test/FindPath";
import {importPathMesh} from "./test/ImportPathMesh";



/*
const[showEtage3, setshowEtage3] = useState(true)
    const[showEtage2, setshowEtage2] = useState(true)
    const[showEtage1, setshowEtage1] = useState(true)
    const[showEtage0, setshowEtage0] = useState(true)
const activeRooms = []

// Fügt dem Array über uns den angeklickten vector hinzu
function raumauswahl(state, action) {

  const vecToArray = action.payloade.slice(-3)
  // Increment = Raum ist Aktiv, Decrement = Raum ist inaktiv 
  switch (action.type) {
    case 'increment':
      
      // wenn unser arrayWithActiveRooms leer ist müssen wir nicht schauen ob es den ausgewählten draum im array doppelt gibt 
      if(activeRooms.length <= 0){
        activeRooms.push(vecToArray)
        } else {
          var inArray = false
          // Geht den array Durch und schaut nach doppelten einträgen
          activeRooms.forEach(element => {
            if(JSON.stringify(element) == JSON.stringify(vecToArray)){
              inArray = true
            }
            });
            if(!inArray){
              activeRooms.push(vecToArray)
            }
        }

      return
    case 'decrement':
      if(JSON.stringify(activeRooms[0]) == JSON.stringify(vecToArray)){
        activeRooms.splice(0, 1);
      }
      
      if (JSON.stringify(activeRooms[1]) == JSON.stringify(vecToArray)){
        activeRooms.splice(1, 1);
      } 
        return
    default:
      throw new Error();
  }
}

const AddEtage03Raeume = () => { return ImportMeshesFromOBJ("obj/Main_Etage_03_Raeume.obj",true, "#ff0000", "yellow", "green", raumauswahl, activeRooms)}

function AddEtage03Geo(){
  return ImportMeshesFromOBJ("obj/Main_Etage_03_Geo.obj",false, "#aaaaaa", "", "", raumauswahl, activeRooms)}
function AddEtage02Raeume(){
  return ImportMeshesFromOBJ("obj/Main_Etage_02_Raeume.obj",true, "#cc0000", "yellow", "green", raumauswahl, activeRooms)}
function AddEtage02Geo(){
  return ImportMeshesFromOBJ("obj/Main_Etage_02_Geo.obj",false, "#999999", "", "", raumauswahl, activeRooms)}
function AddEtage01Raeume(){
  return ImportMeshesFromOBJ("obj/Main_Etage_01_Raeume.obj",true, "#880000", "yellow", "green", raumauswahl, activeRooms)}
function AddEtage01Geo(){
  return ImportMeshesFromOBJ("obj/Main_Etage_01_Geo.obj",false, "#888888", "", "", raumauswahl, activeRooms)}
function AddEtage00Raeume(){
  return ImportMeshesFromOBJ("obj/Main_Etage_00_Raeume.obj",true, "#440000", "yellow", "green", raumauswahl, activeRooms)}
function AddEtage00Geo(){
  return ImportMeshesFromOBJ("obj/Main_Etage_00_Geo.obj",false, "#666666", "", "", raumauswahl, activeRooms)}
function AddStairs(){
  return ImportMeshesFromOBJ("obj/Stairs.obj",false, "#66aa66", "", "", raumauswahl, activeRooms)}
function AddElevators(){
  return ImportMeshesFromOBJ("obj/Elevators.obj",false, "#5566bb", "", "", raumauswahl, activeRooms)}
function AddGround(){
  return ImportMeshesFromOBJ("obj/Ground.obj",false, "#222222", "", "", raumauswahl, activeRooms)}

const MapTH = () => {
    return(
    <>
        {showEtage3 && <AddEtage03Geo/>}
        {showEtage3 && <AddEtage03Raeume/>}
        {showEtage2 && <AddEtage02Geo/>}
        {showEtage2 && <AddEtage02Raeume/>}
        {showEtage1 &&<AddEtage01Geo/>}
        {showEtage1 &&<AddEtage01Raeume/>}
        {showEtage0 && <AddEtage00Geo/>}
        {showEtage0 && <AddEtage00Raeume/>}
        <AddStairs/>
        <AddElevators/>
        <AddGround/>
    </>
    )
}


function EtagenAuswahl(){
    const[showEtage3, setshowEtage3] = useState(true)
    const[showEtage2, setshowEtage2] = useState(true)
    const[showEtage1, setshowEtage1] = useState(true)
    const[showEtage0, setshowEtage0] = useState(true)

    return(
      <div className="etagen">
        <button style={{ backgroundColor: showEtage3 ? "#00FA9A" : "#C60C0F" }} onClick={() => setshowEtage3(!showEtage3)}>Etage 3</button>
        <button style={{ backgroundColor: showEtage2 ? "#00FA9A" : "#C60C0F" }} onClick={() => setshowEtage2(!showEtage2)}>Etage 2</button>
        <button style={{ backgroundColor: showEtage1 ? "#00FA9A" : "#C60C0F" }} onClick={() => setshowEtage1(!showEtage1)}>Etage 1</button>
        <button style={{ backgroundColor: showEtage0 ? "#00FA9A" : "#C60C0F" }} onClick={() => setshowEtage0(!showEtage0)}>Etage 0</button>
      </div>
    )
  }

export {EtagenAuswahl,MapTH,activeRooms}*/