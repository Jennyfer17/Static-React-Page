require('file-loader?name=[name].[ext]!./index.html')
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from "./App"
import './App.scss'

const element = document.getElementById("root")

ReactDOM.render(<App />, element)
