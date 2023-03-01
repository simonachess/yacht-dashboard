import React from 'react';
import { CustomerIcon, DashboardIcon, EarningsIcon, MessageIcon, PercentageDown, PercentageUp, ProductSalesIcon, ReportIcon, SettingsIcon, SupportIcon, TeamIcon, TransactionsIcon } from '../icons/Icons';

export const EditorData = () => (
  <div>
    <h3>
      Try React
      React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.

      Online Playgrounds
      If you’re interested in playing around with React, you can use an online code playground. Try a Hello World template on CodePen, CodeSandbox, or Stackblitz.

      If you prefer to use your own text editor, you can also download this HTML file, edit it, and open it from the local filesystem in your browser. It does a slow runtime code transformation, so we’d only recommend using this for simple demos.

      Add React to a Website
      You can add React to an HTML page in one minute. You can then either gradually expand its presence, or keep it contained to a few dynamic widgets.

      Create a New React App
      When starting a React project, a simple HTML page with script tags might still be the best option. It only takes a minute to set up!

      As your application grows, you might want to consider a more integrated setup. There are several JavaScript toolchains we recommend for larger applications. Each of them can work with little to no configuration and lets you take full advantage of the rich React ecosystem. Learn how.

      Learn React
      People come to React from different backgrounds and with different learning styles. Whether you prefer a more theoretical or a practical approach, we hope you’ll find this section helpful.

      If you prefer to learn by doing, start with our practical tutorial.
      If you prefer to learn concepts step by step, start with our guide to main concepts.
      Like any unfamiliar technology, React does have a learning curve. With practice and some patience, you will get the hang of it.

      First Examples
      The React homepage contains a few small React examples with a live editor. Even if you don’t know anything about React yet, try changing their code and see how it affects the result.

      React for Beginners
      If you feel that the React documentation goes at a faster pace than you’re comfortable with, check out this overview of React by Tania Rascia. It introduces the most important React concepts in a detailed, beginner-friendly way. Once you’re done, give the documentation another try!

      React for Designers
      If you’re coming from a design background, these resources are a great place to get started.

      JavaScript Resources
      The React documentation assumes some familiarity with programming in the JavaScript language. You don’t have to be an expert, but it’s harder to learn both React and JavaScript at the same time.

      We recommend going through this JavaScript overview to check your knowledge level. It will take you between 30 minutes and an hour but you will feel more confident learning React.
    </h3>
  </div>
);

const areaChartData = [
  [
    { x: new Date(2002, 0, 1), y: 2.2 },
    { x: new Date(2003, 0, 1), y: 3.4 },
    { x: new Date(2004, 0, 1), y: 2.8 },
    { x: new Date(2005, 0, 1), y: 1.6 },
    { x: new Date(2006, 0, 1), y: 2.3 },
    { x: new Date(2007, 0, 1), y: 2.5 },
    { x: new Date(2008, 0, 1), y: 2.9 },
    { x: new Date(2009, 0, 1), y: 3.8 },
    { x: new Date(2010, 0, 1), y: 1.4 },
    { x: new Date(2011, 0, 1), y: 3.1 },
  ],
  [
    { x: new Date(2002, 0, 1), y: 2 },
    { x: new Date(2003, 0, 1), y: 1.7 },
    { x: new Date(2004, 0, 1), y: 1.8 },
    { x: new Date(2005, 0, 1), y: 2.1 },
    { x: new Date(2006, 0, 1), y: 2.3 },
    { x: new Date(2007, 0, 1), y: 1.7 },
    { x: new Date(2008, 0, 1), y: 1.5 },
    { x: new Date(2009, 0, 1), y: 2.8 },
    { x: new Date(2010, 0, 1), y: 1.5 },
    { x: new Date(2011, 0, 1), y: 2.3 },
  ],
  [
    { x: new Date(2002, 0, 1), y: 0.8 },
    { x: new Date(2003, 0, 1), y: 1.3 },
    { x: new Date(2004, 0, 1), y: 1.1 },
    { x: new Date(2005, 0, 1), y: 1.6 },
    { x: new Date(2006, 0, 1), y: 2 },
    { x: new Date(2007, 0, 1), y: 1.7 },
    { x: new Date(2008, 0, 1), y: 2.3 },
    { x: new Date(2009, 0, 1), y: 2.7 },
    { x: new Date(2010, 0, 1), y: 1.1 },
    { x: new Date(2011, 0, 1), y: 2.3 },
  ],
];

export const areaCustomSeries = [
  {
    dataSource: areaChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'USA',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',

  },
  {
    dataSource: areaChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'France',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',
  },
  {
    dataSource: areaChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'Germany',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',
  },
];

