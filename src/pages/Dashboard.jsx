import React from 'react';
import Select from 'react-select'

import classNames from 'classnames';
import { earningData, recentTransactions, topVisitors } from '../data/data';
import { DownloadIcon, MembersOnlineIcon, PercentageUp, TopVisitorsOnlineIcon } from '../icons/Icons';

import { BarChart } from '../components/Charts/BarChart'
// eslint-disable-next-line no-unused-vars
import {Chart as ChartJS} from 'chart.js/auto'


const DropDown = () => {
    const options = [
      { value: 'weekly', label: 'Weekly' },
      { value: 'monthly', label: 'Monthly' },
      { value: 'yearly', label: 'Yearly' }
    ]
  return <Select
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                background: '#002149',
                borderRadius: '5px',
                color: 'white',
              }),
              placeholder: (baseStyles, state) => ({
                ...baseStyles,
                color: 'white'
              }),
              dropdownIndicator: styles => ({
                ...styles,
                color: 'white',
              }),

            }}
            components={{
              IndicatorSeparator: () => null,
            }}
            options={options}
        />
}

const Dashboard = () => (
  <div className="mt-[47px] flex flex-col">
    <div className="flex justify-between w-full mb-12">
      <div className="grid grid-cols-2 gap-8">
        {earningData.map((item) => (
          <div key={item.title} className="white-gradient-background flex flex-col justify-between h-[161px] w-[211px] px-5 py-[22px] rounded-[30px]">
            <p className="text-xl text-[#002149] mb-2">{item.title}</p>
            <div className={classNames('flex', item.percentage && 'justify-between')}>
              <div className={classNames('font-semibold text-[#F36D45] flex items-end w-full', item.percentage ? 'text-2xl' : 'text-4xl justify-center')}>{item.amount}</div>
              { item.percentage
                && (
                  <div className="flex flex-col items-center">
                    <div className="flex">
                      <span>{item.icon}</span>
                      <span className="text-sm ml-2">
                        {item.percentage}
                      </span>
                    </div>
                    <span className="text-[11px]">This week</span>
                  </div>
                )
              }
            </div>
            <a href="/" className="text-xs underline">{item.link}</a>
          </div>
        ))}
      </div>
      <div className="w-[537px] h-[353px] white-gradient-background rounded-[30px] py-[30px] px-6">
        <div className="flex justify-between w-full"><span className="text-2xl font-normal">Sales Analytics</span><span><DropDown /></span></div>
      </div>
    </div>
    <div className="flex justify-between h-[237px] mb-12">
      <div className="white-gradient-background w-[306px] h-full rounded-[30px] py-[30px] px-6">
        <MembersOnlineIcon className="mb-2.5" />
        <span className="text-2xl">Member online</span>
        <div className="flex flex-col items-start mt-[14px]">
          <div className="font-semibold text-[#F36D45] flex items-end w-full text-4xl mb-5">
            15,650
          </div>
          <div className="flex items-center">
            <PercentageUp />
            <span className="text-sm ml-2">
              5.6 %
            </span>
            <span className="text-[11px] ml-1.5">From last week</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col item-center white-gradient-background w-[683px] h-full rounded-[30px] py-[30px] px-6">
        <div className="flex flex-col items-center mb-4">
          <div className="flex justify-between w-full items-center mb-[17px]">
            <div className="flex items-center"><TopVisitorsOnlineIcon /> <span className="text-2xl ml-4">Top visitors</span></div>
            <a href="/" className="underline text-xs">View more</a>
          </div>
          <BarChart chartData={topVisitors} />
        </div>
        <div className="h-[130px]">
            diagrama
        </div>
      </div>
    </div>
    <div className="white-gradient-background w-full h-[353px] rounded-[30px] mb-12 py-[30px] px-6">
      <div className="flex justify-between w-full"><span className="text-2xl font-normal">Purchase procedure trafic</span><span><DropDown /></span></div>
    </div>
    <div className="flex justify-between h-[353px]">
      <div className="flex flex-col white-gradient-background w-[555px] h-full rounded-[30px] mb-12  py-[30px] px-6">
        <div className="flex justify-between w-full"><span className="text-2xl font-normal">Transaction history</span><span><DropDown /></span></div>
        <div className="mt-[34px]">
          <table>
            <tr className="text-[13px] text-[#002149]">
              <th className="w-[116px] py-[7px] text-center font-medium px-2">Country, region</th>
              <th className="w-[116px] py-[7px] text-center font-medium px-2">Item code</th>
              <th className="w-[116px] py-[7px] text-center font-medium px-2">Date</th>
              <th className="w-[116px] py-[7px] text-center font-medium px-2">Payment method</th>
              <th className="w-[98px] py-[7px] text-center font-medium px-2">Status</th>
            </tr>
            { recentTransactions.map((x) => (
              <tr className="text-[11px]">
                <td className="w-[116px] py-[7px] text-center">{x.region}</td>
                <td className="w-[116px] py-[7px] text-center">{x.itemCode}</td>
                <td className="w-[116px] py-[7px] text-center">{x.date}</td>
                <td className="w-[116px] py-[7px] text-center">{x.paymentMethod}</td>
                <td className={classNames('w-[98px] py-[7px] text-center', x.status === 'Completed' ? 'text-[#08C504]' : 'text-[#F4AE5A]')}>{x.status}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
      <div className="white-gradient-background w-[426px] h-full rounded-[30px] mb-12 py-[30px] px-6">
        <div className="flex justify-between w-full"><span className="text-2xl font-normal">Time spend</span><div className="flex items-center space-x-2"><DropDown /><DownloadIcon /></div></div>
        </div>
    </div>

  </div>
);

export default Dashboard;
