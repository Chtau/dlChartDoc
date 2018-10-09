import { PropertyElement } from "./propertytable";

export class PropertyTableValues {

  typesValue: PropertyElement[] = [
    {name: 'name: string', description: 'Identifier Name (used for default Tooltip)'},
    {name: 'value: number', description: 'Item value'},
    {name: 'color: string', description: 'valid color string (Color name or hex)'},
    {name: 'cssClass?: string', description: 'additional CSS class for the Element'},
    {name: 'tooltipConfig?: TooltipConfiguration', description: 'Tooltip configuration for this Element'},
    {name: 'data?: any', description: 'additonal custom data'},
  ];

  typesDonutConfiguration: PropertyElement[] = [
    {name: 'size: number', description: 'radius size for the Donut hole (0.0 to 1.0)'},
    {name: 'color: string', description: 'Donut hole color'},
  ];

  typesTooltip: PropertyElement[] = [
    {name: 'HideValue?: boolean', description: 'should hide the value in the Tooltip'},
    {name: 'ValueFunction?: (n: IValue, percent: number) => string', description: 'custom function for the Tooltip text'},
  ];

  typesLine: PropertyElement[] = [
    {name: 'name: string', description: 'Identifier Name (used for default Tooltip)'},
    {name: 'points: Point[]', description: 'Points for this Line'},
    {name: 'color: string', description: 'valid color string (Color name or hex)'},
    {name: 'cssClass?: string', description: 'additional CSS class for the Element'},
    {name: 'tooltipConfig?: TooltipConfiguration', description: 'Tooltip configuration for this Element'},
    {name: 'data?: any', description: 'additonal custom data'},
  ];

  typesPoint: PropertyElement[] = [
    {name: 'name: string', description: 'Identifier Name (used for default Tooltip)'},
    {name: 'xValue: number', description: 'value for the x Axis'},
    {name: 'yValue: number', description: 'value for the y Axis'},
    {name: 'color?: string', description: 'valid color string or null (Color name or hex)'},
    {name: 'cssClass?: string', description: 'additional CSS class for the Element'},
    {name: 'tooltipConfig?: TooltipConfiguration', description: 'Tooltip configuration for this Element'},
    {name: 'data?: any', description: 'additonal custom data'},
  ];

  interfaceValue: PropertyElement[] = [
    {name: 'name: string', description: 'Identifier Name (used for default Tooltip)'},
    {name: 'color: string', description: 'valid color string (Color name or hex)'},
    {name: 'cssClass?: string', description: 'additional CSS class for the Element'},
    {name: 'tooltipConfig?: TooltipConfiguration', description: 'Tooltip configuration for this Element'},
    {name: 'data?: any', description: 'additonal custom data'},
  ];

  interfaceChartItem: PropertyElement[] = [
    {name: 'id: string', description: 'Element id'},
    {name: 'color: string', description: 'Element color'},
    {name: 'sourceItem: IValue', description: 'source input item'},
    {name: 'calculatedPercent: number', description: 'percentage value for the item'}
  ];

  interfaceTextConfig: PropertyElement[] = [
    {name: 'HideValue?: boolean', description: 'should hide the value in the text'},
    {name: 'ValueFunction?: (n: IValue, percent: number) => string', description: 'custom function for the text'},
  ];

  enumsChartOrientation: PropertyElement[] = [
    {name: 'Bottom: number = 0', description: 'value Axis is on the bottom'},
    {name: 'Left: number = 1', description: 'value Axis is on the left side'},
    {name: 'Right: number = 2', description: 'value Axis is on the right side'},
    {name: 'Top: number = 3', description: 'value Axis is on the top'},
  ];

  propertiesTooltipTheme: PropertyElement[] = [
    {name: 'background-color', description: 'Tooltip background Color'},
    {name: 'foreground-color', description: 'Tooltip foreground Color'},
  ];
}