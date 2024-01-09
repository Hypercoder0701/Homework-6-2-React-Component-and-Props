import CardItem from "./CardItem";

function PageBottom() {
  return (
    <div className="pagebottom-div">
      <CardItem
        imgsrc="card01.png"
        number="01"
        title="Reviving Retro PCs"
        description="What happens when old PCs are given modern upgrades?"
      />
      <CardItem
        imgsrc="card02.png"
        number="02"
        title="Top 10 Laptops of 2022"
        description="Our best picks for various needs and budgets."
      />
      <CardItem
        imgsrc="card03.png"
        number="03"
        title="The Growth of Gaming"
        description="How the pandemic has sparked fresh opportunities."
      />
    </div>
  );
}

export default PageBottom;
