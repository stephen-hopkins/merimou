import SearchPlacesResults, {SearchPlacesResultsProps} from "@/components/SearchPlacesResults";
import {Meta, Story} from "@storybook/react";
import Mockstore from "@/stories/MockStore";
import {createDefaultPlaceLists} from "@/redux/localStorageMiddleware";

export default {
  component: SearchPlacesResults,
  title: "SearchPlacesResults",
  decorators: [(story) => (<Mockstore placeListState={createDefaultPlaceLists()}>
    <div style={{ padding: '3rem', color: 'black' }}>{story()}</div>
  </Mockstore>)]
} as Meta;


export const Default: Story<SearchPlacesResultsProps> = (args) => <SearchPlacesResults {...args} />
Default.args = {
  searchResults: [
    {
      structured_formatting: {main_text: 'A place', secondary_text: 'This is a place'},
      place_id: 'fdsfd', description: 'Blah blah blah'
    },
    {
      structured_formatting: {main_text: 'Another place', secondary_text: 'This is a another place'},
      place_id: 'fdsfd2', description: 'Blah blah blah ge fdsf ggdgfg'
    },
    {
      structured_formatting: {main_text: 'A third place', secondary_text: 'This is a third place'},
      place_id: 'fdsfd3', description: 'Blah blah blah ffdfd sdfdfsdf'
    }
  ]
}
