import React from "react"
import MyImage from "./assets/imagem.png"

export function Header() {
    return (
        <header className="header">
            <img src={MyImage} className="minha-imagem"></img>
        </header>
    );
}