export const barChartData = [
  [
    { x: 'USA', y: 46 },
    { x: 'GBR', y: 27 },
    { x: 'CHN', y: 26 },
  ],
  [
    { x: 'USA', y: 37 },
    { x: 'GBR', y: 23 },
    { x: 'CHN', y: 18 },
  ],
  [
    { x: 'USA', y: 38 },
    { x: 'GBR', y: 17 },
    { x: 'CHN', y: 26 },
  ],
];

export const LinePrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'y',
  intervalType: 'Years',
  edgeLabelPlacement: 'Shift',
  majorGridLines: { width: 0 },
  background: 'white',
};

export const LinePrimaryYAxis = {
  labelFormat: '{value}%',
  rangePadding: 'None',
  minimum: 0,
  maximum: 100,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

export const links = [
  {
    title: 'Menu',
    links: [
      {
        name: 'dashboard',
        icon: <DashboardIcon />,
        path: '',
      },
      {
        name: 'transactions',
        icon: <TransactionsIcon />,
        path: 'transactions',
      },
      {
        name: 'product sales',
        icon: <ProductSalesIcon />,
        path: 'product-sales',
      },
      {
        name: 'customer',
        icon: <CustomerIcon />,
        path: 'customer',
      },
      {
        name: 'report',
        icon: <ReportIcon />,
        path: 'report',
      },
      {
        name: 'earnings',
        icon: <EarningsIcon />,
        path: 'earnings',
      },
    ],
  },

  {
    title: 'Other',
    links: [
      {
        name: 'team',
        icon: <TeamIcon />,
        path: 'team',
      },
      {
        name: 'message',
        icon: <MessageIcon />,
        path: 'message',
      },
      {
        name: 'settings',
        icon: <SettingsIcon />,
        path: 'settings',
      },
      {
        name: 'help / support',
        icon: <SupportIcon />,
        path: 'support',
      },
    ],
  },
];

export const earningData = [
  {
    amount: '5,609',
    percentage: '25%',
    title: 'Todays Visitors',
    icon: <PercentageUp />,
    link: 'Weekly statistics',
  },
  {
    amount: '11,300,00',
    percentage: '1%',
    title: 'Todays Income',
    icon: <PercentageDown />,
    link: 'View statistics',
  },
  {
    amount: '2',
    title: 'Products sold today',
    link: 'View all',
  },
  {
    amount: '1,500,00',
    title: 'Total sales in 2022',
    link: 'Overview',
  },
];

export const recentTransactions = [
  {
    region: 'United States, Florida',
    itemCode: '0306221',
    date: '03 June 2022',
    paymentMethod: 'Bank transfere',
    status: 'Completed',
  },
  {
    region: 'UA, Dubai',
    itemCode: '0806221',
    date: '08 June 2022',
    paymentMethod: 'Credit Card',
    status: 'Completed',
  },
  {
    region: 'France, Cannes',
    itemCode: '1006221',
    date: '10 June 2022',
    paymentMethod: 'Bank transfere',
    status: 'Pending',
  },
  {
    region: 'Italy, Positano',
    itemCode: '1106221',
    date: '11 June 2022',
    paymentMethod: 'Bank transfere',
    status: 'Completed',
  },
  {
    region: 'UA, Dubai',
    itemCode: '1506221',
    date: '15 June 2022',
    paymentMethod: 'Bank transfere',
    status: 'Completed',
  },
];

export const dropdownData = [
  {
    Id: '1',
    Time: 'March 2021',
  },
  {
    Id: '2',
    Time: 'April 2021',
  }, {
    Id: '3',
    Time: 'May 2021',
  },
];

export const SparklineAreaData = [
  { x: 1, yval: 2 },
  { x: 2, yval: 6 },
  { x: 3, yval: 8 },
  { x: 4, yval: 5 },
  { x: 5, yval: 10 },
];

export const pieChartData = [
  { x: 'Labour', y: 18, text: '18%' },
  { x: 'Legal', y: 8, text: '8%' },
  { x: 'Production', y: 15, text: '15%' },
  { x: 'License', y: 11, text: '11%' },
  { x: 'Facilities', y: 18, text: '18%' },
  { x: 'Taxes', y: 14, text: '14%' },
  { x: 'Insurance', y: 16, text: '16%' },
];

export const ecomPieChartData = [
  { x: '2018', y: 18, text: '35%' },
  { x: '2019', y: 18, text: '15%' },
  { x: '2020', y: 18, text: '25%' },
  { x: '2021', y: 18, text: '25%' },
];

export const stackedPrimaryXAxis = {
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  interval: 1,
  lineStyle: { width: 0 },
  labelIntersectAction: 'Rotate45',
  valueType: 'Category',
};

export const stackedPrimaryYAxis = {
  lineStyle: { width: 0 },
  minimum: 0,
  maximum: 100,
  interval: 10,
  majorTickLines: { width: 0 },
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}%',
};

