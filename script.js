const paren=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        [ React.createElement("h1",{},"hello  welcome "),React.createElement("h2",{},"hello  welcome i am h2 ")]))



const heading=React.createElement("h1",{id:"heaf"},"Hello welcome to react !");
const root=ReactDOM.createRoot(document.getElementById("root"));
 root.render(paren);