import React from "react";
import {
  Checkbox,
  DefaultButton,
  PrimaryButton,
  CompoundButton,
  ActionButton,
  IIconProps,
  IContextualMenuProps,
  CommandButton,
  HighContrastSelector,
  IButtonStyles,
  IconButton,
  IChoiceGroupOption,
  ChoiceGroup,
  SearchBox,
  DropdownMenuItemType,
  IDropdownOption,
  IDropdownStyles,
  Dropdown,
  Toggle,
} from "@fluentui/react";
import { initializeIcons } from "@fluentui/react/lib/Icons";
import { TestImages } from "@uifabric/example-data";

class FluentUI extends React.Component<{}, {}> {
  constructor() {
    super({});
    this.state = {};
  }

  render() {
    initializeIcons();
    const menuProps: IContextualMenuProps = {
      items: [
        {
          key: "emailMessage",
          text: "Email message",
          iconProps: { iconName: "Mail" },
        },
        {
          key: "calendarEvent",
          text: "Calendar event",
          iconProps: { iconName: "Calendar" },
        },
      ],
      // By default, the menu will be focused when it opens. Uncomment the next line to prevent this.
      // shouldFocusOnMount: false
    };
    const customSplitButtonStyles: IButtonStyles = {
      splitButtonMenuButton: {
        backgroundColor: "white",
        width: 28,
        border: "none",
      },
      splitButtonMenuIcon: { fontSize: "7px" },
      splitButtonDivider: {
        backgroundColor: "#c8c8c8",
        width: 1,
        right: 26,
        position: "absolute",
        top: 4,
        bottom: 4,
      },
      splitButtonContainer: {
        selectors: {
          [HighContrastSelector]: { border: "none" },
        },
      },
    };
    const options: IChoiceGroupOption[] = [
      { key: "A", text: "Option A" },
      { key: "B", text: "Option B" },
      { key: "C", text: "Option C", disabled: true },
      { key: "D", text: "Option D" },
    ];
    const options2: IChoiceGroupOption[] = [
      {
        key: "bar",
        imageSrc: TestImages.choiceGroupBarUnselected,
        imageAlt: "Bar chart icon",
        selectedImageSrc: TestImages.choiceGroupBarSelected,
        imageSize: { width: 32, height: 32 },
        text: "Clustered bar chart", // This text is long to show text wrapping.
      },
      {
        key: "pie",
        imageSrc: TestImages.choiceGroupBarUnselected,
        selectedImageSrc: TestImages.choiceGroupBarSelected,
        imageSize: { width: 32, height: 32 },
        text: "Pie chart",
      },
    ];
    const options3: IChoiceGroupOption[] = [
      { key: "day", text: "Day", iconProps: { iconName: "CalendarDay" } },
      { key: "week", text: "Week", iconProps: { iconName: "CalendarWeek" } },
      {
        key: "month",
        text: "Month",
        iconProps: { iconName: "Calendar" },
        disabled: true,
      },
    ];
    const dropdownStyles: Partial<IDropdownStyles> = {
      dropdown: { width: 300 },
    };
    const options4: IDropdownOption[] = [
      {
        key: "fruitsHeader",
        text: "Fruits",
        itemType: DropdownMenuItemType.Header,
      },
      { key: "apple", text: "Apple" },
      { key: "banana", text: "Banana" },
      { key: "orange", text: "Orange", disabled: true },
      { key: "grape", text: "Grape" },
      { key: "divider_1", text: "-", itemType: DropdownMenuItemType.Divider },
      {
        key: "vegetablesHeader",
        text: "Vegetables",
        itemType: DropdownMenuItemType.Header,
      },
      { key: "broccoli", text: "Broccoli" },
      { key: "carrot", text: "Carrot" },
      { key: "lettuce", text: "Lettuce" },
    ];

    const addFriendIcon: IIconProps = { iconName: "AddFriend" };
    const addIcon: IIconProps = { iconName: "Add" };

    return (
      <div className="TestArea">
        <DefaultButton className="TestAreaItems">Default Button</DefaultButton>
        <PrimaryButton className="TestAreaItems">Primary Button</PrimaryButton>
        <CompoundButton
          className="TestAreaItems"
          secondaryText="This is the secondary text."
        >
          Standard
        </CompoundButton>
        <CompoundButton
          className="TestAreaItems"
          primary
          secondaryText="This is the secondary text."
        >
          Primary
        </CompoundButton>
        <ActionButton iconProps={addFriendIcon}>Create account</ActionButton>
        <CommandButton
          iconProps={addIcon}
          text="New item"
          menuProps={menuProps}
        />
        <IconButton
          split
          iconProps={addIcon}
          splitButtonAriaLabel="See 2 options"
          aria-roledescription="split button"
          styles={customSplitButtonStyles}
          menuProps={menuProps}
          ariaLabel="New item"
        />
        <br />
        <br />
        <Checkbox className="TestAreaItems" label="Unchecked checkbox" />
        <Checkbox
          className="TestAreaItems"
          label="Checked checkbox (uncontrolled)"
          defaultChecked
        />
        <Checkbox
          className="TestAreaItems"
          label="Disabled checkbox"
          disabled
        />
        <Checkbox
          className="TestAreaItems"
          label="Disabled checked checkbox"
          disabled
          defaultChecked
        />
        <br />
        <br />
        <div>
          <div style={{ float: "left", margin: 20 }}>
            <ChoiceGroup
              defaultSelectedKey="B"
              options={options}
              label="Pick one"
              required={true}
            />
          </div>
          <div style={{ float: "left", margin: 20 }}>
            <ChoiceGroup
              label="Pick one image"
              defaultSelectedKey="bar"
              options={options2}
            />
          </div>
          <div style={{ float: "left", margin: 20 }}>
            <ChoiceGroup
              label="Pick one icon"
              defaultSelectedKey="day"
              options={options3}
            />
          </div>
        </div>
        <br style={{ clear: "both" }} />
        <br />
        <SearchBox placeholder="Search" />
        <br />
        <SearchBox placeholder="Search" underlined={true} />
        <br />
        <div style={{ float: "left", margin: 20 }}>
          <Dropdown
            placeholder="Select an option"
            label="Basic uncontrolled example"
            options={options4}
            styles={dropdownStyles}
          />
        </div>
        <div style={{ float: "left", margin: 20 }}>
          <Dropdown
            label="Disabled example with defaultSelectedKey"
            defaultSelectedKey="broccoli"
            options={options4}
            disabled={true}
            styles={dropdownStyles}
          />
        </div>
        <div style={{ float: "left", margin: 20 }}>
          <Dropdown
            placeholder="Select options"
            label="Multi-select uncontrolled example"
            defaultSelectedKeys={["apple", "banana", "grape"]}
            multiSelect
            options={options4}
            styles={dropdownStyles}
          />
        </div>
        <br style={{ clear: "both" }} />
        <Toggle
          style={{}}
          label="Enabled and checked"
          defaultChecked
          onText="On"
          offText="Off"
        />

        <Toggle label="Enabled and unchecked" onText="On" offText="Off" />

        <Toggle
          label="Disabled and checked"
          defaultChecked
          disabled
          onText="On"
          offText="Off"
        />

        <Toggle
          label="Disabled and unchecked"
          disabled
          onText="On"
          offText="Off"
        />

        <Toggle
          label="With inline label"
          inlineLabel
          onText="On"
          offText="Off"
        />

        <Toggle
          label="Disabled with inline label"
          inlineLabel
          disabled
          onText="On"
          offText="Off"
        />

        <Toggle
          label="With inline label and without onText and offText"
          inlineLabel
        />

        <Toggle
          label="Disabled with inline label and without onText and offText"
          inlineLabel
          disabled
        />

        <Toggle
          label="Enabled and checked (ARIA 1.0 compatible)"
          defaultChecked
          onText="On"
          offText="Off"
          role="checkbox"
        />
      </div>
    );
  }
}
export default FluentUI;
