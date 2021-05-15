import React, {useState} from 'react';
import uuid from 'react-uuid'
import { Stage, Layer, Rect ,Star, Text } from 'react-konva';

// function generateShapes() {
//   return [...Array(10)].map((_, i) => ({
//     id: i.toString(),
//     x: Math.random() * window.innerWidth,
//     y: Math.random() * window.innerHeight,
//     rotation: Math.random() * 180,
//     isDragging: false,
//   }));
// }

function createRects() {
  return [...Array(128)].map((_, i) => ({
    id: uuid(),
    index: i,
    x: (200.0/128.0)*i,
    y: 50,
    width: (200/128.0),
    fill: 'black',
    stroke: 'black',
    strokeWidth: 2
  }))
}

const INITIAL_STATE = createRects();

const ParameterRect = (props) => {
  const [isMouseDown, setIsMouseDown] = useState(false)
  const [rects, setRects] = useState(INITIAL_STATE)

  const handleOnMouseDown = (e) => {
    setIsMouseDown(!isMouseDown)
  }
  const handleOnMouseUp = (e) => {
    setIsMouseDown(!isMouseDown)
  }
  const handleOnMouseMove = (e) => {
    if(isMouseDown) {
      console.log("",e)
      setRects(
        rects.map((rect) => {
          return {
            ...rect,
            height: e.evt.layerY,
          };
        })
      )
    }
  }

  const handleOnMouseLeave = () => {
    //setIsMouseDown(false)
  }
  return (
    <>
    <Stage 
    width={200} 
    height={200}
    onMouseDown={handleOnMouseDown}
    onMouseUp={handleOnMouseUp}
    onMouseMove={handleOnMouseMove}
    onMouseLeave={handleOnMouseLeave}
    >
    <Layer>
    {/* <Rect
    x={0}
    y={0}
    width={200}
    height={200}
    fill={'black'}
    >

    </Rect> */}
    {
      rects.map((rect) => (
        <Rect
        id={rect.id}
        key={rect.id}
        x={rect.x}
        y={rect.y}
        width={rect.width}
        height={rect.height}
        fill={rect.fill}
        stroke={rect.stroke}
        strokeWidth={rect.strokeWidth}
        >
        </Rect>
      ))
    }
    </Layer>
    </Stage>
    </>
  )
}

const App = () => {
  return (
    <div>
    <ParameterRect/>
    </div>
  )
}
// const App = () => {
//   const [stars, setStars] = React.useState(INITIAL_STATE);

//   const handleDragStart = (e) => {
//     const id = e.target.id();
//     setStars(
//       stars.map((star) => {
//         return {
//           ...star,
//           isDragging: star.id === id,
//         };
//       })
//     );
//   };
//   const handleDragEnd = (e) => {
//     setStars(
//       stars.map((star) => {
//         return {
//           ...star,
//           isDragging: false,
//         };
//       })
//     );
//   };

//   return (
//     <Stage width={window.innerWidth} height={window.innerHeight}>
//       <Layer>
//         <Text text="Try to drag a star" />
//         {stars.map((star) => (
//           <Star
//             key={star.id}
//             id={star.id}
//             x={star.x}
//             y={star.y}
//             numPoints={5}
//             innerRadius={20}
//             outerRadius={40}
//             fill="#89b717"
//             opacity={0.8}
//             draggable
//             rotation={star.rotation}
//             shadowColor="black"
//             shadowBlur={10}
//             shadowOpacity={0.6}
//             shadowOffsetX={star.isDragging ? 10 : 5}
//             shadowOffsetY={star.isDragging ? 10 : 5}
//             scaleX={star.isDragging ? 1.2 : 1}
//             scaleY={star.isDragging ? 1.2 : 1}
//             onDragStart={handleDragStart}
//             onDragEnd={handleDragEnd}
//           />
//         ))}
//       </Layer>
//     </Stage>
//   );
// };

export default App
