
import React from 'react';
// import Tree from 'react-tree-graph';
import data from './data';
import 'react-tree-graph/dist/style.css'
import './App.css';



import Tree from 'react-d3-tree';
 
const myTreeData = [
  {
    name: 'Top Level',
    attributes: {
      keyA: 'val A',
      keyB: 'val B',
      keyC: 'val C',
    },
    children: [
      {
        name: 'Level 2: A',
        attributes: {
          keyA: 'val A',
          keyB: 'val B',
          keyC: 'val C',
        },
      },
      {
        name: 'Level 2: B',
      },
    ],
  },
];
 
class App extends React.Component {
  render() {
    return (
      <div id="treeWrapper" style={{width: '100vw', height: '100vh', backgroundPosition:'center'}}>
 
        <Tree data={myTreeData} onClick={(event)=>{console.log(event)}}/>
 
      </div>
    );
  }
}















// const App: React.FC = (props: any) => {
//   const handleClick = (event: any, node: any) => {
//     console.log('handle click ', event);
//     console.log('handle click node', node);
//     console.log(data.children)
//     alert(node);
//   }

//   return (
    
// <Tree
//   data={data}
//   nodeRadius={15}
//   margins={{ top: 20, bottom: 10, left: 20, right: 200 }}
//   getChildren={function(node:any){return node.children}}
//   gProps={{
//     className:'node',
//     onClick:handleClick
//   }}
// 	height={700}
// 	width={1000}/>
//   );
// }


export default App;
