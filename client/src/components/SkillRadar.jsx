import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from "recharts";

const data = [
  { skill: "Python", value: 90 },
  { skill: "SQL", value: 85 },
  { skill: "Power BI", value: 80 },
  { skill: "ML", value: 75 },
  { skill: "Statistics", value: 88 }
];

function SkillRadar() {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "20px",
        padding: "20px",
        height: "400px"
      }}
    >
      <h2 style={{ color: "black" }}>
        Skill Intelligence Radar
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="skill" />
          <PolarRadiusAxis />
          <Radar
            dataKey="value"
            fill="#3b82f6"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SkillRadar;