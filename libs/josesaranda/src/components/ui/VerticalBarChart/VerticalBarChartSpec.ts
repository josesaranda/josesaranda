type VerticalBarChartOptions = {
  data: { key: string; value: number }[];
  xAxis: { name: string };
  yAxis: { name: string };
};

export class VerticalBarChartSpec {
  chart;

  MAX_WIDTH = 1080;
  breakpointReached: boolean = false;

  constructor(element: HTMLDivElement, options: VerticalBarChartOptions) {
    this.chart = echarts.init(element);
    this.chart.setOption({
      tooltip: {},
      xAxis: {
        type: "category",
        data: options.data.map((dat) => dat.key),
        name: options.xAxis.name,
        nameLocation: "middle",
        nameGap: -300,
        axisLabel: {
          interval: 0,
          rotate: 45,
        },
        zlevel: 1,
      },
      yAxis: {
        type: "value",
        name: options.yAxis.name,
        nameLocation: "middle",
        nameGap: 30,
        zlevel: 1,
      },
      series: [
        {
          data: options.data.map((dat) => dat.value),
          type: "bar",
          color: getComputedStyle(document.documentElement).getPropertyValue(
            "--c-secondary"
          ),
          animationDelay: (idx: number) => idx * 50,
          zlevel: 1,
        },
      ],
      dataZoom: [
        {
          type: "slider",

          showDataShadow: true,
          handleIcon:
            "path://M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",
          handleSize: "80%",
          zlevel: 0,
        },
      ],
    });

    this.observeResize();
    this.zoom(window.innerWidth < this.MAX_WIDTH);
  }

  private observeResize() {
    window.addEventListener("resize", () => {
      this.chart.resize();
      this.handleZoom();
    });
  }

  private handleZoom() {
    const width = window.innerWidth;
    if (width >= 1080 && !this.breakpointReached) {
      this.zoom(window.innerWidth <= this.MAX_WIDTH);
      this.breakpointReached = true;
    } else if (width < 1080 && this.breakpointReached) {
      this.zoom(window.innerWidth < this.MAX_WIDTH);
      this.breakpointReached = false;
    }
  }

  private zoom(shouldZoom: boolean) {
    if (shouldZoom) {
      this.chart.dispatchAction({
        type: "dataZoom",
        start: 0,
        end: 20,
      });
    } else {
      this.chart.dispatchAction({
        type: "dataZoom",
        start: 0,
        end: 100,
      });
    }
  }
}
