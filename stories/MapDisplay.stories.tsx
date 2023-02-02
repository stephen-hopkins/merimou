import MapDisplay from "@/components/MapDisplay";
import {Meta, Story} from "@storybook/react";
import Mockstore from "@/stories/MockStore";
import {createDefaultPlaceLists} from "@/redux/localStorageMiddleware";
import {v4 as uuidv4} from "uuid";

export default {
  component: MapDisplay,
  title: "MapDisplay",
  decorators: [(story) => (
    <Mockstore placeListState={createDefaultPlaceLists()}>
      <div style={{width: '1000px', height: '500px'}}>{story()}</div>
    </Mockstore>
  )]
} as Meta;

export const Default: Story = (args) => <MapDisplay {...args}/>
Default.parameters = {
  nextRouter: {
    path: "/",
    asPath: "/",
  }
}

export const Centered = Default.bind({});
Centered.parameters = {
  nextRouter: {
    query: {
      focus: 'ChIJSU9RuS69oRQRBAlxaE_Rm_Q'
    }
  }
}

const places = {
  value: [
    {
      id: 'id1',
      name: 'Default',
      description: 'The default one',
      places: [{
        id: uuidv4(),
        name: 'Tasty corner',
        description: 'Great kebab shop',
        placeId: 'ChIJSU9RuS69oRQRBAlxaE_Rm_Q',
        lat: 37.9888612,
        lng: 23.7227196,
        address: "Psaron, Athens, Greece"
      }, {
        id: 'id2',
        name: 'Blue parrot',
        description: 'A bar',
        placeId: 'ChIJXRWMXya9oRQRo0hJmLsblio',
        lat: 37.9828305,
        lng: 23.7201365,
        address: "Leonidou, Athens, Greece"
      }]
    }
  ],
  selectedIndex: 0
}

export const WithPlaces = Default.bind({});
WithPlaces.decorators = [
  (story) => (
    <Mockstore placeListState={places}>
      <div style={{width: '1000px', height: '500px'}}>{story()}</div>
    </Mockstore>
  )]
