import * as echarts from 'echarts/core';
import {
    BarChart,
    // 系列类型的定义后缀都为 SeriesOption
    type BarSeriesOption,
    LineChart,
    type LineSeriesOption,
    PieChart
} from 'echarts/charts'; 
import {
    TitleComponent,
    // 组件类型的定义后缀都为 ComponentOption
    type TitleComponentOption,
    LegendComponent,
    type LegendComponentOption,
    ToolboxComponent, 
    type ToolboxComponentOption,
    TooltipComponent,
    type TooltipComponentOption,
    GridComponent,
    type GridComponentOption
} from 'echarts/components';
import {
    CanvasRenderer
} from 'echarts/renderers';

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = echarts.ComposeOption<
  BarSeriesOption | 
  LineSeriesOption | 
  TitleComponentOption | 
  GridComponentOption | 
  TooltipComponentOption |
  ToolboxComponentOption |
  LegendComponentOption
>;

// 注册必须的组件
echarts.use(
    [
        TitleComponent, 
        TooltipComponent, 
        LineChart, 
        GridComponent, 
        BarChart, 
        CanvasRenderer,
        LegendComponent,
        ToolboxComponent,
        PieChart 
    ]
);

export default echarts