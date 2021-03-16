import React from "react";
import TopMenu from "./TopMenu"
import GenrePicker from "./GenrePicker"
import AlbumListt from "./AlbumListt"
// import { albums } from "../data/albums";

function MainContent() {
  return <main>
    < TopMenu />
    < GenrePicker />
    < AlbumListt />
      </main>;
}

export default MainContent;
