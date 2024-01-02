{/* 
<div id="parent">
   <div id="child">
      <h1>i'm an h1 tag</h1> 
   <h2>i'm an h2 tag</h2>
      </div> 
   <div id="child">
      <h1>i'm an h1 tag</h1> 
   </div> 
</div>
*/}


const react = React.createElement("div", { id: "parent" },
                  [React.createElement("div", { id: "child" }, 
                      [ React.createElement("h1", {}, "i'm an h1 tag"),
                      React.createElement("h2", {}, "i'm an h2 tag") ]),
                      React.createElement("div", { id: "child2" }, 
                      [ React.createElement("h1", {}, "i'm an h1 tag"),
                      React.createElement("h2", {}, "i'm an h2 tag") ]) ]);

console.log(react);
const reactDOM = ReactDOM.createRoot(document.getElementById("root"));
console.log(reactDOM);
reactDOM.render(react);















