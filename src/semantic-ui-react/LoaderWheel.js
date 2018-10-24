import React from "react";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";


const LoaderWheel = () => (
  <Segment>
    <Dimmer active>
      <Loader size="medium">Loading</Loader>
    </Dimmer>
  </Segment>
);

export default LoaderWheel;

{
  /* <div class='ui segment'>
<div class='ui active transition visible dimmer'>
  <div class='content'>
    <div class='ui mini text loader'>Loading</div>
  </div>
</div>
<img src='/images/wireframe/short-paragraph.png' class='ui image' />
</div> */
}
