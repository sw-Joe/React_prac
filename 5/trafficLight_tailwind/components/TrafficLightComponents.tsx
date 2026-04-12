import { useState } from "react";
import styled from "styled-components";

const TrafficLight = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #333;
  width: 120px;
  height: 320px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 20px 0;
`;

const LightButton = styled.button< {$color: string; $activeColor: string} >`
  width: 80px;
  height: 80px;
  background-color: ${({$activeColor, $color}) => $activeColor === $color ? $color : "gray"};
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
`;

export default function TrafficLightComponents() {
  const [activeColor, setActiveColor] = useState("gray");

  return (
    <>
      <TrafficLight>
        {/* prop을 전달하여 색상 표현 */}
        <LightButton $color="#ff0000" $activeColor = {activeColor} onClick={
          () => setActiveColor("#ff0000")} />
        <LightButton $color="#ffff00" $activeColor = {activeColor} onClick={
          () => setActiveColor("#ffff00")} />
        <LightButton $color="#00ff00" $activeColor = {activeColor} onClick={
          () => setActiveColor("#00ff00")} />
      </TrafficLight>
    </>
  );
}