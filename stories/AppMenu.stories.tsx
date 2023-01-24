import AppMenu from "../components/AppMenu";
import {Meta, Story} from "@storybook/react";

export default {
    component: AppMenu,
    title: 'AppMenu'
} as Meta;

export const Default: Story = () => <AppMenu />