export const lineChartData = [
  [
    { x: new Date(2005, 0, 1), y: 21 },
    { x: new Date(2006, 0, 1), y: 24 },
    { x: new Date(2007, 0, 1), y: 36 },
    { x: new Date(2008, 0, 1), y: 38 },
    { x: new Date(2009, 0, 1), y: 54 },
    { x: new Date(2010, 0, 1), y: 57 },
    { x: new Date(2011, 0, 1), y: 70 },
  ],
  [
    { x: new Date(2005, 0, 1), y: 28 },
    { x: new Date(2006, 0, 1), y: 44 },
    { x: new Date(2007, 0, 1), y: 48 },
    { x: new Date(2008, 0, 1), y: 50 },
    { x: new Date(2009, 0, 1), y: 66 },
    { x: new Date(2010, 0, 1), y: 78 },
    { x: new Date(2011, 0, 1), y: 84 },
  ],
  [
    { x: new Date(2005, 0, 1), y: 10 },
    { x: new Date(2006, 0, 1), y: 20 },
    { x: new Date(2007, 0, 1), y: 30 },
    { x: new Date(2008, 0, 1), y: 39 },
    { x: new Date(2009, 0, 1), y: 50 },
    { x: new Date(2010, 0, 1), y: 70 },
    { x: new Date(2011, 0, 1), y: 100 },
  ],
];

export const lineCustomSeries = [
  { dataSource: lineChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Germany',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },

  { dataSource: lineChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'England',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },

  { dataSource: lineChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'India',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },
];

export const stackedChartData = [
  [
    { day: 'Jan 01', starts: 30 },
    { day: 'Jan 02', starts: 58 },
    { day: 'Jan 03', starts: 8 },
    { day: 'Jan 04', starts: 38 },
    { day: 'Jan 05', starts: 50 },
    { day: 'Jan 06', starts: 17 },
    { day: 'Jan 07', starts: 82 },
    { day: 'Jan 08', starts: 30 },
    { day: 'Jan 09', starts: 58 },
    { day: 'Jan 10', starts: 8 },
    { day: 'Jan 11', starts: 38 },
    { day: 'Jan 12', starts: 50 },
    { day: 'Jan 13', starts: 17 },
    { day: 'Jan 14', starts: 82 },
    { day: 'Jan 15', starts: 30 },
    { day: 'Jan 16', starts: 58 },
    { day: 'Jan 17', starts: 8 },
    { day: 'Jan 18', starts: 38 },
    { day: 'Jan 19', starts: 50 },
    { day: 'Jan 20', starts: 17 },
    { day: 'Jan 21', starts: 82 },
    { day: 'Jan 22', starts: 30 },
    { day: 'Jan 23', starts: 58 },
    { day: 'Jan 24', starts: 8 },
  ],
  [
    { day: 'Jan 01', ends: 40 },
    { day: 'Jan 02', ends: 58 },
    { day: 'Jan 03', ends: 1 },
    { day: 'Jan 04', ends: 38 },
    { day: 'Jan 05', ends: 38 },
    { day: 'Jan 06', ends: 38 },
    { day: 'Jan 07', ends: 38 },
    { day: 'Jan 08', ends: 30 },
    { day: 'Jan 09', ends: 58 },
    { day: 'Jan 10', ends: 8 },
    { day: 'Jan 11', ends: 38 },
    { day: 'Jan 12', ends: 50 },
    { day: 'Jan 13', ends: 17 },
    { day: 'Jan 14', ends: 82 },
    { day: 'Jan 15', ends: 30 },
    { day: 'Jan 16', ends: 58 },
    { day: 'Jan 17', ends: 8 },
    { day: 'Jan 18', ends: 38 },
    { day: 'Jan 19', ends: 50 },
    { day: 'Jan 20', ends: 17 },
    { day: 'Jan 21', ends: 82 },
    { day: 'Jan 22', ends: 30 },
    { day: 'Jan 23', ends: 58 },
    { day: 'Jan 24', ends: 8 },
  ],
];

export const stackedCustomSeries = [
  { dataSource: stackedChartData[0],
    xName: 'day',
    yName: 'starts',
    name: 'Starts purchase',
    type: 'Column',
    legendShape: 'Rectangle',
    columnSpacing: 0.7,
    columnWidth: 1,
  },
  { dataSource: stackedChartData[1],
    xName: 'day',
    yName: 'ends',
    name: 'Starts purchase',
    type: 'Column',
    legendShape: 'Rectangle',
    columnSpacing: 0.7,
    columnWidth: 1,
  },
];

export const topVisitors = {
  labels: ['Dubai', 'Monaco', 'Marbella', 'Canes', 'Amalfi'],
  // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
  datasets: [
    {
      data: [32.4, 10.6, 9.9, 5.6, 5.4],
      // you can set indiviual colors for each bar
      backgroundColor: [
        '#F4AE5A'
      ],
      borderWidth: 1,
    },
  ],
};
