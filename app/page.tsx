export default function Home() {
  const steps = [
    { instruction: "西改札の案内板を探す" },
    { instruction: "階段を下る" },
    { instruction: "西改札を出る", checkpoint: "西改札を通過" },
    { instruction: "改札を出たら左に曲がる" },
    { instruction: "丸の内線の案内板に従って進む" },
    { instruction: "丸の内線の改札に到着", checkpoint: "丸の内線改札に到着" },
  ];

  return (
    <>
      <h1>JR新宿駅→丸の内線</h1>
      <p>西改札経由</p>
      {steps.map((step, index) => (
        <div key={index}>
          <div>
            {index + 1}. {step.instruction}
          </div>
          {step.checkpoint && <div>写真準備中</div>}
          {step.checkpoint && <div>✔︎{step.checkpoint}</div>}
        </div>
      ))}
    </>
  );
}
