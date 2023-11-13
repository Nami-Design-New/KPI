"use strict";
!(function() {
  let o, e, s, n, l;
  l = (isDarkStyle
    ? (
        (o = config.colors_dark.cardColor),
        (n = config.colors_dark.textMuted),
        (s = config.colors_dark.bodyColor),
        (e = config.colors_dark.headingColor),
        config.colors_dark
      )
    : (
        (o = config.colors.cardColor),
        (n = config.colors.textMuted),
        (s = config.colors.bodyColor),
        (e = config.colors.headingColor),
        config.colors
      )).borderColor;
  var t = {
      donut: {
        series1: config.colors.success,
        series2: "#4fddaa",
        series3: "#8ae8c7",
        series4: "#c4f4e3"
      },
      bar: {
        series1: config.colors.primary,
        series2: "#7367F0CC",
        series3: "#7367f099"
      }
    },
    r = document.querySelector("#weeklyEarningReports"),
    a = {
      chart: {
        height: 202,
        parentHeightOffset: 0,
        type: "bar",
        toolbar: { show: !1 }
      },
      plotOptions: {
        bar: {
          barHeight: "60%",
          columnWidth: "38%",
          startingShape: "rounded",
          endingShape: "rounded",
          borderRadius: 4,
          distributed: !0
        }
      },
      grid: {
        show: !1,
        padding: { top: -30, bottom: 0, left: -10, right: -10 }
      },
      colors: [
        config.colors_label.primary,
        config.colors_label.primary,
        config.colors_label.primary,
        config.colors_label.primary,
        config.colors.primary,
        config.colors_label.primary,
        config.colors_label.primary
      ],
      dataLabels: { enabled: !1 },
      series: [{ data: [40, 65, 50, 45, 90, 55, 70] }],
      legend: { show: !1 },
      xaxis: {
        categories: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
        axisBorder: { show: !1 },
        axisTicks: { show: !1 },
        labels: {
          style: { colors: n, fontSize: "13px", fontFamily: "Public Sans" }
        }
      },
      yaxis: { labels: { show: !1 } },
      tooltip: { enabled: !1 },
      responsive: [{ breakpoint: 1025, options: { chart: { height: 199 } } }]
    },
    r = (
      null !== r && new ApexCharts(r, a).render(),
      document.querySelector("#supportTracker")
    ),
    a = {
      series: [85],
      labels: ["Completed Task"],
      chart: { height: 360, type: "radialBar" },
      plotOptions: {
        radialBar: {
          offsetY: 10,
          startAngle: -140,
          endAngle: 130,
          hollow: { size: "65%" },
          track: { background: o, strokeWidth: "100%" },
          dataLabels: {
            name: {
              offsetY: -20,
              color: n,
              fontSize: "13px",
              fontWeight: "400",
              fontFamily: "Public Sans"
            },
            value: {
              offsetY: 10,
              color: e,
              fontSize: "38px",
              fontWeight: "500",
              fontFamily: "Public Sans"
            }
          }
        }
      },
      colors: [config.colors.primary],
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          shadeIntensity: 0.5,
          gradientToColors: [config.colors.primary],
          inverseColors: !0,
          opacityFrom: 1,
          opacityTo: 0.6,
          stops: [30, 70, 100]
        }
      },
      stroke: { dashArray: 10 },
      grid: { padding: { top: -20, bottom: 5 } },
      states: {
        hover: { filter: { type: "none" } },
        active: { filter: { type: "none" } }
      },
      responsive: [
        { breakpoint: 1025, options: { chart: { height: 330 } } },
        { breakpoint: 769, options: { chart: { height: 280 } } }
      ]
    },
    r = (
      null !== r && new ApexCharts(r, a).render(),
      document.querySelector("#salesLastMonth")
    ),
    a = {
      series: [
        { name: "Sales", data: [32, 27, 27, 30, 25, 25] },
        { name: "Visits", data: [25, 35, 20, 20, 20, 20] }
      ],
      chart: { height: 300, type: "radar", toolbar: { show: !1 } },
      plotOptions: {
        radar: { polygons: { strokeColors: l, connectorColors: l } }
      },
      stroke: { show: !1, width: 0 },
      legend: {
        show: !0,
        fontSize: "13px",
        position: "bottom",
        labels: { colors: s, useSeriesColors: !1 },
        markers: { height: 10, width: 10, offsetX: -3 },
        itemMargin: { horizontal: 10 },
        onItemHover: { highlightDataSeries: !1 }
      },
      colors: [config.colors.primary, config.colors.info],
      fill: { opacity: [1, 0.85] },
      markers: { size: 0 },
      grid: { show: !1, padding: { top: 0, bottom: -5 } },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        labels: {
          show: !0,
          style: {
            colors: [n, n, n, n, n, n],
            fontSize: "13px",
            fontFamily: "Public Sans"
          }
        }
      },
      yaxis: { show: !1, min: 0, max: 40, tickAmount: 4 },
      responsive: [
        { breakpoint: 1025, options: { chart: { height: 290 } } },
        { breakpoint: 769, options: { chart: { height: 390 } } }
      ]
    },
    r = (
      null !== r && new ApexCharts(r, a).render(),
      document.querySelector("#totalRevenueChart")
    ),
    a = {
      series: [
        {
          name: "Earning",
          data: [270, 210, 180, 200, 250, 280, 250, 270, 150]
        },
        {
          name: "Expense",
          data: [-140, -160, -180, -150, -100, -60, -80, -100, -180]
        }
      ],
      chart: {
        height: 390,
        parentHeightOffset: 0,
        stacked: !0,
        type: "bar",
        toolbar: { show: !1 }
      },
      tooltip: { enabled: !1 },
      plotOptions: {
        bar: {
          horizontal: !1,
          columnWidth: "40%",
          borderRadius: 9,
          startingShape: "rounded",
          endingShape: "rounded"
        }
      },
      colors: [config.colors.primary, config.colors.warning],
      dataLabels: { enabled: !1 },
      stroke: { curve: "smooth", width: 6, lineCap: "round", colors: [o] },
      legend: {
        show: !0,
        horizontalAlign: "right",
        position: "top",
        fontFamily: "Public Sans",
        markers: { height: 12, width: 12, radius: 12, offsetX: -3, offsetY: 2 },
        labels: { colors: s },
        itemMargin: { horizontal: 10, vertical: 2 }
      },
      grid: { show: !1, padding: { bottom: -8, top: 20 } },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep"
        ],
        labels: {
          style: { fontSize: "13px", colors: n, fontFamily: "Public Sans" }
        },
        axisTicks: { show: !1 },
        axisBorder: { show: !1 }
      },
      yaxis: {
        labels: {
          offsetX: -16,
          style: { fontSize: "13px", colors: n, fontFamily: "Public Sans" }
        },
        min: -200,
        max: 300,
        tickAmount: 5
      },
      responsive: [
        {
          breakpoint: 1700,
          options: { plotOptions: { bar: { columnWidth: "43%" } } }
        },
        {
          breakpoint: 1441,
          options: { plotOptions: { bar: { columnWidth: "50%" } } }
        },
        {
          breakpoint: 1300,
          options: { plotOptions: { bar: { columnWidth: "62%" } } }
        },
        {
          breakpoint: 991,
          options: { plotOptions: { bar: { columnWidth: "38%" } } }
        },
        {
          breakpoint: 850,
          options: { plotOptions: { bar: { columnWidth: "50%" } } }
        },
        {
          breakpoint: 449,
          options: {
            plotOptions: { bar: { columnWidth: "73%" } },
            xaxis: { labels: { offsetY: -5 } },
            legend: {
              show: !0,
              horizontalAlign: "right",
              position: "top",
              itemMargin: { horizontal: 10, vertical: 0 }
            }
          }
        },
        {
          breakpoint: 394,
          options: {
            plotOptions: { bar: { columnWidth: "88%" } },
            legend: {
              show: !0,
              horizontalAlign: "center",
              position: "bottom",
              markers: { offsetX: -3, offsetY: 0 },
              itemMargin: { horizontal: 10, vertical: 5 }
            }
          }
        }
      ],
      states: {
        hover: { filter: { type: "none" } },
        active: { filter: { type: "none" } }
      }
    },
    r = (
      null !== r && new ApexCharts(r, a).render(),
      document.querySelector("#budgetChart")
    ),
    a = {
      chart: {
        height: 100,
        toolbar: { show: !1 },
        zoom: { enabled: !1 },
        type: "line"
      },
      series: [
        {
          name: "Last Month",
          data: [20, 10, 30, 16, 24, 5, 40, 23, 28, 5, 30]
        },
        {
          name: "This Month",
          data: [50, 40, 60, 46, 54, 35, 70, 53, 58, 35, 60]
        }
      ],
      stroke: { curve: "smooth", dashArray: [5, 0], width: [1, 2] },
      legend: { show: !1 },
      colors: [l, config.colors.primary],
      grid: {
        show: !1,
        borderColor: l,
        padding: { top: -30, bottom: -15, left: 25 }
      },
      markers: { size: 0 },
      xaxis: {
        labels: { show: !1 },
        axisTicks: { show: !1 },
        axisBorder: { show: !1 }
      },
      yaxis: { show: !1 },
      tooltip: { enabled: !1 }
    },
    r = (
      null !== r && new ApexCharts(r, a).render(),
      document.querySelector("#projectStatusChart")
    ),
    a = {
      chart: { height: 252, type: "area", toolbar: !1 },
      markers: { strokeColor: "transparent" },
      series: [
        {
          data: [
            2e3,
            2e3,
            4e3,
            4e3,
            3050,
            3050,
            2e3,
            2e3,
            3050,
            3050,
            4700,
            4700,
            2750,
            2750,
            5700,
            5700
          ]
        }
      ],
      dataLabels: { enabled: !1 },
      grid: { show: !1, padding: { left: -10, right: -5 } },
      stroke: { width: 3, curve: "straight" },
      colors: [config.colors.primary],
      fill: {
        type: "gradient",
        gradient: { opacityFrom: 0.6, opacityTo: 0.15, stops: [0, 95, 100] }
      },
      xaxis: {
        labels: { show: !1 },
        axisBorder: { show: !1 },
        axisTicks: { show: !1 },
        lines: { show: !1 }
      },
      yaxis: { labels: { show: !1 }, min: 1e3, max: 6e3, tickAmount: 5 },
      tooltip: { enabled: !1 }
    };
  function i(e, t) {
    var r = config.colors_label.primary,
      a = config.colors.primary,
      i = [];
    for (let o = 0; o < e.length; o++) o === t ? i.push(a) : i.push(r);
    return {
      chart: {
        height: 258,
        parentHeightOffset: 0,
        type: "bar",
        toolbar: { show: !1 }
      },
      plotOptions: {
        bar: {
          columnWidth: "32%",
          startingShape: "rounded",
          borderRadius: 4,
          distributed: !0,
          dataLabels: { position: "top" }
        }
      },
      grid: { show: !1, padding: { top: 0, bottom: 0, left: -10, right: -10 } },
      colors: i,
      dataLabels: {
        enabled: !0,
        formatter: function(o) {
          return o + "k";
        },
        offsetY: -20,
        style: {
          fontSize: "15px",
          colors: [s],
          fontWeight: "500",
          fontFamily: "Public Sans"
        }
      },
      series: [{ data: e }],
      legend: { show: !1 },
      tooltip: { enabled: !1 },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep"
        ],
        axisBorder: { show: !0, color: l },
        axisTicks: { show: !1 },
        labels: {
          style: { colors: n, fontSize: "13px", fontFamily: "Public Sans" }
        }
      },
      yaxis: {
        labels: {
          offsetX: -15,
          formatter: function(o) {
            return parseInt(+o) + "k";
          },
          style: { fontSize: "13px", colors: n, fontFamily: "Public Sans" },
          min: 0,
          max: 6e4,
          tickAmount: 6
        }
      },
      responsive: [
        {
          breakpoint: 1441,
          options: { plotOptions: { bar: { columnWidth: "41%" } } }
        },
        {
          breakpoint: 590,
          options: {
            plotOptions: { bar: { columnWidth: "61%", borderRadius: 5 } },
            yaxis: { labels: { show: !1 } },
            grid: { padding: { right: 0, left: -20 } },
            dataLabels: { style: { fontSize: "12px", fontWeight: "400" } }
          }
        }
      ]
    };
  }
  null !== r && new ApexCharts(r, a).render();
  var r = $.ajax({
      url: assetsPath + "json/earning-reports-charts.json",
      dataType: "json",
      async: !1
    }).responseJSON,
    a = document.querySelector("#earningReportsTabsOrders"),
    c = i(r.data[0].chart_data, r.data[0].active_option),
    a = (
      null !== a && new ApexCharts(a, c).render(),
      document.querySelector("#earningReportsTabsSales")
    ),
    c = i(r.data[1].chart_data, r.data[1].active_option),
    a = (
      null !== a && new ApexCharts(a, c).render(),
      document.querySelector("#earningReportsTabsProfit")
    ),
    c = i(r.data[2].chart_data, r.data[2].active_option),
    a = (
      null !== a && new ApexCharts(a, c).render(),
      document.querySelector("#earningReportsTabsIncome")
    ),
    c = i(r.data[3].chart_data, r.data[3].active_option),
    r = (
      null !== a && new ApexCharts(a, c).render(),
      document.querySelector("#totalEarningChart")
    ),
    a = {
      series: [
        { name: "Earning", data: [15, 10, 20, 8, 12, 18, 12, 5] },
        { name: "Expense", data: [-7, -10, -7, -12, -6, -9, -5, -8] }
      ],
      chart: {
        height: 215,
        parentHeightOffset: 0,
        stacked: !0,
        type: "bar",
        toolbar: { show: !1 }
      },
      tooltip: { enabled: !1 },
      legend: { show: !1 },
      plotOptions: {
        bar: {
          horizontal: !1,
          columnWidth: "15%",
          borderRadius: 4,
          startingShape: "rounded",
          endingShape: "rounded"
        }
      },
      colors: [config.colors.danger, config.colors.primary],
      dataLabels: { enabled: !1 },
      grid: {
        show: !1,
        padding: { top: -40, bottom: -20, left: -10, right: -2 }
      },
      xaxis: {
        labels: { show: !1 },
        axisTicks: { show: !1 },
        axisBorder: { show: !1 }
      },
      yaxis: { labels: { show: !1 } },
      responsive: [
        {
          breakpoint: 1468,
          options: { plotOptions: { bar: { columnWidth: "22%" } } }
        },
        {
          breakpoint: 1197,
          options: {
            chart: { height: 212 },
            plotOptions: { bar: { borderRadius: 8, columnWidth: "26%" } }
          }
        },
        {
          breakpoint: 783,
          options: {
            chart: { height: 210 },
            plotOptions: { bar: { borderRadius: 6, columnWidth: "28%" } }
          }
        },
        {
          breakpoint: 589,
          options: { plotOptions: { bar: { columnWidth: "16%" } } }
        },
        {
          breakpoint: 520,
          options: {
            plotOptions: { bar: { borderRadius: 6, columnWidth: "18%" } }
          }
        },
        {
          breakpoint: 426,
          options: {
            plotOptions: { bar: { borderRadius: 5, columnWidth: "20%" } }
          }
        },
        {
          breakpoint: 381,
          options: { plotOptions: { bar: { columnWidth: "24%" } } }
        }
      ],
      states: {
        hover: { filter: { type: "none" } },
        active: { filter: { type: "none" } }
      }
    };
  null !== r && new ApexCharts(r, a).render();
  const d = document.querySelector("#horizontalBarChart"),
    p = {
      chart: { height: 360, type: "bar", toolbar: { show: !1 } },
      plotOptions: {
        bar: {
          horizontal: !0,
          barHeight: "60%",
          distributed: !0,
          startingShape: "rounded",
          borderRadius: 7
        }
      },
      grid: {
        strokeDashArray: 10,
        borderColor: l,
        xaxis: { lines: { show: !0 } },
        yaxis: { lines: { show: !1 } },
        padding: { top: -35, bottom: -12 }
      },
      colors: [
        config.colors.primary,
        config.colors.info,
        config.colors.success,
        config.colors.secondary,
        config.colors.danger,
        config.colors.warning
      ],
      dataLabels: {
        enabled: !0,
        style: {
          colors: ["#fff"],
          fontWeight: 200,
          fontSize: "13px",
          fontFamily: "Public Sans"
        },
        formatter: function(o, e) {
          return p.labels[e.dataPointIndex];
        },
        offsetX: 0,
        dropShadow: { enabled: !1 }
      },
      labels: ["UI Design", "UX Design", "Music", "Animation", "React", "SEO"],
      series: [{ data: [35, 20, 14, 12, 10, 9] }],
      xaxis: {
        categories: ["6", "5", "4", "3", "2", "1"],
        axisBorder: { show: !1 },
        axisTicks: { show: !1 },
        labels: {
          style: { colors: n, fontSize: "13px" },
          formatter: function(o) {
            return o + "%";
          }
        }
      },
      yaxis: {
        max: 35,
        labels: {
          style: { colors: [n], fontFamily: "Public Sans", fontSize: "13px" }
        }
      },
      tooltip: {
        enabled: !0,
        style: { fontSize: "12px" },
        onDatasetHover: { highlightDataSeries: !1 },
        custom: function({ series: o, seriesIndex: e, dataPointIndex: t }) {
          return '<div class="px-3 py-2"><span>' + o[e][t] + "%</span></div>";
        }
      },
      legend: { show: !1 }
    };
  null !== d && new ApexCharts(d, p).render();
  (c = document.querySelector("#carrierPerformance")), (r = {
    chart: {
      height: 275,
      type: "bar",
      parentHeightOffset: 0,
      stacked: !1,
      toolbar: { show: !1 },
      zoom: { enabled: !1 }
    },
    plotOptions: {
      bar: {
        horizontal: !1,
        columnWidth: "50%",
        startingShape: "rounded",
        endingShape: "flat",
        borderRadius: 4
      }
    },
    dataLabels: { enabled: !1 },
    series: [
      { name: "Delivery rate", type: "column", data: [5, 4.5, 4, 3] },
      { name: "Delivery time", type: "column", data: [4, 3.5, 3, 2.5] },
      { name: "Delivery exceptions", type: "column", data: [3.5, 3, 2.5, 2] }
    ],
    xaxis: {
      tickAmount: 10,
      categories: ["Carrier A", "Carrier B", "Carrier C", "Carrier D"],
      labels: {
        style: {
          colors: n,
          fontSize: "13px",
          fontFamily: "Public Sans",
          fontWeight: 400
        }
      },
      axisBorder: { show: !1 },
      axisTicks: { show: !1 }
    },
    yaxis: {
      tickAmount: 4,
      min: 1,
      max: 5,
      labels: {
        style: {
          colors: n,
          fontSize: "13px",
          fontFamily: "Public Sans",
          fontWeight: 400
        },
        formatter: function(o) {
          return o;
        }
      }
    },
    legend: {
      show: !0,
      position: "bottom",
      markers: { width: 8, height: 8, offsetX: -3, radius: 12 },
      height: 40,
      offsetY: 0,
      itemMargin: { horizontal: 10, vertical: 0 },
      fontSize: "13px",
      fontFamily: "Public Sans",
      fontWeight: 400,
      labels: { colors: e, useSeriesColors: !1 },
      offsetY: 10
    },
    grid: { strokeDashArray: 6, padding: { bottom: 5 } },
    colors: [t.bar.series1, t.bar.series2, t.bar.series3],
    fill: { opacity: 1 },
    responsive: [
      {
        breakpoint: 1400,
        options: {
          chart: { height: 275 },
          legend: { fontSize: "13px", offsetY: 10 }
        }
      },
      {
        breakpoint: 576,
        options: {
          chart: { height: 300 },
          legend: { itemMargin: { vertical: 5, horizontal: 10 }, offsetY: 7 }
        }
      }
    ]
  }), null !== c && new ApexCharts(c, r).render(), (a = document.querySelector(
    "#deliveryExceptionsChart"
  )), (c = {
    chart: { height: 400, parentHeightOffset: 0, type: "donut" },
    labels: [
      "Incorrect address",
      "Weather conditions",
      "Federal Holidays",
      "Damage during transit"
    ],
    series: [13, 25, 22, 40],
    colors: [
      t.donut.series1,
      t.donut.series2,
      t.donut.series3,
      t.donut.series4
    ],
    stroke: { width: 0 },
    dataLabels: {
      enabled: !1,
      formatter: function(o, e) {
        return parseInt(o) + "%";
      }
    },
    legend: {
      show: !0,
      position: "bottom",
      offsetY: 10,
      markers: { width: 8, height: 8, offsetX: -3 },
      itemMargin: { horizontal: 15, vertical: 5 },
      fontSize: "13px",
      fontFamily: "Public Sans",
      fontWeight: 400,
      labels: { colors: e, useSeriesColors: !1 }
    },
    tooltip: { theme: !1 },
    grid: { padding: { top: 15 } },
    plotOptions: {
      pie: {
        donut: {
          size: "75%",
          labels: {
            show: !0,
            value: {
              fontSize: "26px",
              fontFamily: "Public Sans",
              color: e,
              fontWeight: 500,
              offsetY: -30,
              formatter: function(o) {
                return parseInt(o) + "%";
              }
            },
            name: { offsetY: 20, fontFamily: "Public Sans" },
            total: {
              show: !0,
              fontSize: "0.9rem",
              label: "AVG. Exceptions",
              color: n,
              formatter: function(o) {
                return "30%";
              }
            }
          }
        }
      }
    },
    responsive: [
      { breakpoint: 1025, options: { chart: { height: 380 } } },
      { breakpoint: 420, options: { chart: { height: 300 } } }
    ]
  });
  null !== a && new ApexCharts(a, c).render();
})();
