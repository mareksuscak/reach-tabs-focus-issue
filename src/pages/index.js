import React from "react"

import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import "@reach/tabs/styles.css";


const IndexPage = () => {
  const ref = React.useRef();

  // This does not focus the element correctly
  React.useEffect(() => {
    ref.current.focus()
  }, [])

  // This works just fine
  // React.useEffect(() => {
  //   const timer = setTimeout(() => {
  //     ref.current.focus()
  //   }, 0)
  //   return () => clearTimeout(timer)
  // }, [])

  return (
      <Tabs>
        <TabList>
          <Tab>Uno</Tab>
          <Tab>Dos</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <input ref={ref} />
          </TabPanel>
          <TabPanel>Dos</TabPanel>
        </TabPanels>
      </Tabs>
  )
}

export default IndexPage
