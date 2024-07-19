import React from 'react'

export default function TabItem(props) {
    const {tab, onChangeTab, activeTabId} = props;
  return (
    <li className='m-5 tab-item-container'>
        <button type='button' className={activeTabId === tab.tabId ? 'active tab-button':'tab-button'} onClick={()=>onChangeTab(tab.tabId)}>{tab.displayText}</button>
    </li>
  )
}
