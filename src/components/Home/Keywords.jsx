import tagCanvas from 'tag-canvas';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BgCircle from '@/assets/home_universeCircle.png';

function Keywords() {
  const [canvasSize, setCanvasSize] = useState({ width: 550, height: 550 });
  const [textHeight, setTextHeight] = useState(21);
  useEffect(() => {
    // Set canvas size based on viewport width
    const updateCanvasSize = () => {
      if (window.innerWidth <= 1023) {
        setCanvasSize({ width: 280, height: 280 });
        setTextHeight(14);
      } else {
        setCanvasSize({ width: 550, height: 550 });
        setTextHeight(21);
      }
    };

    // Update canvas size when window is resized
    window.addEventListener('resize', updateCanvasSize);

    // Update canvas size on initial render
    updateCanvasSize();

    return () => {
      // Remove event listener on clean up
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  useEffect(() => {
    try {
      tagCanvas.Start('myCanvas', 'tags', {
        textColour: 'white',
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.07,
        outlineMethod: 'none',
        textHeight,
        wheelZoom: false,
      });
    } catch (e) {
      document.getElementById('myCanvasContainer').style.display = 'none';
    }
  }, [canvasSize]);

  return (
    <div style={{ backgroundImage: `url('${BgCircle}')` }} className="border-none bg-cover">
      <div id="myCanvasContainer" className="">
        <canvas id="myCanvas" width={canvasSize.width} height={canvasSize.height}>
          <p>
            Anything in here will be replaced on browsers that do not support the canvas element
          </p>
        </canvas>
      </div>
      <div id="tags" style={{ display: 'none' }}>
        <ul>
          <li>
            <Link to="/industries/semiconductor">semiconductor</Link>
          </li>
          <li>
            <Link to="/industries/display">display</Link>
          </li>
          <li>
            <Link to="/industries/battery">battery</Link>
          </li>
          <li>
            <Link to="/industries/port">port</Link>
          </li>
          <li>
            <Link to="/solutions/ACS">ACS</Link>
          </li>
          <li>
            <Link to="/solutions/ACS">AGV</Link>
          </li>
          <li>
            <Link to="/solutions/OCS">OCS</Link>
          </li>
          <li>
            <Link to="/solutions/SCS">SCS</Link>
          </li>
          <li>
            <Link to="/solutions/CCS">CCS</Link>
          </li>
          <li>
            <Link to="/solutions/IDX Controller">IDX Controller</Link>
          </li>
          <li>
            <Link to="/solutions/Map Designer">Map Designer</Link>
          </li>
          <li>
            <Link to="/solutions/AIMS">AIMS</Link>
          </li>
          <li>
            <Link to="/solutions/HSMS">HSMS</Link>
          </li>
          <li>
            <Link to="/solutions/ACS Simulator">ACS Simulator</Link>
          </li>
          <li>
            <Link to="/solutions/SCS Simulator">SCS Simulator</Link>
          </li>
          <li>
            <Link to="/machines/Lift Type">AGV Lift Type</Link>
          </li>
          <li>
            <Link to="/machines/Lift Type2">AGV Lift Type2</Link>
          </li>
          <li>
            <Link to="/machines/Fork-Lift Type">AGV Fork-Lift Type</Link>
          </li>
          <li>
            <Link to="/machines/Foup Type">AGV Foup Type</Link>
          </li>
          <li>
            <Link to="/devices/Microsoft">HoloLens</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Keywords;
