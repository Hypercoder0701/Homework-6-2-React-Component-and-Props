import RightListItem from "./RightListItem";

function MainCompRight() {
  return (
    <div className="maincompright-div-style">
      <span>NEW</span>
      <RightListItem
        title="Hydrogen VS Electric Cars"
        description="Will hydrogen-fueled cars ever catch up to EVs?"
      />
      <RightListItem
        title="The Downsides of AI Artistry"
        description="What are the possible adverse effects of on-demand AI image generation?"
      />
      <RightListItem
        className="border-none"
        title="Is VC Funding Drying Up?"
        description="Private funding by VC firms is down 50% YOY. We take a look at what that means."
      />
    </div>
  );
}

export default MainCompRight;
