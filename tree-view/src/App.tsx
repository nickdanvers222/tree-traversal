
import React from "react";
import Tree from "react-d3-tree";
import clone from "clone";

const debugData = {
  name: "1",
  children: [
    {
      name: "2"
    },
    {
      name: "3"
    }
  ]
};

const containerStyles = {
  width: "100%",
  height: "100vh"
};

export default class CenteredTree extends React.PureComponent {
  state = {
    data: debugData
  };

  injectedNodesCount = 0;

  doSearch = (event:any, theNode:any) => {
    let target = event.name;
    let name;

    if (theNode.children === null || theNode.children === undefined) {
      return console.log("no child left");
    }

    if (theNode.name === target) {
      // name = theNode.name;
      // theNode.children.push({ name: "test" });
      return theNode;
    } else {
      for (const child of theNode.children) {
        if (child.name === target) {
          // name = child.name;

          return child;
        } else {
          this.doSearch(event, child.name);
        }
      }
    }
  };

  addChildNode = (event:any) => {
    const nextData = clone(this.state.data);
    // const target = nextData.children;

    let target = this.doSearch(event, nextData);
    // console.log(this.doSearch(event, nextData));
    target["children"] = [];
    console.log(target);

    this.injectedNodesCount++;
    target.children.push({
      name: `Inserted Node 321`,
      id: `inserted-node-${this.injectedNodesCount}`
    });
    this.setState({
      data: nextData
    });
  };

  removeChildNode = () => {
    const nextData = clone(this.state.data);
    const target = nextData.children;
    target.pop();
    this.injectedNodesCount--;
    this.setState({
      data: nextData
    });
  };

  componentDidMount() {
    // Get treeContainer's dimensions so we can center the tree
    //        const dimensions = element.getBoundingClientRect();

    const dimensions = this.treeContainer.getBoundingClientRect();
    this.setState({
      translate: {
        x: dimensions.width / 2,
        y: dimensions.height / 2
      }
    });
  }

  render() {
    return (
      <div style={containerStyles} ref={tc => (this.treeContainer = tc)}>
        <button onClick={this.addChildNode}>Add Node</button>
        <button onClick={this.removeChildNode}>Remove Node</button>
        <Tree
          data={this.state.data}
          translate={this.state.translate}
          orientation={"vertical"}
          onClick={this.addChildNode}
        />
      </div>
    );
  }
}










// import React from "react";
// import Tree from "react-d3-tree";
// import data from "./data";

// const debugData = [
//   {
//     name: "Robert",  
//     children: [
//       {
//         name: "Simon"  
//       },
//       {
//         name: "Nicholas"  
//       }
//     ]
//   }
// ];

// const containerStyles = {
//   width: '100%',  
//   height: '100vh',
// }


//   class App extends React.PureComponent<{},{size: object, data: Array<Object>}> {
//     constructor(props:any) {
//       super(props);  
//       this.state = {
//         size:{},  
//         data:[],
//       };

//     }
//     componentWillMount() {
//       this.setState(prev => ({...prev, data:debugData}))  
//     }

//     refCallback = (element:any) => {
//       if (element) {
//        const dimensions = element.getBoundingClientRect();  
//        this.setState(prev => ({...prev, size:{x: dimensions.width / 2,y: dimensions.height / 2}}));

//       }
//     };
  
//     render() {
//       return (
//         <div style={containerStyles} ref={this.refCallback}>  
//           <Tree 
//             data={this.state.data} 
//             translate={this.state.size} 
//             orientation={'vertical'}
//             onClick={(,event)=>{
//               console.log(event);  
//               let example = this.state.data[0]
//               console.log(data);
//               // this.setState(prev => ({data: ...example,}));
//             }}
//           />
//         </div>
//       );
//     }
// } 


