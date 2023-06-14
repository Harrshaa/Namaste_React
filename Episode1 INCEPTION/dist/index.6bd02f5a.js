const heading = React.createElement("h1", {
    id: "heading"
}, "Hello World from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {
        id: "heading"
    }, "Hello from nested divs"),
    "Hello from nested divs"
]));
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
console.log(root1);
root1.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
