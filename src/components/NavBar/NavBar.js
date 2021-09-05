import React, { useState, useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import * as C from "constant";

const NavBar = () => {
  const history = useHistory();
  const [value, setValue] = useState(0);
  const match = useRouteMatch("/:page");

  useEffect(() => {
    navigateToInitialTab();
  }, [match]);

  const handleChange = (_e, newValue) => {
    const page = _e.target?.textContent?.toLowerCase()?.replace(" ", "");
    history.push(C.ROUTES[page]);
    setValue(newValue);
  };

  const navigateToInitialTab = () => {
    if (match) {
      const page = match.params.page;
      const pageIndex = TABS.findIndex(
        (tab) => tab?.toLowerCase() === page?.toLowerCase()
      );
      setValue(pageIndex || 0);
    }
  };

  return (
    <AppBar position="static" color="transparent" style={{ position: "fixed", top: 0 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Navigation"
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
      >
        {TABS.map((tab, index) => {
          console.log(tab);
          return (
            <Tab
              key={index}
              label={
                tab === "inventoryinsufficiency"
                  ? "Inventory Insufficiency"
                  : tab === "receiptitems"
                  ? "Receipt Items"
                  : tab === "orderitems"
                  ? "Order Items"
                  : tab
              }
              index={index}
            />
          );
        })}
      </Tabs>
    </AppBar>
  );
};

const TABS = [
  "Home",
  "items",
  "orders",
  "receipts",
  "warehouse",
  "inventory",
  "customers",
  "orderitems",
  "receiptitems",
  "transactions",
  "inventoryinsufficiency",
];

export default NavBar;