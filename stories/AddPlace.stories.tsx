import AddPlace, {AddPlaceProps} from "@/components/AddPlace";
import {Meta, Story} from "@storybook/react";

export default {
  component: AddPlace,
  title: "AddPlace"
} as Meta<typeof AddPlace>;

export const Default: Story<AddPlaceProps> = (args) => (<AddPlace {...args} />);
Default.args = {
  show: true,
  name: '',
  setName: () => {},
  description: '',
  setDescription: () => {},
  save: () => {},
  cancel: () => {}
};

export const Hidden = Default.bind({});
Hidden.args = {
  show: false
}


